<template>
  <main id="register" class="view" role="main">
    <div class="register">
      <md-field>
        <md-field-item style="background-color:#6799AF;" name="item0" title="修改密码" solid>
          <md-icon name="arrowl" slot="left" @click.native="back" class="md-icon"></md-icon>
        </md-field-item>
      </md-field>
      <md-field class="input">
        <md-input-item type="phone" ref="name" placeholder="请输入新密码" clearable>
        </md-input-item>
      </md-field>
      <md-field class="input1">
        <md-input-item type="phone" ref="name" placeholder="请确认密码" clearable>
        </md-input-item>
      </md-field>
      <div>
        <p style="font-size:12px;color:white;margin-top:5px;margin-left:15px">密码要求在6-12位之间，字母、数字组合</p>
      </div>
      <md-field style="margin-top:40px">
        <md-button @click="next">确认</md-button>
      </md-field>
    </div>
  </main>
</template>

<script>
import '@/my-project-svg-folder/arrowl.svg'
export default {
  data () {
    return {
      type: 'password',
      eye: 'eye_close'
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    next () {
      this.$router.push({
        path: '/set'
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
