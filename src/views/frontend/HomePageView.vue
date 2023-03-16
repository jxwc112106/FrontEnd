<template>
  <div class="app-header">
    <div class="container">
      <div class="brand">
        <img class="icon-img item" src="../../assets/head.jpg" alt="" />
        <div class="top_text item">只工作，不上班</div>
      </div>

      <div class="app-menu-desktop">
        <div class="menu_left">
          <div class="left_text active">社区</div>
          <div class="left_text">群众</div>
          <div class="left_text">发现</div>
          <div class="left_text">人才库</div>
          <div class="left_text">训练营</div>
          <div class="left_text">Web3</div>
        </div>
        <div class="menu_right">
          <div class="search_main">
            <input type="text" class="input_te" placeholder="请输入关键字" />
            <div class="search">搜索</div>
          </div>
          <div>
            <div class="lgstatus" v-show="$store.getters.getLoginStatus">
              <a-dropdown trigger="hover">
                <a-avatar :style="{ backgroundColor: '#3370ff' }">
                 JWWC
                </a-avatar>
                <template #content>
                  <a-doption>个人设置</a-doption>
                  <a-doption>我的消息</a-doption>
                  <a-doption>我的简历</a-doption>
                  <a-doption>退出登陆</a-doption>
                </template>
              </a-dropdown>
            </div>
            <div class="lgstatus" v-show="!$store.getters.getLoginStatus">
              <div @click="toLogin" @mousemove="ActiveFontColor" @mouseleave="NormalFontColor"
                :class="{ log_te: frontColor, log_te_active: backColor }">登录</div>
              <div @click="toRegister" @mousemove="ActiveFontColor" @mouseleave="NormalFontColor"
                :class="{ log_te: frontColor, log_te_active: backColor }">注册</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex"
export default {
  name: 'HomeView',
  data() {
    return {
      frontColor: true,
      backColor: false,
      // lgStatus:false
    }
  },
  computed: {
        ...mapGetters["getLoginStatus"]
  },
  methods: {
    ActiveFontColor() {
      this.frontColor = false
      this.backColor = true
    },
    NormalFontColor() {
      this.frontColor = true
      this.backColor = false
    },
    handlelogin() {

    },
    toLogin() {

      this.$router.push({ path: '/login' })
    },
    toRegister() {
      this.$router.push('/register')
    }
  },
  mounted() {
  }
}

</script>

<style scoped>
.icon-img {
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 100%;
}

.brand {
  width: 150px;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
}

.item {
  float: left
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  line-height: 70px;
  align-items: center;
}

.app-menu-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu_left {
  width: 500px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu_right {
  width: 384px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
}

.top_text {
  font-size: 11px;
  color: #89837f;
  /* border-left: 1px solid #d2cfce; */
  margin-top: 1px;
}

.search_main {
  display: flex;
  align-items: center;
}

.search {
  width: 46px;
  height: 32px;
  background: #efbd5e;
  color: #fff;
  text-align: center;
  line-height: 32px;
  font-size: 13px;
  border-radius: 0 3px 3px 0;
}

.input_te {
  outline: none;
  width: 134px;
  height: 28px;
  border: 1px solid #d9d9d9;
}

.log_te {
  font-size: 18px;
  line-height: 33px;
  color: #7b7b7b;
}

.log_te_active {
  font-size: 18px;
  line-height: 33px;
  color: #efbd5e;
}

.left_text {
  padding: 18px 16px;
  font-size: 18px;
  color: #7b7b7b;
}

.active {
  background: #efbd5e;
  color: #fff;
  border-radius: 5px;
}

.lgstatus {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>