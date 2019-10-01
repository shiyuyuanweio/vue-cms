//导入vue包
import Vue from 'vue'
//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)
//1.3 导入自己的router.js 路由模块
import router from './router.js'



// 按需导入 Mint-UI 中的组件   
import { Header} from 'mint-ui'
Vue.component(Header.name, Header)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import App from './App.vue'


var vm = new Vue({
  el:'#app',
  render: c => c(App),
  router // 1.4 挂在路由对象到VM 的实例上
 
})