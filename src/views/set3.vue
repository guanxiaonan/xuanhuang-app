<template>
  <main id="set2" class="view" role="main">
    <div class="set2">
      <md-field>
        <md-field-item style="background-color:#6799AF;" name="item0" title="修改密码" solid>
          <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        </md-field-item>
      </md-field>
      <md-field class="input">
        <md-input-item v-model="form.newPassword" type="password" ref="password" placeholder="请输入新密码" clearable>
        </md-input-item>
      </md-field>
      <md-field class="input1">
        <md-input-item v-model="insurepass" type="password" ref="insurepass" placeholder="请确认密码" clearable>
        </md-input-item>
      </md-field>
      <div>
        <p style="font-size:12px;color:white;margin-top:5px;margin-left:15px">密码要求在6-16位之间，字母、数字组合</p>
      </div>
      <md-field style="margin-top:40px">
        <md-button @click="next">确认</md-button>
      </md-field>
    </div>
  </main>
</template>

<script>
import '@/my-project-svg-folder/arrowl.svg'
import axios from 'axios'
export default {
  data () {
    return {
      type: 'password',
      eye: 'eye_close',
      insurepass: '',
      form: {
        comYXKey: 'comYXValue',
        phoneNumber: '',
        newPassword: '',
        authorization: ''
      }
    }
  },
  mounted () {
    const params = this.$route.params.phoneNumber
    this.form.phoneNumber = params
    console.log(this.form.phoneNumber)
  },
  methods: {
    back () {
      this.$router.back()
    },
    validatepass (pass) {
      const rule = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      return rule.test(pass)
    },
    next () {
      const sign = this.validatepass(this.form.newPassword)
      if (!sign) {
        this.$message({
          type: 'warning',
          message: '格式不正确'
        })
      } else if (this.insurepass !== this.form.newPassword) {
        this.$message({
          type: 'warning',
          message: '两次输入密码不一致'
        })
      } else {
        axios.post('http://101.132.44.253:8762/updatePassword', this.form, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          this.$message({
            type: 'success',
            message: '密码已重置，为你跳转首页登录'
          })
          this.$router.push({
            path: '/'
          })
        })
      }
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

  .input {
    margin-top: 80px
  }

  .input1 {
    margin-top: 37px
  }

  .button {
    color: red;
    float: left;
    margin-left: 30px;
    font-size: 14px;
  }

  .view>>>.md-field-item-title {
    color: #ffffff;
    font-size: 0.32rem;
  }

  .view>>>.md-input-item-right {
    width: 1.6rem;
  }

  .view>>>.md-input-item {
    padding-right: 0;
  }

  .view>>>.md-button {
    font-size: 12px;
  }
</style>
