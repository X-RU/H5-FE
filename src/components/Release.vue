<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="center">
      <x-input placeholder="为活动取个名（max=10）..." title="主题" v-model="subject" :max="max10"></x-input>
      <datetime placeholder="点击选取时间" title="时间" v-model="datetime" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" value-text-align="left"></datetime>
      <!-- 删除标签中的属性 -->
      <!-- :show.sync="showAddress" -->
      <x-address title="地址" :list="addressData" placeholder="请选择地址"   v-model="addressCode" value-text-align="left"></x-address>
      <x-input placeholder="活动详细地点" title="地点" v-model="location"></x-input>
    </group>
    <br/>

    <group>
      <x-textarea :max50="max50" placeholder="是否需要对活动进行介绍或说明..." v-model="detail" />
    </group>
    <br/>

    <div id="test">
      <div>
        <img :src="mySrc" style="margin-bottom: 1em; width: 100%;" />
      </div>
      <input id="inputFile" type="file" @change="getFile"/>
      <label for="inputFile" style=" border-style: solid; border-width: 0.1em;">{{ label }}</label>
    </div>

    <x-button plain type="primary" style="border-radius: 3em; width: 67%; margin-top: 2em; margin-bottom: 2em;" v-on:click.native="publish">发布</x-button>

  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch, XButton, Grid, GridItem,ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'

export default {
  name: 'Release',

  components: {
    Group,
    GroupTitle,
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
    Grid,
    GridItem,
  },

  data () {
    return {
      max10: 10,
      max50: 50,
      subject: '',
      location: '',
      datetime: '',
      detail: '',
      addressCode: [],
      address: '',
      addressData: ChinaAddressData,
      mySrc: 'http://owj98yrme.bkt.clouddn.com//nab/6.jpg',
      newFile: null,
      newImgUrl: '',
      label: '更换默认主题图片'
    }
  },

  methods: {
    publish: function(){
      if(this.subject == '' || this.address == '' || this.location == ''){
        alert("主题、地址和地点为必填项")
        return
      }

      console.log( this.subject + ", "+ this. address+ ", " + this.location + ", " + this.detail + ", " + this.datetime + this.mySrc +"!", '\r\nnew project created')

      var _this = this

      this.axios.get('http://101.132.181.76:3838/')
            .then(function(response){
              console.log(response, 'qiuniu tokne success')

              var file = _this.newFile
              var token = response.data.token
              var key = null
              var putExtra = {
                fname: "",
                params: {},
                mimeType: null
              }
              var config = {
                useCdnDomain: false,
                region: null
              }

              var observable = qiniu.upload(file, key, token, putExtra, config)
              console.log(observable, 'observable')

              var observer = {
                next(res){

                },
                error(err){
                  console.log(err, 'observer error')
                },
                complete(res){
                  console.log(res, 'observer complete')
                  _this.newImgUrl = 'pc56nec9k.bkt.clouddn.com/' + res.hash
                }
              }
              var subscription = observable.subscribe(observer)
            })
            .catch(function(error){
              console.log(error, 'qiuniu token fail');
            });

      this.axios.get('http://localhost:3003/release', {
          title: _this.subject,
          time: _this.datetime,
          location: _this.location,
          latitude_longitude: _this.address,
          picture: _this.newImgUrl,
          description: _this.detail
        }).then(function (response) {
          console.log(response, 'push project data to database suceess');
          var activityId = response.data.id
          window.location="http://localhost:8080/#/project/detailed/" + activityId
        }).catch(function (error) {
          console.log(error, 'erorr from push project');
        });
    },

    getFile(e){
      let _this = this;
      var file = e.target.files[0]
      if(!e || !window.FileReader){
        alert("浏览器不支持上传文件或者图片文件已损坏")
        return
      }
      _this.newFile = file
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = function(){
        _this.mySrc = this.result
        _this.label = '更换主题图片'
      }
    },
  },

  watch: {
    addressCode: function() {
      this.address = value2name(this.addressCode, ChinaAddressV4Data)
    },
  },

  mounted(){
    this.defines.setName('趣玩活动中心')
  }

}
</script>

<style>
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
#inputFile {
    display: none;
    z-index: 10;
    width: 120px;
    font-size: 0;
    height: 30px;
}
</style>