<template>
  <section class="login">
    <Card class="login_con" style="width: 300px;">
      <p slot="title">用户注册</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="username" class="login_item">
          <Input type="text" v-model="formInline.username">
          <Icon type="ios-person-outline" slot="prepend" size="16"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="login_item">
          <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend" size="16"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="phone" class="login_item">
          <Input v-model="formInline.phone" placeholder="Password" :number="true">
            <!-- <Icon type="ios-phone-portrait" slot="prepend"  size="16"/> -->
            <Button type="primary" slot="append">发送验证码</Button>
          </Input>
        </FormItem>
        <FormItem prop="vCode" class="login_item">
          <Input v-model="formInline.vCode" placeholder="Password" number>
            <!-- <Icon type="ios-phone-portrait" slot="prepend"  size="16"/> -->
            <span slot="prepend">请输入验证码</span>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('formInline')">注册</Button>
          <nuxt-link style="text-align: center;display: block;" to="/login">已有账号？点击登陆</nuxt-link>
        </FormItem>
      </Form>
    </Card>
  </section>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'
import request from '~/service'

export default {
  components: {
    AppLogo
  },
  layout: 'nohead',
  data() {
    return {
      formInline: {
        username: 'smalldata',
        password: '123456',
        phone: '15185175127',
        vCode: '1234'
      },
      ruleInline: {
        username: [
          { required: true, message: '用户名不能为空！', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空！', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      var self = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log('radio', this.formInline.radio);

          this.login().then((res) => {
            if (res.code === 200) {
              self.$Message.success('注册成功，正在跳转');
              self.$router.push({ path: '/login' });
              console.log('注册成功直接跳转主页，不用重新登陆')
            }else{
              self.$Message.error(res.message);

            }
          })

        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    login() {
      const params = {
        username: this.formInline.username,
        password: this.formInline.password,
        phone: this.formInline.phone,
        vCode: this.formInline.vCode
      };
      const response = async(params) => {
        return await request.post('/api/signup/signupManager', params)
      }
      return new Promise((resolve) => {
        resolve(response(params));
      });
    }
  }
}

</script>
<style scoped lang="less">
.login {
  position: relative;
  height: 100vh;
  background: url('~assets/images/login-bg.jpg') no-repeat;
  background-size: cover;
  .login_con {
    position: absolute;
    top: 50%;
    margin-top: -150px;
    right: 160px;
  }
}

</style>
