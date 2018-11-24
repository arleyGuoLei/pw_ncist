<template>

  <el-container id="app">
    <el-aside class="pc-aside" :width="menuWidth">
      <el-menu :router="true" default-active="ks" class="el-menu" :collapse="isCollapse">
        <div class="collapse" @click="showMenu">
          <i class="el-icon-d-arrow-left" v-if="!isCollapse"></i>
          <i class="el-icon-d-arrow-right" v-else></i>
        </div>
        <el-submenu index="password">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">密码学</span>
          </template>
          <el-menu-item-group title="古典密码实验">
            <el-menu-item index="ks">凯撒加密</el-menu-item>
            <el-menu-item index="wjne">维吉耐尔</el-menu-item>
            <el-menu-item index="vernam">vernam</el-menu-item>
            <el-menu-item index="rf">栅栏置换</el-menu-item>
            <el-menu-item index="dlzh">单轮分栏</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="hash算法实验">
            <el-menu-item index="md5">MD5</el-menu-item>
            <el-menu-item index="sha">SHA</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="分组密码实验">
            <el-menu-item index="des">DES</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="非对称密码实验">
            <el-menu-item index="rsa">RSA</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="对称密码实验">
            <el-menu-item index="aes">AES</el-menu-item>
          </el-menu-item-group>


        </el-submenu>

        <el-menu-item index="2" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">OTHER</span>
        </el-menu-item>

      </el-menu>
    </el-aside>

    <el-container>
      <el-header id="header"><h2>加密算法演示系统</h2></el-header>
      <el-aside :class="['phone-aside',{'phone-aside-height':isCollapse}]" :width="menuWidth">
        <el-menu :router="true" default-active="ks" class="el-menu" :collapse="isCollapse">
          <div class="collapse" @click="showMenu">
            <i class="el-icon-d-arrow-left" v-if="!isCollapse"></i>
            <i class="el-icon-d-arrow-right" v-else></i>
          </div>
          <el-submenu index="password">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">密码学</span>
            </template>
            <el-menu-item-group title="古典密码实验">
              <el-menu-item index="ks">凯撒加密</el-menu-item>
              <el-menu-item index="wjne">维吉耐尔</el-menu-item>
              <el-menu-item index="vernam">vernam</el-menu-item>
              <el-menu-item index="rf">栅栏置换</el-menu-item>
              <el-menu-item index="dlzh">单轮分栏</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="hash算法实验">
              <el-menu-item index="md5">MD5</el-menu-item>
              <el-menu-item index="sha">SHA</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="分组密码实验">
              <el-menu-item index="des">DES</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="非对称密码实验">
              <el-menu-item index="rsa">RSA</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="对称密码实验">
              <el-menu-item index="aes">AES</el-menu-item>
            </el-menu-item-group>


          </el-submenu>

          <el-menu-item index="2" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">OTHER</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer id="footer"><p>copyRight&copy;Ncist.</p></el-footer>
      </el-container>
    </el-container>
  </el-container>

</template>

<style>

  @media screen and (min-width:426px){
    .phone-aside{
      display: none;
    }
  }

  @media screen and (max-width:425px){
    .phone-aside {
      position: absolute;
      z-index: 9;
    }

    .phone-aside-height {
      height: 52px;
      width: 48px!important;
      overflow: hidden!important;
    }
    .pc-aside {
      display: none;
    }
  }


  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  #header > h2 {
    text-align: center;
  }

  #footer {
    text-align: center;
    color: #888;
  }

  .el-menu {
    height: 100%;
  }

  .collapse {
    text-align: center;
    color: #909399;
    padding: 12px;

  }

  .collapse > .el-icon-d-arrow-right, .el-icon-d-arrow-left {
    margin-top: 8px;
    font-size: 18px;
    color: #2c3e50;
    cursor: pointer;
  }

  .collapse:hover {
    background-color: #ECF5FF;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      showMenu() {
        this.isCollapse = !this.isCollapse;
      }
    },
    computed: {
      menuWidth() {
        if (this.isCollapse === false) {
          return "200px";
        } else {
          return "65px";
        }
      }

    }
  }
</script>
