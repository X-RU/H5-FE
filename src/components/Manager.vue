<template>
  <div>
    <divider style="margin-top: 1em">活动计划</divider>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
      <x-input title="主题" v-model="subject"></x-input>
      <datetime title="时间" v-model="datetime" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" value-text-align="left"></datetime>
      <x-address title="地址" :list="addressData" placeholder="请选择地址"  :show.sync="showAddress" v-model="addressCode" value-text-align="left"></x-address>

      <x-input title="地点" v-model="location"></x-input>
    </group>


    <div style="margin-top: 2em">
        <divider style="margin-bottom: 1em">活动状态</divider>
        <checklist value-align="left" :options="commonList" v-model="checklist003" :max=1 >
        </checklist>
    </div>

    <div style="margin-top: 2em">
        <divider style="margin-bottom: 1em">主题图片</divider>

          <img v-bind:src="subjectImg" width="200em" height="200em" style="border-radius: 2em" v-on:click="changeImg"/>
          <br/>
          <input class="" type="file" align="center">

    </div>
    
    <divider style="margin-top: 1em">test</divider>
    
    <div id="test">
      <div class="img-container">
        <img :src="mySrc" />
      </div>
      <input id="file" type="file" @change="getFile" ref="file"/>
      <label for="file">画像变更</label>
    </div>
    <x-button style= "width: 67%; margin-top:2em; margin-bottom:1em; " type="primary"
      link="http://localhost:8080/#/release">
      确认修改
    </x-button>
    <router-view></router-view>

  </div>
</template>


<script>
import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch, XButton, Grid, GridItem, Divider,Card, Checklist, ChinaAddressV4Data, Value2nameFilter as value2nam } from 'vux'

  export default {
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea,
      XSwitch,
      XButton,
      ChinaAddressData,

      Grid,
      GridItem,
      Divider,
      Card,
      Checklist,
    },

    data() {
        return {
          subject: '',
          location: '',
          datetime: '',
          detail: '',
          addressCode: [],
          address: '',
          addressData: ChinaAddressData,

          activityId: '',

          toMembers: '/enroll/members',
          toPhotos: '/enroll/photos',
          toManager: '/enroll/manager',
          commonList: [ '尚未开始', '报名结束', '进行中', '已结束' ],

          subjectImg: 'http://owj98yrme.bkt.clouddn.com/236435132238682874.webp',
          imgSource: '',

          mySrc: 'http://owj98yrme.bkt.clouddn.com//lufei/9.jpg'
        }
    },

    methods: {
      onItemClick () {
        console.log('on item click')
      },
      changeImg(){
        alert("!")
        this.subjectImg = 'http://owj98yrme.bkt.clouddn.com//lufei/3.jpg'
        console.log(this.imgSource, '!@#$%')
      },
      getFile(e){
        let _this = this;
        var file = e.target.files[0]
        if(!e || !window.FileReader){
          alert("浏览器不支持上传文件或者图片文件已损坏")
          return
        }
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function(){
          _this.mySrc = this.result
        }
      }
    },

    watch: {
      addressCode: function() {
        // alert(value2name(this.addressVal, ChinaAddressV4Data))
        this.address = value2name(this.addressCode, ChinaAddressV4Data)

    }
  }

}
</script>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}

#test {
    label {
      width: 120px;
      display: block;
      border-radius: 2px;
      color: #fff;
      text-align: center;
      margin-top: 10px;
      font-size: 12px;
      background-color: map-get($global-color-base, primary);
    }
  }
#file {
    display: none;
    z-index: 10;
    width: 120px;
    font-size: 0;
    height: 30px;
}

</style>