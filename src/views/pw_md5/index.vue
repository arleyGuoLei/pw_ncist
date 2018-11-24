<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/md5.jpg" ondragstart="return false" alt="实验原理">
        </div>

      </el-tab-pane>
      <el-tab-pane label="算法演示">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="calc-demo">
          <el-form label-position="right" label-width="80px" :model="form">
            <el-form-item label="文本">
              <el-input v-model="form.text" placeholder="请输入加密文本"></el-input>
            </el-form-item>
            <el-form-item label="加密">
              <el-input v-model="form.password" :disabled="true"></el-input>
            </el-form-item>
            <el-button class="bt-jm" @click="getMd5" type="primary">加密</el-button>
          </el-form>


        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import md5 from 'js-md5';


  export default {
    name: "index",
    data() {
      return {
        form: {
          text: 'admin',
          password: ''
        }
      }
    },
    methods: {
      getMd5() {
        if (this.form.text.trim() !== "") {
          this.form.password = md5(this.form.text);
        } else {
          this.form.password = "";
        }

      }
    }
  }
</script>

<style scoped>
  .bt-jm {
    margin: 0 auto;
    display: block;
  }
</style>
