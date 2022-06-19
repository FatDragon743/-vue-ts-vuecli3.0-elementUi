<!--
 * @Date: 2022-06-19 16:26:18
 * @LastEditTime: 2022-06-19 19:31:46
 * @LastEditors: zjm
 * @FilePath: \-vue-ts-vuecli3.0-elementUi\src\views\index\index.vue
-->
<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24">
          <h1>
            图片风格迁移化
          </h1>
        </el-col>
      </el-row>
    </el-header>
    <el-main
      :style="{'background':'url('+imgUrl+') no-repeat center center', 'background-size':'100% 100%'}">
      <el-row :gutter="20">
        <el-button type="primary" @click="getUrl(0)">吉普力</el-button>
        <el-button type="primary" @click="getUrl(1)">今敏</el-button>
        <el-button type="primary" @click="getUrl(2)">新海诚</el-button>
      </el-row>
    </el-main>
    <el-footer>
      <el-row :gutter="20">

        <el-col :span="12">
          <el-upload class="upload-demo" action="#"
            :on-preview="handlePreview" :on-remove="handleRemove" :on-change="handlChange"
            multiple :limit="1" :on-exceed="handleExceed" :file-list="fileList"
            :before-upload="beforeUpoad"  :show-file-list="false">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" @click="start()">开始</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import Index from "@/views/index/index.component";
export default Index;
</script>

<style rel="stylesheet/scss" lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 20px;
  height: 100% !important;
  // padding: 50px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-main {
  background-color: #f9fafc;
  color: #333;
  text-align: center;
  height: 780px !important;
}
.el-button {
  vertical-align: middle;
  text-align: center;
  margin: 10px 20%;
}
</style>
