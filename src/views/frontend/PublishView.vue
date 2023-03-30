<template>
        <div class="tag_out">
            <h3 class="tag_title">项目类型:</h3>
            <div class="tag_type" >
                <div class="tag_attr" v-for="(tag,index) in projectType" :key="index">
                    <Text class="tag_padding" :id="tag" @click="handleType(tag)"> {{ tag }} </Text>
                </div>
            </div>
            <h3  class="tag_title">项目标签:</h3>
            <div class="tag_title">
                <div class="ishow" v-show="eshow">
                    <a-col :span="22">
                        <a-alert type="error" closable>
                        <template #title>
                            {{ this.errorTips }}
                        </template>
                        </a-alert>
                    </a-col>
                </div>
            </div>
            <div>
                <div v-show="ITshow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in IT" :key="index">
                            <Text :id="tag+'IT'" class="tag_padding" @click="handleTag('IT','IT',tag)"> {{ tag }} </Text>
                    </div>
                </div>
                <div v-show="UIshow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in UI" :key="index">
                        <Text :id="tag+'UI'" class="tag_padding" @click="handleTag('UI','UI',tag)"> {{ tag }} </Text>
                    </div>
                </div>
                <div v-show="Videoclipshow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in Videoclip" :key="index">
                        <Text :id="tag+'Videoclip'" class="tag_padding" @click="handleTag('视频剪辑','Videoclip',tag)"> {{ tag }} </Text>
                    </div>
                </div>
                <div v-show="Copywritingshow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in Copywriting" :key="index">
                        <Text :id="tag+'Copywriting'" class="tag_padding" @click="handleTag('文案创作','Copywriting',tag)"> {{ tag }} </Text>
                    </div>
                </div>
                <div v-show="GamePlayershow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in GamePlayer" :key="index">
                        <Text :id="tag+'GamePlayer'" class="tag_padding" @click="handleTag('游戏陪玩','GamePlayer',tag)"> {{ tag }} </Text>
                    </div>
                </div>
                <div v-show="CourseGuidanceshow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in CourseGuidance" :key="index">
                        <Text :id="tag+'CourseGuidance'" class="tag_padding" @click="handleTag('课程辅导','CourseGuidance',tag)"> {{ tag }} </Text>
                    </div>
                </div>
                <div v-show="Partnershow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in Partner" :key="index">
                        <Text :id="tag+'Partner'" class="tag_padding" @click="handleTag('找合伙人','Partner',tag)"> {{ tag }} </Text>
                    </div>
                </div>
                <div v-show="Partnershow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in Recruitment" :key="index">
                        <Text :id="tag+'Recruitment'" class="tag_padding" @click="handleTag('远程招聘','Recruitment',tag)"> {{ tag }} </Text>
                    </div>
                </div>
                <div v-show="Partnershow" class="tag_attrs">
                    <div class="tag_attr" v-for="(tag,index) in Other" :key="index">
                        <Text :id="tag+'Other'" class="tag_padding" @click="handleTag('其他','Other',tag)"> {{ tag }} </Text>
                    </div>
                </div>  
            </div>
            <div class="inputtitle">
                <a-textarea v-model="TextTitle" placeholder="请输入主题" allow-clear/>
            </div>
            <div class="inputPeriod">
                <a-space direction="vertical" size="large">
                    <a-input-number v-model="ProjectPeriod" :style="{width:'320px'}" placeholder="请输入开发周期" :min="0" :max="1000"/>
                </a-space>
            </div>
            <div class="inputBudget">
                <a-input-number v-model="ProjectBudget" :style="{width:'320px'}" placeholder="请输入项目预算" class="input-demo" :min="0" :max="1000"/>
            </div>
            <div class="publish">
                <a-button @click="publish" type="primary" long>发布</a-button>
            </div>
        </div>
</template>

<script>
    import apiRequest from "../../api/networkRequest"
    export default {
  setup() {
    const projectType = ['IT','UI','视频剪辑','文案创作','游戏陪玩','课程辅导','找合伙人','远程招聘','其他']
    const IT =  ['网站开发','APP开发','小程序开发','运维安装','问题解决','其他']
    const UI =  ['原图定制','PS修改','其他']
    const Videoclip = ['视频创作','视频剪辑','其他']
    const Copywriting = ['文案代写','简历优化','其他']
    const GamePlayer = ['和平精英','王者荣耀','其他']
    const CourseGuidance = ['小学课程辅导','中学课程辅导','高中课程辅导','其他']
    const Partner = []
    const Recruitment = []
    const Other = []
    const preMap = {
       'IT':IT,
       'UI':UI,
       'Videoclip':Videoclip,
       'Copywriting':Copywriting,
       'GamePlayer':GamePlayer,
       'CourseGuidance':CourseGuidance,
       'Partner':Partner,
       'Recruitment':Recruitment,
       'Other':Other
    }
    const IdMap = {
        'IT':'IT',
        'UI':'UI',
        '视频剪辑':'Videoclip',
        '文案创作':'Copywriting',
        '游戏陪玩':'GamePlayer',
        '课程辅导':'CourseGuidance',
        '找合伙人':'Partner',
        '远程招聘':'Recruitment',
        '其他':'Other'
    }



    return {
      projectType,
      IT,
      UI,
      Videoclip,
      Copywriting,
      GamePlayer,
      CourseGuidance,
      Partner,
      Recruitment,
      Other,
      preMap,
      IdMap
    }
  },
  data() {
    return {
        ITshow:true,
        UIshow:false,
        Videoclipshow:false,
        Copywritingshow:false,
        GamePlayershow:false,
        CourseGuidanceshow:false,
        Partnershow:false,
        Recruitmentshow:false,
        Othershow:false,
        ProjectTag:"",
        ProjectType:"",
        preTypeView:"",
        errorTips:"",
        successTips:"",
        eshow:false,
        ProjectPeriod:0,
        ProjectBudget:0,
        TextTitle:"",
    }
  },
  methods:{
    handleType(e) {
        this.closeTag()
        switch(e) {
            case 'IT':
                this.close()
                this.ITshow = true
                this.handleTagColor(e, this.projectType, '')
                this.preTypeView = 'IT'
                this.ProjectType = e
                break;
            case 'UI':
                this.close()
                this.UIshow = true
                this.handleTagColor(e, this.projectType,'')
                this.preTypeView = 'UI'
                this.ProjectType = e
                break;
            case '视频剪辑':
                this.close()
                this.Videoclipshow = true
                this.handleTagColor(e, this.projectType,'')
                this.preTypeView = 'Videoclip'
                this.ProjectType = e
                break;
            case '文案创作':
                this.close()
                this.Copywritingshow = true
                this.handleTagColor(e, this.projectType,'')
                this.ProjectType = e
                this.preTypeView = 'Copywriting'
                break;
            case '游戏陪玩':
                this.close()
                this.GamePlayershow = true
                this.handleTagColor(e, this.projectType,'')
                this.ProjectType = e
                this.preTypeView = 'GamePlayer'
                break;
            case '课程辅导':
                this.close()
                this.CourseGuidanceshow = true
                this.handleTagColor(e, this.projectType,'')
                this.ProjectType = e
                this.preTypeView = 'CourseGuidance'
                break;
            case '找合伙人':
                this.close()
                this. Partnershow = true
                this.handleTagColor(e, this.projectType,'')
                this.ProjectType = e
                this.preTypeView = 'Partner'
                break;
            case '远程招聘':
                this.close()
                this.Recruitmentshow = true
                this.handleTagColor(e, this.projectType,'')
                this.ProjectType = e
                this.preTypeView = 'Recruitment'
                break;
            default:
                this.close()
                this.Othershow = true
                this.handleTagColor(e, this.projectType,'')
                this.ProjectType = e
                this.preTypeView = 'Other'
                
        };
    },
    close() {
        this.ITshow=false,
        this.UIshow=false,
        this.Videoclipshow=false,
        this.Copywritingshow=false,
        this.GamePlayershow=false,
        this.CourseGuidanceshow=false,
        this.Partnershow=false,
        this.Recruitmentshow=false,
        this.Othershow=false
 
    },
    handleTagColor(tag ,array, type) {
        for (var i=0; i<array.length; i++){
            if (array[i] != tag) {
                document.getElementById(array[i]+type).style.background = "#fff"
            }else {
                document.getElementById(array[i]+type).style.background = "blue"
           }
        }

    },
    closeTag() {
        if (this.preTypeView != ''){
            var list = this.preMap[this.preTypeView]
            for( var i =0; i < list.length; i++) {
                document.getElementById(list[i]+this.preTypeView).style.background = "#fff"
            }
        }
        this.ProjectTag = ""
    },
    handleTag(e,type,tag) {
        switch (e) {
            case 'IT':
                this.handleTagColor(tag,this.IT,type)
                this.ProjectTag = e
                break;
            case 'UI':
                this.handleTagColor(tag,this.UI,type)
                this.ProjectTag = e
                break;
            case '视频剪辑':
                this.handleTagColor(tag,this.Videoclip,type)
                this.ProjectTag = e
                break;
            case '文案创作':
                this.handleTagColor(tag,this.Copywriting,type)
                this.ProjectTag = e
                break;
            case '游戏陪玩':
                this.handleTagColor(tag,this.GamePlayer,type)
                this.ProjectTag = e
                break;
            case '课程辅导':
                this.handleTagColor(tag,this.CourseGuidance,type)
                this.ProjectTag = e
                break;
            case '找合伙人':
                this.handleTagColor(tag,this.Partner,type)
                this.ProjectTag = e
                break;
            case '远程招聘':
                this.handleTagColor(tag,this.Recruitment,type)
                this.ProjectTag = e
                break;
            default:
                this.handleTagColor(tag,this.Other,type)
                this.ProjectTag = e
        }
    },
    check() {
        if (this.ProjectType == ""){
            this.errorTips = "项目类型不能为空"
            return false
        }
        if (this.ProjectTag == ""){
            this.errorTips = "项目标签不能为空"
            return false
        }
        if (this.TextTitle == ""){
            this.errorTips = "项目标题不能为空"
            return false
        }
        if (this.ProjectPeriod == 0) {
            this.errorTips = "项目开发周期不能为空"
            return false
        }
        if (this.ProjectBudget == 0) {
            this.errorTips = "项目预算不能为空"
            return false
        }
        return true
    },
    publish() {
        if (this.check()){
            apiRequest.publish(this.ProjectType,this.ProjectTag, this.TextTitle, this.ProjectPeriod, this.ProjectBudget,this.$store.getters.getCookie).then(
              res =>{
                  if (res.data.success) {
                      this.$router.go(-1)
                  }else{
                      this.errorTips = "发布项目失败"
                      this.ErrShow()
                  }  
              }  
            )
        }else{
            this.ErrShow()
        }

    },
    ErrShow() {
        this.eshow = true
        setTimeout(() => {
            this.eshow = false
        }, 3000);
    }
  }
}
</script>


<style scoped>

.tag_type{
    display:flex;
}
.tag_out{
   padding-top:80px;
   width:600px;
   padding-left:370px;
}
.tag_attr{
    padding-left:20px
}
.tag_attrs{
    display:flex;
}
.tag_title{
    padding-left:20px
}
.tag_padding{
    display:flex;
}
.inputtitle{
    padding-left:20px;
    padding-top:20px
}
.inputPeriod{
    padding-left:20px;
    padding-top:20px;
    display:flex
}
.inputBudget{
    padding-left:20px;
    padding-top:20px
}
.publish{
    padding-left:20px;
    padding-top:20px
}

.ishow{
    z-index: 1;
    padding-left:20px;
    position:relative;
}   

</style>


