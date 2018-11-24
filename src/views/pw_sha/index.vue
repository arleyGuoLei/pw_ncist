<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/sha.jpg" ondragstart="return false" alt="实验原理">
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
              <el-input type="textarea" :rows="2" v-model="form.password" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="方式">
              <div>
                <el-radio v-model="form.type" style="margin-left: 10px;"  label="SHA-1" size="medium" border>SHA-1</el-radio>
                <el-radio v-model="form.type" label="SHA-224" size="medium" border>SHA-224</el-radio>
                <el-radio v-model="form.type" label="SHA3-224" size="medium" border>SHA3-224</el-radio>
                <el-radio v-model="form.type" label="SHA-256" size="medium" border>SHA-256</el-radio>
                <el-radio v-model="form.type" label="SHA3-256" size="medium" border>SHA3-256</el-radio>
                <el-radio v-model="form.type" label="SHA-384" size="medium" border>SHA-384</el-radio>
                <el-radio v-model="form.type" label="SHA3-384" size="medium" border>SHA3-384</el-radio>
                <el-radio v-model="form.type" label="SHA-512" size="medium" border>SHA-512</el-radio>
                <el-radio v-model="form.type" label="SHA3-512" size="medium" border>SHA3-512</el-radio>
              </div>
            </el-form-item>
            <el-button class="bt-jm" @click="getSha" type="primary">加密</el-button>
          </el-form>


        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import jsSHA from 'jssha';


  export default {
    name: "index",
    data() {
      return {
        form: {
          text: 'ncist',
          password: '',
          type: 'SHA-1'
        }
      }
    },
    methods: {
      getSha() {
        if (this.form.text.trim() !== "") {

          const shaObj = new jsSHA(this.form.type, "TEXT");
          shaObj.update(this.form.text);
          this.form.password = shaObj.getHash("HEX");

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
