<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" width="240">
    <!-- <Menu active-name="1"> -->
    <Menu theme="dark" active-name="1">
      <MenuGroup title="内容管理">
        <MenuItem name="1">
        <Icon type="md-document" /> 文章管理
        </MenuItem>
        <MenuItem name="2">
        <Icon type="md-chatbubbles" /> 评论管理
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="统计分析">
        <MenuItem name="3">
        <Icon type="md-heart" /> 用户留存
        </MenuItem>
        <MenuItem name="4">
        <Icon type="md-leaf" /> 流失用户
        </MenuItem>
      </MenuGroup>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-cog" /> 管理
        </template>
        <MenuItem name="4-1">Option 1</MenuItem>
        <MenuItem name="4-2">Option 2</MenuItem>
        <MenuItem name="4-3">Option 3</MenuItem>
        <MenuItem name="4-4">Option 4</MenuItem>
      </Submenu>
    </Menu>
  </Sider>
</template>
<script>
export default {
  name: 'layoutsider',
}

</script>
