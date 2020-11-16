<template>
  <div class="box">
    <!-- 外层容器 -->
    <el-container class="home-container">
      <!-- 头部顶部容器 -->
      <el-header>
        <div>
          <img src="@/assets/logo.png" alt="" />
          <span>电商后台管理系统</span>
        </div>
        <div>
          <el-button type="info" @click="logout">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '64px' : '200px' " >
          <!-- toggle:切换 ，collapse：倒塌/折叠 -->
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <el-menu
            background-color="#323744"
            text-color="#fff"
            active-text-color="#3480FD"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            :router="true"
            :default-active="activePath"
          >
            <!-- 一级菜单 -->
            <el-submenu :index="item.id +''" v-for="item in menulist" :key="item.id">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i :class="iconsObj[item.id]"></i>
                <!-- 文本 -->
                <span>{{item.authName}}</span>
              </template>
              <!-- 二级菜单 -->
                <el-menu-item :index="'/'+subItem.path + ''" 
                v-for="subItem in item.children" 
                :key="subItem.id"
                @click="savaNavState('/'+subItem.path + '')"
                >
                  <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-menu"></i>
                    <!-- 文本 -->
                    <span>{{subItem.authName}}</span>
                  </template>
                </el-menu-item>
            </el-submenu>
            
          </el-menu>
        </el-aside>
        <!-- 主区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menulist: [],
      iconsObj:{
        '125':'el-icon-user-solid',
        '103':'el-icon-set-up',
        '101':'el-icon-s-goods',
        '102':'el-icon-shopping-cart-1',
        '145':'el-icon-s-data',
      },
      //是否折叠，默认不折叠
      isCollapse:false,
      //被激活的链接地址
      activePath: ''
    }
  },
  created() {//创建生命周期
  this.getMenuList()
  this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
      this.$message.success("退出成功");
    },
    //获取所以的菜单
    async getMenuList() {
      const { data : res } = await this.$http.get('menus')
      if(res.meta.status !==200) 
        return this.$message.error(res.meta.msg)
      this.menulist = res.data
      //console.log(res)
    },
    //点击按钮，切换菜单的折叠
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    savaNavState(activePath) {
      window.sessionStorage.setItem('activePath',activePath)
      this.activePath = activePath
    }
  },
};
</script>

<style lang="less" scoped>
.box,
.home-container {
  height: 100%;
}
//头部区域
.el-header {
  background-color: #373c41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  > div {
    padding-left: 20px;
    display: flex;
    align-items: center;
    > img {
      height: 50px;
    }
    > span {
      font-size: 20px;
      color: white;
      padding-left: 20px;
    }
  }
}
// 侧边栏区域
.el-aside {
  background-color: #323744;
  .el-menu{border-right: none;}
  .iconfont{
    margin-right: 10px;
  }
  .toggle-button{
    background-color: #4A5064;
    font-size: 10px;
    color: white;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 0.2em;
  }
}
// 主区域
.el-main {
  background-color: #eaedf2;
}
</style>