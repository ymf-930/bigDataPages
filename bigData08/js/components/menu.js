Vue.component('v-menu', {
    template: `
    <div class="main">
    <b-menu active-name="collaboration" accordion @select="handleSelect">
       <b-menu-item name="collaboration">九项协作机制</b-menu-item>
       <b-menu-item name="linkage">五项联动机制</b-menu-item>
       <b-menu-item name="norm">九项规范制度</b-menu-item>
       <b-submenu name="2">
         <template slot="title">工作成效</template>
         <b-menu-item name="experience">典型经验</b-menu-item>
         <b-menu-item name="propaganda">宣传推广</b-menu-item>
         <b-menu-item name="honor">获得荣誉</b-menu-item>
       </b-submenu>
    </b-menu>
    </div>`,
    props: {

    },
    data() {
        return {
            mainStyle: null,
        }
    },
    emits: ['change'],
    mounted() {

    },
    methods: {
        handleSelect(name){
            this.$emit('change',name)
        }
    }
})
