<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane label="算法原理">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="img-wrap">
          <img src="../../assets/img/dlzh.jpg" ondragstart="return false" alt="实验原理">
        </div>

      </el-tab-pane>
      <el-tab-pane label="算法演示">
        <h3 class="title" v-text="$route.meta.name"></h3>
        <div class="calc-demo">
          <el-form label-position="right" label-width="80px" :model="form">
            <el-form-item label="文本">
              <el-input v-model="form.text" placeholder="请输入加密文本"></el-input>
            </el-form-item>
            <el-form-item label="长度">
              <el-input v-model="form.column" type="number" min="1" :max="this.form.text.length"
                        placeholder="请输入列数"></el-input>
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
  // import Vigenere from './Vigenere'

  export default {
    name: "index",
    data() {
      return {
        form: {
          text: 'begantoattackattwo',
          password: '',
          type: true,
          column: 6
        }
      }
    },
    methods: {
      dePW() {
        //  加密
        const column = parseInt(this.form.column);
        const text = this.form.text;
        let arr = new Array(column);
        let pw = [];
        for (let k = 0; k < arr.length; k++) {
          arr[k] = new Array(0);
        }

        for (let i = 0; i < text.length; i++) {
          let j = i % column;
          arr[j].push(text[i])
        }

        for (let n = column - 1; n >= 0; n--) {
          pw = pw.concat(arr[n])
        }
        this.form.password = pw.join('');
      },


      enByWy() {
        var a = new Array();
        var passwdContent = this.form.text.replace(/\s/g, '');
        var column = this.form.column;
        var notLackRow = passwdContent.length % column;
        var content = '';
        var row = Math.ceil(passwdContent.length / column);
        var passwdContentCount = 0;
        var lackRow = column - notLackRow;
        for (var i = 0; i < column; i++) {
          a[i] = new Array();
          if (lackRow != column && lackRow != 0) {
            for (var j = 0; j < row - 1; j++) {
              a[i][j] = passwdContent.charAt(passwdContentCount);
              passwdContentCount++;
            }
            lackRow--;
          } else {
            for (var j = 0; j < row; j++) {
              a[i][j] = passwdContent.charAt(passwdContentCount);
              passwdContentCount++;
            }
          }
        }
        for (var i = 0; i < row; i++) {
          for (var j = column - 1; j >= 0; j--) {
            if (a[j][i] !== undefined) {
              content = content + a[j][i];
            }
          }
        }
        this.form.password = content

      },
      enPW() {
        //  解密
        const column = parseInt(this.form.column); //列数

        const text = this.form.text.replace(/\s/g, '');  //加密之后的文本
        let pw = text.split('').reverse(); // 加密之后的文本 切割成数组

        const d = Math.ceil(pw.length / column);

        let arr = new Array(d);
        for (let k = 0; k < arr.length; k++) {
          arr[k] = new Array(0);
        }

        for (let i = 0; i < pw.length; i++) {
          // let a = d;
          // if(){
          //  有时候会是取余 d - 1  abcdefg 3列 加密之后的解密
          // }
          let j = (d - 1) - (i % d);  // 不一定是%d
          let id = j * column + (arr[j].length + 1);
          console.log(id)

          if (pw[i] === 'b') {
            // debugger
          }

          if (id > pw.length || arr[j].length >= column) {
            j--;
          }
          arr[j].push(pw[i])
        }
        // debugger
        let data = [];
        for (let n = 0; n < arr.length; n++) {
          data = data.concat(arr[n])
        }
        console.log(data)
        this.form.password = data.join('');
        // debugger

      },
      getPw() {
        if (this.form.text.trim() !== "") {
          if (this.form.column > this.form.text.length) {
            this.$notify({
              title: '警告',
              message: '列数不能大于字符长度哦!',
              type: 'warning'
            });
            return;
          }

          //不为空 可以计算
          if (this.form.type === true) {
            this.dePW();
          } else {
            // this.enPW();
            this.enByWy();
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
