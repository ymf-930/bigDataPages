<template>
  <div ref="modelContainer" class="model-container" :style="containerStyle" />
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'Earth3d',
  props: {
    width: {
      type: Number,
      default: 580,
    },
    height: {
      type: Number,
      default: 580,
    },
  },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      clock: null,
      control: null,
      axes: null,
      earthParticles: null,
      options: {
        CITY_RADIUS: 100,
        CITY_MARGIN: 1,
        BLINT_SPEED: 0.05,
        HEXAGON_RADIUS: 5,
        radius: 100,
      },
      animation: null,
    }
  },
  computed: {
    containerStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      }
    },
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const img = document.createElement('img')
      img.src = require('@/assets/images/map3d/earth.jpg')
      img.onload = () => {
        const cvs = document.createElement('canvas')
        const ctx = cvs.getContext('2d')
        cvs.width = img.width
        cvs.height = img.height
        ctx.drawImage(img, 0, 0, cvs.width, cvs.height)
        const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height)
        this.createBasicScene() // 基本渲染容器
        this.createEarthParticles(img, imgData) // 渲染地球粒子
        this.animate()
      }
    },
    createBasicScene() {
      let width = this.$refs.modelContainer.offsetWidth
      let height = this.$refs.modelContainer.offsetHeight
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
      this.camera.position.z = 350
      this.renderer = new THREE.WebGLRenderer({ alpha: true })
      this.renderer.setSize(width, height)
      this.renderer.setClearColor(0xeeeeee, 0.0)
      this.renderer.autoClearColor = new THREE.Color(1, 0, 0, 0)
      this.$refs.modelContainer.appendChild(this.renderer.domElement)
      this.clock = new THREE.Clock()
      this.axes = new THREE.AxesHelper(this.options.CITY_RADIUS + 10)
      this.earthParticles = new THREE.Object3D()
    },
    createEarthParticles(img, imgData) {
      let positions = []
      let materials = []
      let sizes = []
      for (let i = 0; i < 2; i++) {
        positions[i] = {
          positions: [],
        }
        sizes[i] = {
          sizes: [],
        }
        let mat = new THREE.PointsMaterial()
        mat.size = 5
        mat.color = new THREE.Color('#079cd1')
        let img = require('@/assets/images/map3d/dot.png')
        mat.map = new THREE.TextureLoader().load(img)
        mat.depthWrite = false
        mat.transparent = true
        mat.opacity = 0
        mat.side = THREE.FrontSide
        mat.blending = THREE.AdditiveBlending
        let n = i / 2
        mat.t_ = n * Math.PI * 2
        mat.speed_ = this.options.BLINT_SPEED
        mat.min_ = 0.2 * Math.random() + 0.5
        mat.delta_ = 0.1 * Math.random() + 0.1
        mat.opacity_coef_ = 1
        materials.push(mat)
      }
      const spherical = new THREE.Spherical()
      spherical.radius = this.options.radius
      const step = 250
      for (let i = 0; i < step; i++) {
        let vec = new THREE.Vector3()
        let radians = (step * (1 - Math.sin((i / step) * Math.PI))) / step + 0.5
        for (let j = 0; j < step; j += radians) {
          let c = j / step
          let f = i / step
          let index = Math.floor(2 * Math.random())
          let pos = positions[index]
          let size = sizes[index]
          let n = parseInt(img.width * c) // 根据横纵百分比计算图象坐标系中的坐标
          let o = parseInt(img.height * f) // 根据横纵百分比计算图象坐标系中的坐标
          // 根据横纵百分比判断在底图中的像素值
          const isLandByUV = imgData.data[4 * (o * imgData.width + n)] === 0

          if (isLandByUV) {
            spherical.theta = c * Math.PI * 2 - Math.PI / 2 // 横纵百分比转换为theta和phi夹角
            spherical.phi = f * Math.PI // 横纵百分比转换为theta和phi夹角
            vec.setFromSpherical(spherical) // 夹角转换为世界坐标
            pos.positions.push(vec.x)
            pos.positions.push(vec.y)
            pos.positions.push(vec.z)
            if (j % 3 === 0) {
              size.sizes.push(6.0)
            }
          }
        }
      }
      for (let i = 0; i < positions.length; i++) {
        let pos = positions[i]
        let size = sizes[i]
        let bufferGeom = new THREE.BufferGeometry()
        let typedArr1 = new Float32Array(pos.positions.length)
        let typedArr2 = new Float32Array(size.sizes.length)
        for (let j = 0; j < pos.positions.length; j++) {
          typedArr1[j] = pos.positions[j]
        }
        for (let j = 0; j < size.sizes.length; j++) {
          typedArr2[j] = size.sizes[j]
        }
        bufferGeom.setAttribute('position', new THREE.BufferAttribute(typedArr1, 3))
        bufferGeom.setAttribute('size', new THREE.BufferAttribute(typedArr2, 1))
        bufferGeom.computeBoundingSphere()
        let particle = new THREE.Points(bufferGeom, materials[i])
        this.earthParticles.add(particle)
      }
      this.scene.add(this.earthParticles)
    },
    animate() {
      requestAnimationFrame(this.animate)
      // 球面粒子闪烁
      let objects = this.earthParticles.children
      objects.forEach(obj => {
        let material = obj.material
        material.t_ += material.speed_
        material.opacity =
          (Math.sin(material.t_) * material.delta_ + material.min_) * material.opacity_coef_
        material.needsUpdate = true
      })
      this.earthParticles.rotation.y += 0.005
      this.renderer.render(this.scene, this.camera)
    },
  },
}
</script>
