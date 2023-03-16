import axios from "../utils/network"
import netUrl from "./networkPath"
import querystring from "querystring"
import { register } from "register-service-worker"





const api = {
    getVerificationCode() {
        return axios.get("http://103.233.253.29:8080/backend/getvarifacationcode")
    },
    login(username, password, verificationCode, verificationCodeId) {
        console.log(username,password,verificationCode, verificationCodeId)
        return axios.post(netUrl.baseUrl+netUrl.backend+netUrl.login, querystring.stringify({
            username:username,
            password:password,
            verificationCode:verificationCode,
            verificationCodeId:verificationCodeId
        }))

    }

}

export default api


