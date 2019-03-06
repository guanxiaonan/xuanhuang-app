<template>
  <main id="register" class="view" role="main">
    <md-field>
      <md-field-item style="background-color:#6799AF" name="item0" title="焊接生产线方案" solid>
        <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        <div slot="right">
          <button style="float:right;color:white;font-size:0.32rem">恢复</button>
        </div>
      </md-field-item>
    </md-field>
    <div style="height: calc(100% - 99px);overflow: auto;">
      <div style="width:100%;">
        <md-field>
          <md-field-item>
            <div class="flex-content">
              <div class="item" v-for="(item,index) in zujianList" :key="index">
                <md-icon @click.native="dakai(item.compnentId,item.compnentName)" style="width:40px;height:40px;" name="shangliao"
                  slot="left" class="md-icon"></md-icon>
                <p>{{item.compnentName}}</p>
              </div>
              <div class="pro-line">
                <div>生</div>
                <div>产</div>
                <div>线</div>
              </div>
            </div>

          </md-field-item>
          <md-field-item>
            <div style="width:100%">
              <span>价格:{{form.price}}</span>
              <span>运费:{{form.postFare}}</span>
              <span style="float:right">提供者: {{form.shopName}}</span>
            </div>
          </md-field-item>
        </md-field>
        <md-field style="margin-top:20px">
          <md-field-item>
            <div>
              <h4>方案详情</h4>
              <p>{{form.detail}}</p>
            </div>

          </md-field-item>
        </md-field>
      </div>
    </div>

    <md-field class="bottom">
      <md-field-item class="bottom1">
        <md-icon slot="left" style="width:30px;height:30px;margin-left:0.2rem;" name="shopcar" class="md-icon"></md-icon>
        <md-button @click.native="submit()">加入购物车</md-button>
        <md-button style="background-color:red" @click.native="submit">立即购买</md-button>

      </md-field-item>
    </md-field>
    <md-dialog :title="this.compnentName" :closable="true" v-model="basicDialog.open" :btns="basicDialog.btns">
      <div>
        <md-field>
          <div v-for="(item,index) of list" :key="index" style="width:100%">
            <el-select style="float:left" v-model="item.name" @click.native="change(item.id)" placeholder="请选择">
              <el-option v-for="iitem in options" :key="iitem.id" :label="iitem.name" :value="iitem.id">
              </el-option>
            </el-select>
            <md-icon @click.native="xiangxi(item.id)" style="float:right" name="arrowr" class="md-icon"></md-icon>
          </div>
        </md-field>
      </div>
    </md-dialog>
  </main>
</template>

<script>
import axios from 'axios'
import '@/my-project-svg-folder/arrowl.svg'
import '@/my-project-svg-folder/arrowr.svg'

import '@/my-project-svg-folder/chuansongdai.svg'
import '@/my-project-svg-folder/shangliao.svg'
import '@/my-project-svg-folder/xialiao.svg'
import '@/my-project-svg-folder/hanjie.svg'
import '@/my-project-svg-folder/jiqiren.svg'
import {
  Toast
} from 'mand-mobile'

export default {
  data () {
    return {
      componentId: '',
      compnentName: '',
      basicDialog: {
        open: false,
        btns: [{
          text: '确认操作',
          handler: this.onBasicConfirm
        }]
      },
      options: [],
      list: [],
      agreeConf: {
        checked: true,
        name: 'agree0',
        size: 'lg',
        disabled: false,
        introduction: '选中状态'
      },
      form: {
        price: '',
        postFare: '',
        detail: '',
        shopName: '',
        compnentName: ''
      },
      res: {
        sampRoomId: ''
      },
      res1: {
        componentId: ''
      },
      res2: {
        productId: ''
      },
      res3: {
        authorization: '',
        sampleroomId: ''
      },
      zujianList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      const params = this.$route.params.sampRoomId
      this.res.sampRoomId = params
      axios.post('http://101.132.44.253:8770/queryComponentList', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.zujianList = response.data.data.componentList
        console.log(222, response)
      })
      this.res.sampRoomId = params
      axios.post('http://101.132.44.253:8770/queryComponent', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.form = response.data.data.component
        console.log(111)
      })
    },
    onBasicConfirm () {
      Toast({
        content: '你点击了确认'
      })
      this.basicDialog.open = false
    },
    onChange (name, checked) {
      console.log(`agree name = ${name} is ${checked ? 'checked' : 'unchecked'}`)
    },
    shopcar () {
      this.$router.push({
        path: '/shopcar'
      })
    },
    back () {
      this.$router.back()
    },
    submit () {
      this.res3.authorization = localStorage.getItem('authorization')
      this.res3.sampleroomId = localStorage.getItem('sampRoomId')
      // const params = this.$route.params.sampRoomId
      // this.res3.sampleroomId = params
      axios.post('http://101.132.44.253:8770/addCartsBySampleId', this.res3, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.$message({
          type: 'success',
          message: response.data.message
        })
      })
    },
    idset () {
      this.$router.push({
        path: '/zhuye'
      })
    },
    element () {
      this.$router.push({
        path: '/element'
      })
    },
    xiangxi (id) {
      console.log('aaaaa')
      this.$router.push({
        name: 'Xiangxi',
        params: {
          productId: id,
          componentId: this.componentId
        }
      })
      console.log(this.componentId)
    },
    dakai (id, name) {
      console.log(id)
      this.basicDialog.open = true
      this.res1.componentId = id
      this.compnentName = name
      axios.post('http://101.132.44.253:8770/queryProductList', this.res1, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.list = response.data.data.productlist
        this.componentId = response.data.data.componentId
        console.log('componentId', this.componentId)
        localStorage.setItem('componentId', id)
      })
      this.getList()
    },
    change (id) {
      this.res2.productId = id
      axios.post('http://101.132.44.253:8770/queryReplaceProductList', this.res2, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.options = response.data.data.replaceproductList
        console.log('options', this.options)
      })
    }
  }
}

</script>
<style scoped>
  .view {
    height: 100%;
    background: url('~@/assets/images/Rectangle.png') no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  .view>>>.bottom1 {
    padding: 0;
    width: 100%
  }

  .bottom1>>>.md-field-item-inner {
    padding: 0;
    width: 100%
  }

  .bottom1>>>.md-field-item-content {
    justify-content: flex-end;
  }

  .bottom {
    display: flex;
    left: 0;
    bottom: 0px;
    width: 100%;
    position: fixed;
  }

  .view>>>.md-agree .md-agree-icon {
    line-height: 1;
    display: flex;
    align-items: center;
  }

  /* .md-icon .md-icon-circle-right .lg {
    vertical-align: top;
    margin: .2rem;
  } */

  .bottom.md-icon {
    flex: 1;
    text-align: center;
  }

  .view>>>.md-field-content {
    width: 100%;
  }

  .md-item {
    flex: 1;
    text-align: center
  }

  .md-item>p {
    font-size: 12px
  }

  .view>>>.md-button {
    font-size: 10px;
  }

  .md-button.primary.large,
  .md-button.primary.small {
    width: 1.6rem;
    float: right;
  }

  .view>>>.md-field-item-title {
    color: #ffffff;
    font-size: 0.32rem;
  }

  .md-field-item>>>.md-field-item-label.solid {
    width: 300px;
  }

  .flex-content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
  }

  .flex-content>.item {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-right: 10px;
    margin-left: 40px
  }

  .pro-line {
    position: absolute;
    top: 50%;
    margin-top: -1.7rem;
    width: 1rem;
    height: 3.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: #eee;
  }

  /* .md-popup.center>>>.md-popup-box {
    width: 100%
  }

  .md-example-child-drop-menu-3 .md-drop-menu-custom-title {
    font-size: 28px
  }

  .md-example-child-drop-menu-3 .md-drop-menu-custom-brief {
    font-size: 20px;
    color: #999
  } */

  /* .md-example-popup {
    position: relative;
    font-size: font-minor-large;
    background: color-bg-base;
    box-sizing: border-box;
    text-align: center;
  } */

  /* .md-example-popup-center {
    padding: 50px;
    border-radius: radius-normal;
  } */

  .md-dialog>>>.md-dialog-content {
    width: 100%
  }

  .md-dialog>>>.md-popup-box {
    width: 100%
  }

  .md-dialog>>>.md-drop-menu {
    position: absolute;
  }

</style>
