import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Register from '@/views/register'
import Forget from '@/views/forget'
import Forget2 from '@/views/forget2'
import Set3 from '@/views/set3'
import Set from '@/views/set'
import Zhuye from '@/views/zhuye'
import Shopcar from '@/views/Shopcar'
import Submit from '@/views/Submit'
import All from '@/views/All'
import Pay from '@/views/Pay'
import Address from '@/views/Address'
import AddAdd from '@/views/addAdd'
import EditAdd from '@/views/editAdd'
import Shouhou from '@/views/shouhou'
import Room from '@/views/Room'
import More from '@/views/More'
import Roommore from '@/views/Roommore'
import Myset from '@/views/Myset'
import Editpassword from '@/views/Editpassword'
import Editpassword2 from '@/views/Editpassword2'
import Xiangxi from '@/views/Xiangxi'
import Set2 from '@/views/set2'
import Dixuanze from '@/views/dixuanze'
import Tuihuo from '@/views/tuihuo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  },
  {
    path: '/forget2',
    name: 'Forget2',
    component: Forget2
  },
  {
    path: '/set',
    name: 'Set',
    component: Set
  },
  {
    path: '/set3',
    name: 'Set3',
    component: Set3
  },
  {
    path: '/zhuye',
    name: 'Zhuye',
    component: Zhuye
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component: Shopcar
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  },
  {
    path: '/all',
    name: 'All',
    component: All
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '/addAdd',
    name: 'AddAdd',
    component: AddAdd
  },
  {
    path: '/editAdd',
    name: 'EditAdd',
    component: EditAdd
  },
  {
    path: '/shouhou',
    name: 'Shouhou',
    component: Shouhou
  },
  {
    path: '/room',
    name: 'Room',
    component: Room
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
  {
    path: '/roommore',
    name: 'Roommore',
    component: Roommore
  },
  {
    path: '/myset',
    name: 'Myset',
    component: Myset
  },
  {
    path: '/editpassword',
    name: 'Editpassword',
    component: Editpassword
  },
  {
    path: '/editpassword2',
    name: 'Editpassword2',
    component: Editpassword2
  },
  {
    path: '/xiangxi',
    name: 'Xiangxi',
    component: Xiangxi
  },
  {
    path: '/set2',
    name: 'Set2',
    component: Set2
  },
  {
    path: '/dixuanze',
    name: 'Dixuanze',
    component: Dixuanze
  },
  {
    path: '/tuihuo',
    name: 'Tuihuo',
    component: Tuihuo
  }
  ]
})
