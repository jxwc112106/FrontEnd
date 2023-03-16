<template>
    <div class="container">
        <div class="login-wrapper">
            <div class="header">自由者平台</div>
            <div class="ishow" v-show="eshow">
                <a-col :span="22">
                    <a-alert type="error" closable>
                        <template #title>
                            {{ this.$store.getters.getErrMsg }}
                        </template>
                    </a-alert>
                </a-col>
            </div>
            <div :class="{'isbackground':isbackground}">
                <div class="form-wrapper">
                <input type="text" v-model="username" id="username" placeholder="username" class="input-item">
                <input type="password" v-model="password" id="password" placeholder="password" class="input-item">
                <input type="text" v-model="verificationCode" id="verificationCode" placeholder="verification code"
                    class="input-item">
                <img @click="GetImage" :src="$store.getters.getVcodePath" />
                <div class="btn" type="button" @click="Login">Login</div>
            </div>
            </div>
            <div class="msg">
                Don't have account?
                <a href="#">Sign up</a>
            </div>
        </div>
    </div>
</template>
  
<script>
import apiRequest from "../../api/networkRequest"
import apiPath from "../../api/networkPath"
export default {
    name: 'HomePage',
    data() {
        return {
            Imagepath: "",
            username: "",
            password: "",
            verificationCode: "",
            verificationCodeId: "",
            isbackground:true,
            eshow:false,

        }
    },
    computed: {
        // ...mapGetters["getVcodePath", "getUserName", "getPassWord", "getVerificationCode", "getVerificationCodeId", "getLoginStatus","getErrMsg"],
    },
    methods: {
        // ...mapMutations["setVcodePath", "setUserName", "setPassWord", "setVerificationCode", "setVerificationCodeId", "setLoginStatus","setErrMsg"],
        GetImage() {
            apiRequest.getVerificationCode().then(res => {
                this.$store.commit("setVcodePath", apiPath.baseUrl + res.data.msg);
                console.log(res.data.msg.split("/")[2].split('.')[0])
                this.$store.commit("setVerificationCodeId", res.data.msg.split("/")[2].split('.')[0]);
            })
        },
        Login() {
            apiRequest.login(this.username, this.password, this.verificationCode, this.$store.getters.getVerificationCodeId).then(res =>{
            console.log(res.data)
            if (res.data.success) {
                this.$store.commit("setLoginStatus",true);
                this.$router.go(-1)
                // return true
            }else {
            //    return false
                console.log("shibai",res.data.msg)
                this.$store.commit("setErrMsg",res.data.msg)
                this.username = ""
                this.password = ""
                this.verificationCode = ""
                this.GetImage()
                this.ErrorShow()
            }
        })
            // if (this.$store.getters.getLoginStatus){
            //     this.username = ""
            //     this.password = ""
            //     this.verificationCode = ""
            //     this.GetImage()
            //     this.ErrorShow()
            // }
        },
        ErrorShow(){
            this.eshow = true
            this.isbackground = true
            setTimeout(() => {
                this.eshow = false
                this.isbackground = false
            }, 3000);
        }
    },
    created() {
       
    },
    mounted() {

        apiRequest.getVerificationCode().then(res => {
            // console.log(apiPath.baseUrl + res.data.msg)
            // console.log(res.data.msg.split("/")[2])
            this.$store.commit("setVcodePath", apiPath.baseUrl + res.data.msg);
            // this.$store.setVcodePath(apiPath.baseUrl + res.data.msg)
            setTimeout(() => {
            }, 3000);
            // console.log(this.$store.get('vCodepath'))
            // console.log(this.getVcodePath)
            this.$store.commit("setVerificationCodeId", res.data.msg.split("/")[2].split('.')[0]);
            // console.log(this.$store.getters.getVerificationCodeId)
        })
    }
}
</script>
  
<style>
* {
    margin: 0;
    padding: 0;
}

/* html {
   height: 100%;
  }
  body {
   height: 100%;
  } */
.container {
    height: 100%;
    background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
    background-color: #fff;
    width: 358px;
    height: 588px;
    border-radius: 15px;
    padding: 0 50px;
    position: relative;
    left: 33.3%;
    top: 50%;
    /* transform: translate(-50%, -50%); */
}

.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
}

.input-item {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 0;
    padding: 10px;
    border-bottom: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;
}

.input-item:placeholder {
    text-transform: uppercase;
}

.btn {
    text-align: center;
    padding: 10px;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
    color: #fff;
}

.msg {
    text-align: center;
    line-height: 88px;
}

.isbackground{
    z-index:-1;
}

.ishow{
    z-index: 1;
    width:412px;
    position: absolute;
}   

a {
    text-decoration-line: none;
    color: #abc1ee;
}
</style>