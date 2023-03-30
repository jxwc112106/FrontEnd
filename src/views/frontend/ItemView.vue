<template>
    <a-list 
            :hoverable="true" class="list-demo-action-layout" 
            :bordered="false" :data="dataSource" 
            :pagination-props="paginationProps">
        <template #item="{ item }">
            <a-list-item class="list-demo-item" action-layout="vertical">
                <template #extra>
                    <div className="image-area">
                        <img alt="arco-design" :src="item.image" />
                    </div>
                </template>
                <a-list-item-meta >
                    <template #description>
                        <div class="item_list">
                        <div class="descriptionOne" >
                            <p class ="p-itemId">NO.{{ item.id }}</p>
                            <p class ="p-title" > {{ item.title }}</p>
                            <p class ="p-budget"> 预算：{{ item.budget }}</p>
                        </div>
                        <div class="descriptionTwo">
                            <p class="p-type">类型：{{ item.type }}</p>
                            <p class="p-type">标签：{{ item.tag }}</p>
                            <p class="p-period">周期：{{ item.period }} 天</p>
                        </div>
                        <div class="descriptionThree">
                            <p>发布时间：{{ item.time }}</p>
                        </div>
                        </div>
                    </template>
                    <template #avatar>
                        <a-avatar shape="square">
                            <img alt="avatar" :src="item.avatar"/>
                        </a-avatar>
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </template>
    </a-list>
</template>
  
<script>
import apiRequest from "../../api/networkRequest"
import { reactive } from 'vue'

const itemid = [];

const titleList = [];

const budgetList = [];

const typeList = [];

const periodList = [];

const timeList = [];

const tagList = [];

const ImgList = [];


// 本地图片加载 需要用require()包裹相对路径
const avatarSrc = [
    require('../../assets/head.jpg'),
    require('../../assets/head.jpg'),
    require('../../assets/head.jpg'),
];

export default {
    data() {
        return {
            num:10,
            dataSource:[],
            paginationProps:reactive({
                defaultPageSize: 2,
                total: 0,
            }),
        }
    },
    mounted() {
        apiRequest.queryItem(this.nums).then(
            res => {
                console.log("response: ", res)
                if(res.data.success){
                    for (var i=0; i<res.data.msg.length; i++){
                            itemid.push(res.data.msg[i]['Id']);
                            titleList.push(res.data.msg[i]['Title']);
                            budgetList.push(res.data.msg[i]['Budget']);
                            typeList.push(res.data.msg[i]['Type']);
                            periodList.push(res.data.msg[i]['Period']);
                            timeList.push(res.data.msg[i]['PubTime']);
                            tagList.push(res.data.msg[i]['Tag']);
                            ImgList.push(res.data.msg[i]['ImgPath']);
                    }
                    this.dataSource = new Array(itemid.length).fill(null).map((_, index) => {
                        return {
                                index: index,
                                avatar: avatarSrc[index % avatarSrc.length],
                                id:    itemid[index % itemid.length],
                                title: titleList[index % itemid.length],
                                budget: budgetList[index % itemid.length],
                                type:  typeList[index % itemid.length],
                                period: periodList[index % itemid.length],
                                time:   timeList[index % itemid.length],
                                image: ImgList[index % itemid.length],
                                tag:   tagList[index % itemid.length]
                                };
                    })
                    this.paginationProps = reactive({
                        defaultPageSize: 2,
                        total: itemid.length,
                    })
                    // console.log("cookie: ",this.$cookies.get('userinfo'))
                    // if(document.cookie.length > 0) {
                    //     let arr = document.cookie.split('; ');//通过; 将数据转成数组，注意：分号+空格，有空格！！
                    //     for(var i=0;i<arr.length;i++){
                    //         let index = arr[i].indexOf("=") //返回第一个“=”所在的位置
                    //         console.log(arr[i].substring(0, index))
                    //     }
                    // }
                }else{
                    console.log("ssss")
                }
            }
        )
    }
}
</script>
  
<style scoped>
.list-demo-action-layout .image-area {
    width: 163px;
    height: 119px;
    border-radius: 2px;
    overflow: hidden;
}

.list-demo-action-layout .list-demo-item {
    padding: 20px 0;
    border-bottom: 1px solid var(--color-fill-3);
}

.list-demo-action-layout .image-area img {
    width: 80%;
}

.list-demo-action-layout .arco-list-item-action .arco-icon {
    margin: 0 4px;
}
.item_list {
    line-height: 8px;
}
.descriptionOne{
    display: flex; 
}
.descriptionTwo{
    display: flex; 
}
.descriptionThree{
    display: flex; 
}
.p-itemId{
    font-size: 18px;
    color: #0c0c0c;
}
.p-title{
    font-size: 18px;
    color: #0c0c0c;
    padding-left: 20px;
}
.p-budget{
    font-size: 18px;
    color: #fa0808;
    padding-left: 20px;
}
.p-type{
    font-size: 15px;
    color: #0c0c0c;
}
.p-period{
    font-size: 15px;
    color: #0c0c0c;
    padding-left: 20px;
}

</style>
  