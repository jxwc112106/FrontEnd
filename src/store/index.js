import { createStore } from 'vuex'

export default createStore({
  state: {
    vCodepath: "",
    username: "",
    password: "",
    verificationCode: "",
    verificationCodeId: "",
    loginStatus: true,
    errMsg: ""
  },
  getters: {
    getVcodePath(state) {
      return state.vCodepath
    },
    getUserName(state) {
      return state.username
    },
    getPassWord(state) {
      return state.password
    },
    getVerificationCode(state) {
      return state.verificationCode
    },
    getVerificationCodeId(state) {
      return state.verificationCodeId
    }, 
    getLoginStatus(state){
      return state.loginStatus
    },
    getErrMsg(state){
      return state.errMsg
    }
  },
  mutations: {
    setVcodePath(state,vCodepath) {
      state.vCodepath = vCodepath
    },
    setUserName(state,username) {
      state.username = username
    },
    setPassWord(state, password) {
      state.password = password
    },
    setVerificationCode(state, verificationCode) {
      state.verificationCode = verificationCode
    },
    setVerificationCodeId(state,verificationCodeId) {
      state.verificationCodeId = verificationCodeId
    },
    setLoginStatus(state, loginStatus){
      state.loginStatus = loginStatus
    },
    setLoginStatus(state, loginStatus){
      state.loginStatus = loginStatus
    },
    setErrMsg(state, errMsg){
      state.errMsg = errMsg
    }

  },
  actions: {
    // asyncGetVerification({ commit }){
    //   api.getVerificationCode()
    //   .then(res =>{
    //     commit("update v-code",res.msg)
    //   })
    //  }
  },
  modules: {
  }
})
