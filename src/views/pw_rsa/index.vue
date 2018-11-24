<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/rsa.jpg" ondragstart="return false" alt="实验原理">
        </div>

      </el-tab-pane>

      <el-tab-pane label="算法演示">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="calc-demo">
          <el-form label-position="right" label-width="80px" :model="form">
            <el-form-item label="文本">
              <el-input v-model="form.text" placeholder="请输入加密文本"></el-input>
            </el-form-item>
            <el-form-item label="秘钥(公钥)">
              <el-input v-model="form.key" type="textarea" :rows="4" placeholder="请输入公钥"></el-input>
            </el-form-item>
            <el-form-item label="秘钥(私钥)">
              <el-input v-model="form.key2" type="textarea" :rows="8" placeholder="请输入私钥"></el-input>
            </el-form-item>
            <el-form-item label="结果">
              <el-input v-model="form.password" type="textarea" :rows="5" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="方式">
              <el-switch
                v-model="form.type"
                active-text="加密"
                inactive-text="解密">
              </el-switch>
            </el-form-item>

            <el-button class="bt-jm" @click="getPw" type="primary">执行</el-button>
            <a target="_blank" class="url-rsa" href="http://web.chacuo.net/netrsakeypair">秘钥在线生成</a>
          </el-form>

        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  import JSEncrypt from 'jsencrypt/bin/jsencrypt'

  export default {
    name: "index",
    data() {
      return {
        form: {
          text: '华北科技学院',
          password: '',
          key: `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDmHYDxFFiKsF6MjYajPdzG5lvu
rVTXH0Y12A+4RKHapvg6ljy9XtYUMWVpYd13RDL8xyYwMpZQYY2DJ52uXfMsd9Ob
hiB53noqVRpiE4CoV8CcB5wRegrwc87ojeWVdiSeudfE7P4TkL8ulUbh6HGEOKhi
IPjZbUtFe2+UeOc5/QIDAQAB`,
          type: true,
          key2:`MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAOYdgPEUWIqwXoyN
hqM93MbmW+6tVNcfRjXYD7hEodqm+DqWPL1e1hQxZWlh3XdEMvzHJjAyllBhjYMn
na5d8yx305uGIHneeipVGmITgKhXwJwHnBF6CvBzzuiN5ZV2JJ6518Ts/hOQvy6V
RuHocYQ4qGIg+NltS0V7b5R45zn9AgMBAAECgYEA3bPNN/e3Op+j6FyuO/ZtEAB+
0ByVIdGSzmuE8a7GFahKff+jM3v8W2Yf44ETY0YErb+dTlBeu8DRG2x+obEIh5pq
s+cqgq4UPCXuSisop1k35GVTZ4jnkzlpcxLaCHzGqtyWNpICWE5XnKyxURoWgWdc
Z1GaE/ju/8f1aYDRti0CQQD5b6hKRT/lFvvL27HH9z3AKmRTU/jbE2qVG1cQ6i3B
C0v0U1QC34bFFDFtN1Wp1bK4BrW420Is1hK41l/1uwXPAkEA7CuwklTTwokaEZjk
FJBLbzhTsvgDjY6Ig3IoCzLMmz9Qj5TEf9+oFUSikkpi6YUrHBUvZIvMu8sWlg9V
MKgCcwJAD6aB2KcfqzAV/GR8cx+AMF54jQHny1cciN5+SAFpfYNH8LyJuORtgFAU
CdY++bj+za0eGcsoC8gixJYuzyw84QJBAMTjN3UG2vNXMTBycdLi6MB0CPMu6Gde
6FgNF20ekIzsn9DTiW3Bm3L/oTisYwGjT2k+ECCWm7wDd3Tqm27Q4hkCQESP+Q45
bnKHh8C0oDUvYxShLUJG4UdNsqE2QYa/t967DMxPT8hi19a8ror+mKBMppP1UR7m
hGjV6mLNaloW3J8=`
        }
      }
    },
    methods: {
      getPw() {

        if (this.form.text.trim() !== "") {
          //不为空 可以计算
          if (this.form.type === true) {
            let encryptor = new JSEncrypt() // 新建JSEncrypt对象
            encryptor.setPublicKey(this.form.key) // 设置公钥

            this.form.password = encryptor.encrypt(this.form.text) // 对需要加密的数据进行加密

          } else {
            let decrypt = new JSEncrypt(); // 新建JSEncrypt对象
            let secretWord = this.form.text;
            let privateKey = this.form.key2;
            decrypt.setPrivateKey(privateKey)
            this.form.password = decrypt.decrypt(secretWord) // 解密
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
  .url-rsa{
    display: block;
    margin-top: 10px;
    color: #409EFF;
    text-decoration: none;
    text-align: center;
  }
</style>
