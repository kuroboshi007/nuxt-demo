<template>
  <section class="container">
    <div style="min-width: 400px;">
      <app-logo/>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user" class="login_item">
          <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="login_item">
          <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <RadioGroup v-model="formInline.radio">
            <Radio label="manager">管理员登录</Radio>
            <Radio label="organization_user">代理商登录</Radio>
            <Radio label="consumer">甲方</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="handleSubmit('formInline')">登陆</Button>
        </FormItem>
      </Form>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
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
        radio: 'manager'
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
          console.log('radio',this.formInline.radio);
          if(this.formInline.radio ==='manager'){
            this.$router.push({ path: '/mhome' });
          }
          else if(this.formInline.radio ==='organization_user'){
            this.$router.push({ path: '/ohome' });
          }else{
            this.$router.push({ path: '/chome' })
          }
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  }
}

</script>
<style scoped lang="less">
  .login_item{
    margin-top: 45px;
  }
  .ivu-radio-group{
    width: 100%;
    .ivu-radio-wrapper{
      // width: 30%;
      margin: 0 15px;
      font-size: 15px;
    }
  }
</style>
