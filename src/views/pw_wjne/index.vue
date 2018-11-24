<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/wjne.jpg" ondragstart="return false" alt="实验原理">
        </div>

      </el-tab-pane>

      <el-tab-pane label="算法演示">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="calc-demo">
          <el-form label-position="right" label-width="80px" :model="form">
            <el-form-item label="文本">
              <el-input v-model="form.text" placeholder="请输入加密文本"></el-input>
            </el-form-item>
            <el-form-item label="秘钥">
              <el-input v-model="form.key"  placeholder="请输入秘钥"></el-input>
            </el-form-item>
            <el-form-item label="结果">
              <el-input v-model="form.password" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="方式">
              <el-switch
                v-model="form.type"
                active-text="加密"
                inactive-text="解密">
              </el-switch>
            </el-form-item>

            <el-button class="bt-jm" @click="getPw" type="primary">执行</el-button>
          </el-form>

        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import Vigenere from './Vigenere'

  export default {
    name: "index",
    data() {
      return {
        form: {
          text: 'HOWaReYOU',
          password: '',
          key: 'YOUR',
          type: true
        }
      }
    },
    methods: {
      getPw() {

        if (this.form.text.trim() !== "") {
          //不为空 可以计算
          if (this.form.type === true) {
            this.form.password = Vigenere.Encrypt(this.form.text, this.form.key.toString());
          } else {
            this.form.password = Vigenere.DisEncrypt(this.form.text, this.form.key.toString());
          }


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
