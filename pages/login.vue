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
            <Radio label="agent">代理商登录</Radio>
            <Radio label="agent">甲方</Radio>
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
  data() {
    return {
      formInline: {
        user: '',
        password: '',
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
          this.$router.push({ path: '/' });
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
    // margin: 40px 0;
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
