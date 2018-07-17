<template>
  <div>
    <div style="margin-top: 1em">
      <divider>个人信息</divider>
    </div>
    <group label-width="4.5em" label-margin-right="2em" label-align="center">
      <div id="test">
        <div class="img-container">
          <img :src="mySrc" />
        </div>
        <input id="file" type="file" @change="getFile" ref="file"/>
        <div style="padding: 1em; border-style: solid; border-width: 1em">
          <label for="file" style="width: 100%">选择新头像</label>
        </div>
      </div>

      <x-input title="昵称" placeholder="请输入昵称" v-model="subject"></x-input>

      <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></x-input>

      <x-input title="手机" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>

      <popup-radio title="姓别" value-align="left" :options="options2" v-model="option2" placeholder="点击修改"></popup-radio>

    </group>
    <x-button plain type="primary" style="border-radius:99px; width: 67%; margin-top:2em; " v-on:click.native="publish">确认</x-button>

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
        subject: '',
        location: '',
        // date: '',
        datetime: '',
        detail: '',
        addressCode: [],
        address: '',
        addressData: ChinaAddressData,

        option2: '',
        options2: [{
            key: 'A',
            value: '男'
          }, {
            key: 'B', 
            value: '女'
        }],

        mySrc: 'http://owj98yrme.bkt.clouddn.com//lufei/9.jpg',
      }
    },

    methods: {
      publish: function(){
        alert(this.subject + ", "+ this. address+ ", " + this.location + ", " + this.detail + ", " + this.datetime + "!")
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
      },

    },


    watch: {
      addressCode: function() {
        // alert(value2name(this.addressVal, ChinaAddressV4Data))
        this.address = value2name(this.addressCode, ChinaAddressV4Data)
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