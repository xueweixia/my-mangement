<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum" :loading="loading">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
        <el-breadcrumb-item>个人信息</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-form ref="form"  label-width="80px">
        <el-form-item label="账号">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item  label="邮箱">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSaveProfile">修改并保存</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import API from '../../api/api_user';
  import {bus} from '../../bus.js'

  export default {
    data() {
      return {
        loading: false,
        form: {
          useranme: '',
          nickname: '',
          name: '',
          email: ''
        },
        rules: {
          nickname: [
            {required: true, message: '请输入昵称', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
          ]
        },
      }
    },
    methods: {
      handleSaveProfile() {
         this.$message({message: "此功能暂未实现！", duration: 2000});
      }
    }
  }
</script>
