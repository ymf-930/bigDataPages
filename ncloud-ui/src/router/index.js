import Vue from 'vue'
import VueRouter from 'vue-router'
import BinUI from 'bin-ui'

const Home = () => import('../pages/data/home/Home')
const Overview = () => import('../pages/data/overview/Overview')
const Evaluation = () => import('../pages/data/evaluation/evaluation')
const Application = () => import('../pages/data/app/application')
const Summary = () => import('../pages/data/summary/Summary')
const SummaryMap = () => import('../pages/data/summary/SummaryCopy')
const Public = () => import('../pages/data/public/Public')
const Union = () => import('../pages/data/union/Union')
const Affair = () => import('../pages/data/map/Affair')
const Xyd = () => import('../pages/data/analysis/Analysis')
// const Map = () => import('../pages/data/map/Map')

Vue.use(BinUI)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // {
    //   path: '/test',
    //   component: () => import('../pages/test.vue'),
    // },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/overview',
      component: Overview,
    },
    {
      path: '/evaluation',
      component: Evaluation,
    },
    {
      path: '/application',
      component: Application,
    },
    {
      path: '/summary',
      component: Summary,
    },
    {
      path: '/public',
      component: Public,
    },
    {
      path: '/union',
      component: Union,
    },
    {
      path: '/affair',
      component: Affair,
    },
    {
      path: '/map',
      component: SummaryMap,
    },
    {
      path: '/xyd',
      component: Xyd,
    },
    {
      path: '/',
      redirect: '/home',
    },
  ],
})

export default router
