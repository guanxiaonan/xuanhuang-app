<template>
  <main id="home" class="view" role="main">
    <div class="md-example-child md-example-child-input-item-1">
      <div style="height: 200px"></div>
      <md-field>
        <md-input-item type="phone" v-model="form.phoneNumber" ref="name" title="用户名" placeholder="常用手机号" clearable>
          <md-icon name="username" slot="left" @click.native="handleClickEye" class="md-icon"></md-icon>
        </md-input-item>
        <md-input-item :type="type" v-model="form.password" ref="id" title="密码" placeholder="登录密码">
          <md-icon name="password" slot="left" @click.native="handleClickEye" class="md-icon"></md-icon>
        </md-input-item>
      </md-field>
      <md-field style="margin-top:50px;">
        <md-button size="small" @click="handleLogin">登录</md-button>
      </md-field>
      <div>
        <button class="button" size="small" @click="register">注册</button>
        <button class="button1" size="small" @click="forget">忘记密码？</button>
      </div>

    </div>
  </main>
</template>

<script>
// import axios from 'axios'
import '@/my-project-svg-folder/username.svg'
import '@/my-project-svg-folder/password.svg'
import axios from 'axios'
export default {
  data () {
    return {
      type: 'password',
      eye: 'eye_close',
      form: {
        phoneNumber: '',
        password: ''
      }
    }
  },
  methods: {
    handleClickEye () {
      this.type = this.type === 'password' ? 'text' : 'password'
      this.eye = this.eye === 'eye_open' ? 'eye_close' : 'eye_open'
    },
    // handleLogin () {
    //   this.$router.push({
    //     path: '/zhuye'
    //   })
    // },
    handleLogin () {
      axios.post('http://101.132.44.253:8762/login', this.form, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.data.code === '200') {
          this.$router.push({
            path: '/zhuye'
          })
          console.log(response.data.data.authorization)
          localStorage.setItem('authorization', response.data.data.authorization)
        } else {
          this.$message({
            type: 'warning',
            message: '登录失败，请检查账号密码是否正确'
          })
        }
      })
    },
    register () {
      this.$router.push({
        path: '/register'
      })
    },
    forget () {
      this.$router.push({
        path: '/forget2'
      })
    }
  }
}

</script>

<style scoped>
  .view {
    height: 100%;
    background: url("~@/assets/images/backgroud.png") no-repeat;
    background-size: 100% 100%;
    background-position: center;
  }

  .md-example-child .md-input-item-right {
    width: 1.6rem;
  }

  .button {
    color: #000;
    float: left;
    margin-left: 30px;
    font-size: 14px;
  }

  .button1 {
    color: #000;
    float: right;
    margin-right: 30px;
    font-size: 14px;
  }

</style>
