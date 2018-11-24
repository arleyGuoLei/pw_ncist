<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/aes.jpg" ondragstart="return false" alt="实验原理">
        </div>

      </el-tab-pane>
      <el-tab-pane label="算法演示 128bits">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="calc-demo">
          <el-form label-position="right" label-width="80px" :model="form128">
            <el-form-item label="文本">
              <el-input v-model="form128.text" placeholder="请输入加密文本"></el-input>
            </el-form-item>
            <el-form-item label="秘钥">
              <el-input v-model="form128.key" placeholder="请输入加密秘钥"></el-input>
            </el-form-item>
            <el-form-item label="加密">
              <el-input type="textarea" :rows="2" v-model="form128.password" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="操作">
              <el-switch
                v-model="form128.control"
                active-text="加密"
                inactive-text="解密">
              </el-switch>
            </el-form-item>
            <el-button class="bt-jm" @click="getPw" type="primary">加密</el-button>
          </el-form>


        </div>
      </el-tab-pane>

      <el-tab-pane label="算法演示 - 数字版">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="calc-demo">
          <el-form label-position="right" label-width="80px" :model="form">
            <el-form-item label="文本">
              <el-input v-model="form.text" placeholder="请输入加密文本"></el-input>
            </el-form-item>
            <el-form-item label="秘钥">
              <el-input v-model="form.key" placeholder="请输入加密秘钥"></el-input>
            </el-form-item>
            <el-form-item label="加密">
              <el-input type="textarea" :rows="2" v-model="form.password" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="方式">
              <div>
                <el-radio v-model="form.type" style="margin-left: 10px;" label="128bits" size="medium" border>128bits
                </el-radio>
                <el-radio v-model="form.type" label="192bits" size="medium" border>192bits</el-radio>
                <el-radio v-model="form.type" label="256bits" size="medium" border>256bits</el-radio>
              </div>
            </el-form-item>
            <el-form-item label="操作">
              <el-switch
                v-model="form.control"
                active-text="加密"
                inactive-text="解密">
              </el-switch>
            </el-form-item>
            <el-button class="bt-jm" @click="getAes" type="primary">加密</el-button>
          </el-form>


        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import aesjs from 'aes-js';
  import CryptoJS from 'crypto-js'

  export default {
    name: "index",
    data() {
      return {
        form: {
          text: '华北科技学院',
          password: '',
          type: '128bits',
          control: true,
          key: '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31'
        },
        form128: {
          text: '华北科技学院',
          password: '',
          control: true,
          key: '387ba5e4ac1d816dd73154746a52d10fb529a805'
        }
      }
    },
    methods: {
      getAes() {
        if (this.form.text.trim() !== "" && this.form.key.trim() !== "") {
          let key = [];
          let pw = this.form.key.split(',');
          if (this.form.type === '128bits') {
            if (pw.length < 16) {
              this.$notify({
                title: '警告',
                message: '128bits加密,秘钥为16位!',
                type: 'warning'
              });
              return;
            } else {

              for (let i = 0; i < 16; i++) {
                key.push(parseInt(pw[i]))
              }
            }
          } else if (this.form.type === '192bits') {
            if (pw.length < 24) {
              this.$notify({
                title: '警告',
                message: '192bits加密,秘钥为24位!',
                type: 'warning'
              });
              return;
            } else {
              for (let i = 0; i < 24; i++) {
                key.push(parseInt(pw[i]))
              }
              // key = pw.split(',').slice(0, 24);
            }
          } else {
            if (pw.length < 32) {
              this.$notify({
                title: '警告',
                message: '256bits加密,秘钥为32位!',
                type: 'warning'
              });
              return;
            } else {
              for (let i = 0; i < 32; i++) {
                key.push(parseInt(pw[i]))
              }
              // key = pw.split(',').slice(0, 32);
            }
          }
          // console.log(key)
          // key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
          // console.log(key)
          if (this.form.control === true) {
            //  加密


            let text = this.form.text;
            const textBytes = aesjs.utils.utf8.toBytes(text);

            let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
            let encryptedBytes = aesCtr.encrypt(textBytes);
            this.form.password = aesjs.utils.hex.fromBytes(encryptedBytes);

          } else {
            //  解密
            let encryptedHex = this.form.text;
            let encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
            let aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
            let decryptedBytes = aesCtr.decrypt(encryptedBytes);
            this.form.password = aesjs.utils.utf8.fromBytes(decryptedBytes);

          }


        } else {
          this.form.password = "";
          this.$notify({
            title: '警告',
            message: '请填写秘钥和加密文本!',
            type: 'warning'
          });
        }

      },

      getPw() {


        if (this.form128.text.trim() !== "" && this.form128.key.trim() !== "") {
          if (this.form128.control === true) {
            //  加密
            let ciphertext = CryptoJS.AES.encrypt(this.form128.text.trim(), this.form128.key.trim());
            this.form128.password = ciphertext.toString();
          } else {
            //  解密

            var bytes = CryptoJS.AES.decrypt(this.form128.text.trim(), this.form128.key.trim());
            var plaintext = bytes.toString(CryptoJS.enc.Utf8);
            this.form128.password = plaintext;

          }


        } else {
          this.form.password = "";
          this.$notify({
            title: '警告',
            message: '请填写秘钥和加密文本!',
            type: 'warning'
          });
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
