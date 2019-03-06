<template>
  <main id="register" class="view" role="main">
    <div class="register">
      <md-field>
        <md-field-item style="background-color:#6799AF;" name="item0" title="编辑地址" solid>
          <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        </md-field-item>
        <md-input-item title="收货人" v-model="form.receiverMan" placeholder="请输入收货人姓名">
        </md-input-item>
        <md-input-item ref="id" title="联系方式" v-model="form.receiveMobile" placeholder="请输入联系方式">
        </md-input-item>
        <md-input-item title="所在地区" v-model="form.receiveArea" placeholder="请输入所在地区">
        </md-input-item>
        <md-input-item ref="id" v-model="form.receiveDetailAddress" title="详细地址" placeholder="请输入详细地址">
        </md-input-item>
      </md-field>
      <md-field class="bottom">
        <md-button style="width:100%;font-size:16px" @click="save()">保存</md-button>
      </md-field>
    </div>
    <!-- <md-picker ref="picker1" v-model="isPickerShow1" :data="pickerData1" :cols="3" is-cascade title="选择省市区/县" @confirm="onPickerConfirm(1)"></md-picker> -->
  </main>
</template>

<script>
import axios from 'axios'
import '@/my-project-svg-folder/add.svg'
import '@/my-project-svg-folder/reduce.svg'
import '@/my-project-svg-folder/yangbanjian.svg'
import '@/my-project-svg-folder/user.svg'
import '@/my-project-svg-folder/order.svg'
import '@/my-project-svg-folder/pay.svg'
import '@/my-project-svg-folder/tuihuan.svg'
import '@/my-project-svg-folder/shopcar.svg'
import '@/my-project-svg-folder/address.svg'
import '@/my-project-svg-folder/idset.svg'
import '@/my-project-svg-folder/delete.svg'
import '@/my-project-svg-folder/edit.svg'
import '@/my-project-svg-folder/arrowl.svg'
// import district from '@/assets/js/district'
export default {
  data () {
    return {
      form: {
        receiveDetailAddress: '',
        receiveArea: '',
        receiverMan: '',
        receiveMobile: '',
        authorization: '',
        receiveAddressId: ''
      },
      res: {
        authorization: '',
        receiveAddressId: ''
      },
      isPickerShow1: false,
      // pickerData1: district,
      pickerValue1: ''
    }
  },
  mounted () {
    const params = this.$route.params.id
    this.res.receiveAddressId = params

    console.log(this.res.receiveAddressId)
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.res.authorization = localStorage.getItem('authorization')
      axios.post('http://101.132.44.253:8762/findreceiveAddress', this.res, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.form = response.data.data.receiveAddress
        console.log(response)
      })
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
      this.$router.push({
        path: '/submit'
      })
    },
    aaa () {
      this.$router.push({
        path: '/zhuye'
      })
    },
    addAdd () {
      this.$router.push({
        path: '/addAdd'
      })
    },
    onPickerConfirm (index) {
      const values = this.$refs[`picker${index}`].getColumnValues()
      let res = ''
      values.forEach(value => {
        value && (res += `${value.text || value.label} `)
      })
      this[`pickerValue${index}`] = res
    },
    save () {
      this.form.authorization = localStorage.getItem('authorization')
      this.form.receiveAddressId = this.$route.params.id
      axios.post('http://101.132.44.253:8762/UpdateAddress', this.form, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        console.log(response)
        this.$message({
          type: 'success',
          message: '保存成功'
        })
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
    padding: 0
  }

  .bottom1>>>.md-field-item-inner {
    padding: 0;
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

  /* .md-icon.lg {
    width: 0.55rem;
    height: 0.55rem;
  } */

  .md-item {
    flex: 1;
    text-align: center
  }

  .span {
    float: right;
    width: 40px;
    text-align: center;
  }

  .md-item>p {
    font-size: 12px
  }

  .color {
    background-color: #E6E5E4;
  }

  .view>>>.md-input-item-right {
    width: 1.6rem;
  }

  .view>>>.md-input-item {
    padding-right: 0;

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

  .black>>>.md-field-item-title {
    color: #000;
    font-size: 0.28rem;
  }

  .md-button.primary.edit {
    background-color: #fff;
    color: #000;
  }

  /* .jiesuan{
  position: fixed;
  bottom:100px;
  width: 100%;
} */

</style>
