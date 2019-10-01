//导入vue包
import Vue from 'vue'
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
 
})