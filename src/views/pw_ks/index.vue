<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/ks.jpg" ondragstart="return false" alt="实验原理">
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
              <el-input v-model="form.key" type="number" max="25" min="1" placeholder="请输入秘钥(数字)"></el-input>
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
  export default {
    name: "index",
    data() {
      return {
        form: {
          text: 'ATTACK AT FIVE',
          password: '',
          key: 3,
          type: true
        }
      }
    },
    methods: {
      getPw() {

        if (this.form.text.trim() !== "") {
          //不为空 可以计算
          const key = this.form.key;
          const text = this.form.text;

          let ctext = "";

          if (this.form.type === true) {
            //  加密
            for (let i = 0; i < text.length; i++) {
              let pcode = text.charCodeAt(i);
              let ccode = pcode;
              if (pcode >= 65 && pcode <= 90) {
                ccode = ((pcode - 65) + key * 1) % 26 + 65;
              }
              if (pcode >= 97 && pcode <= 122) {
                ccode = ((pcode - 97) + key * 1) % 26 + 97;
              }
              ctext += String.fromCharCode(ccode);
            }
          } else {
            //  解密

            for (let i = 0; i < text.length; i++) {
              const ccode = text.charCodeAt(i);
              let pcode = ccode;
              if (ccode >= 65 && ccode <= 90) {
                pcode = ((ccode - 65) - key * 1 + 26) % 26 + 65;
              }
              if (ccode >= 97 && ccode <= 122) {
                pcode = ((ccode - 97) - key * 1 + 26) % 26 + 97;
              }
              ctext += String.fromCharCode(pcode);
            }
          }

          this.form.password = ctext;
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
