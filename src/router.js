import VueRouter from 'vue-router'

//导入 Account 组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//导入 Account 子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'


var router = new VueRouter({
  routes: [
    // account  goodslist
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register }
      ]
    },
    { path: '/goodslist', component: goodslist }
  ]
})

// 把路由对象暴露出去
export default router