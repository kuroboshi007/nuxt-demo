<template>
  <div>
    <Layout>
      <layoutsider></layoutsider>
      <Layout :style="{marginLeft: '240px'}">
        <!-- <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header> -->
        <layoutheader></layoutheader>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>一级目录</BreadcrumbItem>
            <BreadcrumbItem>二级目录</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="min-height: 600px">
              <nuxt/>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import layoutheader from '~/components/layoutheader';
import layoutsider from '~/components/layoutsider';

export default {
  data() {
    return {}
  },
  components: {
    layoutheader,
    layoutsider
  }
}

</script>
<style>


</style>
