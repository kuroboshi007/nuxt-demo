<template>
  <div class="task_form">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
      <!-- <p>发布标注任务</p> -->
      <FormItem label="任务名" prop="name">
        <Input v-model="formValidate.name"></Input>
      </FormItem>
      <FormItem label="简介" prop="intro">
        <Input v-model="formValidate.intro"></Input>
      </FormItem>
      <FormItem label="一级分类" prop="categroy">
        <Select v-model="formValidate.categroy">
          <Option value="1">选项1</Option>
          <Option value="2">选项2</Option>
          <Option value="3">选项3</Option>
        </Select>
      </FormItem>
      <FormItem label="二级分类" prop="type">
        <RadioGroup v-model="formValidate.type">
          <Radio label="male">普通任务</Radio>
          <Radio label="female">指定任务</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="价格" prop="price">
        <InputNumber v-model="formValidate.price" :formatter="value => `￥ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')" :parser="value => value.replace(/$s?|(,*)/g, '')">
        </InputNumber>
      </FormItem>
      <FormItem label="总次数" prop="total">
        <InputNumber 
          v-model="formValidate.total"
          :formatter="value => `${value}次`"
          :parser="value => value.replace('次', '')">
        </InputNumber>
      </FormItem>
      <FormItem label="收集期限" prop="duration">
        <DatePicker type="date" placeholder="请选择收集期限" v-model="formValidate.duration"></DatePicker>
      </FormItem>
      <FormItem label="交付期限" prop="deadTime">
        <DatePicker type="date" placeholder="请选择交付期限" v-model="formValidate.deadTime"></DatePicker>
      </FormItem>
      <FormItem label="详细介绍" prop="detail">
        <Input v-model="formValidate.detail" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入详细介绍"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: '',
        intro: '',
        categroy: '',
        type: '',
        date: '',
        time: '',
        desc: '',
        total: null,
        price: null,
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        intro: [
          { required: true, message: 'intro cannot be empty', trigger: 'blur' },
        ],
        price: [
          { required: true, message: 'price cannot be empty', trigger: 'blur' },
        ],
        total: [
          { required: true, message: 'total cannot be empty', trigger: 'blur' },
        ],
        categroy: [
          { required: true, message: 'Please select the categroy', trigger: 'change' }
        ],
        type: [
          { required: true, message: 'Please select type', trigger: 'change' }
        ],
        duration: [
          { required: true, type: 'date', message: 'Please select the duration', trigger: 'change' }
        ],
        deadTime: [
          { required: true, type: 'date', message: 'Please select the deadTime', trigger: 'change' }
        ],
        detail: [
          { required: true, message: 'Please enter a detail', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
}

</script>
<style lang="less">
.task_form {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px;
}

</style>
