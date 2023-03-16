<template>
  <div v-if="show" class="mask">
    <div class="dlg-msg-box flex flex-col">
      <div class="flex flex-space-between full-width">
        <div class="font-bold">{{caption}}</div>
        <div class="pointer" @click="close"><img class="logo-22" src="../assets/logo.png"/></div>
      </div>
      <div class="margin-top-l" style="height:45px;">{{msg}}</div>
      <div class="flex flex-end margin-top-xl">
        <div class="btn-huibai-auto pointer" style="width:80px" @click="cancelClick">取消</div>
        <div class="margin-left-m btn-blue-auto pointer" style="width:80px" @click="confirmClick">确定</div>
      </div>
    </div>
  </div>
</template>
 
<script>
 
 
export default {
    name: 'MsgBox',//组件递归必须有name属性 不然无法递归    
    props: {
        caption:{},
        show: {},
        msg:{},
    },
    data() {
        return {
        }
    },
 
    methods: {
        close() {
            this.$emit('close');
        },
        confirmClick() {
            this.$emit('confirm');
        },
        cancelClick() {           
            this.$emit('cancel');
        }
 
    }
}
</script>
 
<style>
    .dlg-msg-box {
        border-radius: 5px;
        width: 350px;
        height: 160px;
        background-color: #fff;
        padding: 30px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
</style>
 