<template>
  <Header :style="{padding: '0',background:'#fff'}">
    <Menu
      mode="horizontal"
      active-name="1"
    >
      <div class="layout-logo">
        <p>Logo</p>
      </div>
      <div class="user_wrap">
        <Avatar size="large">USER</Avatar>
        <Icon type="md-arrow-dropdown" size="16" />
      </div>
    </Menu>
  </Header>
</template>
<script>

export default {
  name: 'layoutheader',
  data () {
    return {
      loginModalVisible: false,
      registerModalVisible: false,
    }
  },
  methods: {
    jumpPage(url){
      this.$router.push({
        path: url
      })
    },
  }
}
</script>
<style lang="less" scoped>
.layout-logo{
    width: 200px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 70px;
    p {
      color: white;
      line-height: 30px;
      text-align: center;
    }
}
.user_wrap{
    width: 60px;
    margin: 0 auto;
    margin-right: 20px;
    text-align: center;
}
</style>