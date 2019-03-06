<template>
  <main id="forget" class="view" role="main">
    <div class="forget">
      <md-field>
        <md-field-item style="background-color:#6799AF;" name="item0" title="找回密码" solid>
          <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        </md-field-item>
      </md-field>
      <md-field class="input">
        <md-input-item type="phone" v-model="form.phoneNumber" ref="name" placeholder="请输入手机号" clearable>
        </md-input-item>
      </md-field>
      <div>
        <p style="font-size:12px;color:rgb(103, 153, 175);margin-top:5px;margin-left:15px">请确保您的手机通畅，以接收验证码短信</p>
      </div>
      <md-field class="input1">
        <md-input-item type="text" ref="name" v-model="form.smsCode" placeholder="请输入验证码" clearable>
          <md-button slot="right" @click="send">发送验证码</md-button>
        </md-input-item>
      </md-field>
      <md-field style="margin-top:40px">
        <md-button @click="nextstep(form.phoneNumber)">下一步</md-button>
      </md-field>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import '@/my-project-svg-folder/arrowl.svg'
export default {
  data () {
    return {
      type: 'password',
      eye: 'eye_close',
      form: {
        comYXKey: 'comYXValue',
        phoneNumber: '',
        type: 2,
        smsCode: ''
      }
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    nextstep (phoneNumber) {
      axios
        .post('http://101.132.44.253:8762/verifySmsCode', this.form, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(response)
          if (response.data.code === '200') {
            this.$router.push({
              name: 'Set3',
              params: {
                phoneNumber: phoneNumber
              }
            })
          } else {
            this.$message('验证码错误')
            return false
          }
        })
    },
    send () {
      axios
        .post('http://101.132.44.253:8762/getVerifyingCode', this.form, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>
<style scoped>
  .view {
    height: 100%;
    background: url("~@/assets/images/Rectangle.png") no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  .input {
    margin-top: 80px;
  }

  .input1 {
    margin-top: 10px;
  }

  /* .md-button.primary {
    background-color: #6799AF;
  } */

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
