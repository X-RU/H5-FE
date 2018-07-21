<template>
  <div>
    <div id="test">
        <div style>
          <img :src="mySrc" style="width: 100%; height=width; border-radius: 10%" />
        </div>
        <input id="file" type="file" @change="getFile" ref="file"/>
        <label for="file" style=" border-style: solid; border-width: 0.1em;">选择新头像</label>
      </div>
    <group label-width="4.5em" label-margin-right="2em" label-align="center">
      
      <cell style="margin-top: 1em" title="昵称" value-align="left" v-model="screen_name"></cell>
      <cell title="性别"  value-align="left" v-model="gender"></cell>
      <cell title="描述"  value-align="left" v-model="description"></cell>
    </group>

    <group>
      <cell title="我发起的活动"  value-align="center" link="/mine" is-link></cell>
    </group>

    <x-button plain type="primary" style="border-radius:99px; width: 67%; margin-top:2em; margin-bottom: 2em;" v-on:click.native="submit">确认</x-button>
    

  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch, XButton, Grid, GridItem,ChinaAddressV4Data, Value2nameFilter as value2name, Divider, PopupRadio } from 'vux'

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
    Divider,
    PopupRadio
  },

  data () {
    return {
      screen_name: '',
      gender: '',
      description: '',
      mySrc: '',
      newFile: null,
      newImgUrl: '',
    }
  },

  mounted(){
    this.defines.setName('个人信息')
    var _this = this
    this.axios.get('http://localhost:3003/profile')
                .then(function(response){
                  console.log(response, 'profile success')
                  var form = response.data.data
                  _this.screen_name = form.screen_name
                  _this.gender = form.gender
                  _this.description = form.description
                  _this.mySrc = form.picture_url
                })
                .catch(function(error){
                  alert("error")
                  console.log(error);
                });
  },

  methods: {
    submit: function(){
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
              console.log(subscription, 'subscription')

            })
            .catch(function(error){
              console.log(error, 'qiuniu token fail');
            });

      this.axios.post('',{
                picture_url: _this.newImgUrl
            })
            .then(function(response){
              console.log(response)
            })
            .catch(function(error){
              alert("error")
              console.log(error);
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
      }

    },

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
#file {
    display: none;
    z-index: 10;
    width: 120px;
    font-size: 0;
    height: 30px;
}
</style>