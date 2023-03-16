<template>
    <div class="container">
        <a-space direction="vertical" size="large">
            <a-input :style="{ width: '320px' }" placeholder="请输入用户名" allow-clear></a-input>
            <a-input :style="{ width: '320px' }" placeholder="请输入手机号" allow-clear>
                <template #prepend>
                    +86
                </template>
                <template #append>
                    <p>请输入验证码</p>
                </template>
            </a-input>
            <a-input-password :style="{ width: '320px' }" placeholder="请输入密码" allow-clear />
            <a-input-password :style="{ width: '320px' }" placeholder="请确认密码" allow-clear />
            <a-checkbox value="1">请遵守本平台服务协议</a-checkbox>
            <Button @click="register" class="bt" type='primary'>注册</Button>
        </a-space>
    </div>
</template>

<script>

export default {
    name: Register,
    data() {
        return {

        }
    },
    methods:{
        register() {
            
        }

    }

}

</script>

<style scoped>
.container {
    margin-top:100px;
    vertical-align:middle;
    text-align:center;

}
.bt {
    width: 200px;
    height: 35px;
    background-color: rgb(141, 141, 252);
}
</style>