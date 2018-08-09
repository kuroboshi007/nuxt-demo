<template>
  <section class="login">
    <Card class="login_con" style="width: 300px;">
      <p slot="title">欢迎登陆</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user" class="login_item">
          <Input type="text" v-model="formInline.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="login_item">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <RadioGroup v-model="formInline.type">
            <Radio label="Manager">管理员登录</Radio>
            <Radio label="Organization">代理商登录</Radio>
            <Radio label="Consumer">甲方</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('formInline')">登陆</Button>
          <nuxt-link style="text-align: center;display: block;" to="/register">没有账号？点击注册</nuxt-link>
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
        type: 'Manager'
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
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log('radio', this.formInline.radio);

          this.login().then((res) => {
            if (res.code === 200) {
              this.$Message.success('Success!');
              if(this.formInline.radio ==='manager'){
                this.$router.push({ path: '/mhome' });
              }
              else if(this.formInline.radio ==='organization_user'){
                this.$router.push({ path: '/ohome' });
              }else{
                this.$router.push({ path: '/chome' })
              }
            }
            console.log('success!')
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
        type: this.formInline.type
      };
      const response = async(params) => {
        return await request.post('/api/login/checklogin', params)
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
