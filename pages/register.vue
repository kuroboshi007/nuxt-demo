<template>
  <section class="login">
    <Card class="login_con" style="width: 300px;">
      <p slot="title">用户注册</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="username" class="login_item">
          <Input type="text" v-model="formInline.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend" size="16"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="login_item">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend" size="16"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="phone" class="login_item">
          <Input v-model="formInline.phone" placeholder="Password" number>
          <Icon type="ios-phone-portrait" slot="prepend"  size="16"/>
          </Input>
        </FormItem>
        <FormItem prop="vCode" class="login_item">
          <Input v-model="formInline.vCode" placeholder="Password" number>
          <Icon type="ios-phone-portrait" slot="prepend"  size="16"/>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('formInline')">登陆</Button>
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
        user: 'smalldata',
        password: '123456',
        phone: '15185175127',
        vCode: '1234'
      },
      ruleInline: {
        user: [
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
          this.$Message.success('Success!');
          console.log('radio', this.formInline.radio);

          this.login().then((res) => {
            // if (res.s === 1) {
            //   this.articleList = res.d.entrylist;
            // }
            console.log('success!')
          })
          // if(this.formInline.radio ==='manager'){
          //   this.$router.push({ path: '/mhome' });
          // }
          // else if(this.formInline.radio ==='organization_user'){
          //   this.$router.push({ path: '/ohome' });
          // }else{
          //   this.$router.push({ path: '/chome' })
          // }
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    login() {
      const params = {
        user: this.formInline.user,
        password: this.formInline.password,
        phone: this.formInline.phone,
        vCode: this.formInline.vCode
      };
      const response = async(params) => {
        return await request.post('/signup/signupManager', params)
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
