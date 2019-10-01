//导入vue包
import Vue from 'vue'
// 按需导入 Mint-UI 中的组件   
import { Header} from 'mint-ui'
Vue.component(Header.name, Header)




import App from './App.vue'


var vm = new Vue({
  el:'#app',
  render: c => c(App),
 
})