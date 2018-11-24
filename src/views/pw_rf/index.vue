<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/rf.jpg" ondragstart="return false" alt="实验原理">
        </div>

      </el-tab-pane>
      <el-tab-pane label="算法演示">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="calc-demo">
          <el-form label-position="right" label-width="80px" :model="form">
            <el-form-item label="文本">
              <el-input v-model="form.text" placeholder="请输入加密文本"></el-input>
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
          text: 'ATTACKATFIVE',
          password: '',
          type: true
        }
      }
    },
    methods: {
      getPw() {

        if (this.form.text.trim() !== "") {
          //不为空 可以计算
          let text = this.form.text.replace(/\s/g, '');

          let one = [];
          let two = [];
          if (this.form.type === true) {
            //  加密

            for (let i = 0; i < text.length; i++) {
              if (i % 2 === 0) {
                one.push(text[i]);
              } else {
                two.push(text[i]);
              }
            }
            this.form.password = one.concat(two).join('');

          } else {

            let arr = [];

            for (let j = 0; j < text.length; j++) {
              if (j < text.length / 2) {
                one.push(text[j]);
              } else {
                two.push(text[j]);
              }
            }

            for (let k = 0; k < text.length; k++) {
              if (k % 2 === 0) {
                arr.push(one[k / 2]);
              } else {
                arr.push(two[(k - 1) / 2]);
              }
            }
            this.form.password = arr.join('');
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
