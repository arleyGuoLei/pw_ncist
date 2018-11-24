<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/Vernam.jpg" ondragstart="return false" alt="实验原理">
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
              <el-input v-model="form.key" placeholder="请输入秘钥"></el-input>
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
          key: 'KSHUBGWMLVZX',
          type: true
        }
      }
    },
    methods: {
      getPw() {

        if (this.form.text.trim() !== "") {
          //不为空 可以计算

          const key = this.form.key.replace(/\s/g, '',);
          const text = this.form.text.replace(/\s/g, '');
          let ctext = "";
          if (this.form.type === true) {
            for (let i = 0; i < text.length; i++) {

              let tmp;

              let pcode = text.charCodeAt(i);
              let ccode;

              if (pcode < 65 || pcode > 123) {
                this.$notify({
                  title: '原文格式错误',
                  message: '仅支持字母集加解密! ',
                  type: 'warning'
                });
                return;
              }
              if (i < key.trim().length) {
                ccode = key.charCodeAt(i);
                if (ccode < 65 || ccode > 123) {
                  this.$notify({
                    title: '秘钥格式错误',
                    message: '仅支持字母集加解密!',
                    type: 'warning'
                  });
                  return;
                }
              } else {
                ccode = 0;
              }


              if (pcode >= 65 && pcode <= 90) {
                //大写 转为数字  49 = 65
                ccode = ccode === 0 ? 64 : ccode;

                tmp = (pcode - 64) + (ccode - 64);
                if (tmp > 26) {
                  tmp = tmp % 26;
                }
                ctext += String.fromCharCode(tmp + 64);
              }
              if (pcode >= 97 && pcode <= 122) {
                ccode = ccode === 0 ? 96 : ccode;

                tmp = (pcode - 96) + (ccode - 96);
                if (tmp > 26) {
                  tmp = tmp % 26;
                }
                ctext += String.fromCharCode(tmp + 96);
              }

            }

          } else {
            for (let i = 0; i < text.length; i++) {

              let tmp;

              let pcode = text.charCodeAt(i);
              let ccode;

              if (pcode < 65 || pcode > 123) {
                this.$notify({
                  title: '原文格式错误',
                  message: '仅支持字母集加解密! ',
                  type: 'warning'
                });
                return;
              }
              if (i < key.trim().length) {
                ccode = key.charCodeAt(i);
                if (ccode < 65 || ccode > 123) {
                  this.$notify({
                    title: '秘钥格式错误',
                    message: '仅支持字母集加解密!',
                    type: 'warning'
                  });
                  return;
                }
              } else {
                ccode = 0;
              }


              if (pcode >= 65 && pcode <= 90) {
                //大写 转为数字  49 = 65
                ccode = ccode === 0 ? 64 : ccode;

                tmp = (pcode - 64) - (ccode - 64);
                if (tmp > 26) {
                  tmp = tmp % 26;
                }

                if (tmp < 0) {
                  tmp += 26;
                }
                ctext += String.fromCharCode(tmp + 64);
              }
              if (pcode >= 97 && pcode <= 122) {
                ccode = ccode === 0 ? 96 : ccode;

                tmp = (pcode - 96) - (ccode - 96);
                if (tmp > 26) {
                  tmp = tmp % 26;
                }
                if (tmp < 0) {
                  tmp += 26;
                }
                ctext += String.fromCharCode(tmp + 96);
              }

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
