<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="center">
      <cell title="发起活动"></cell>
      <x-input placeholder="为活动取个名..." title="主题" v-model="subject"></x-input>

      <datetime placeholder="点击选取时间" title="时间" v-model="datetime" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" value-text-align="left"></datetime>

      <x-address title="地址" :list="addressData" placeholder="请选择地址"  :show.sync="showAddress" v-model="addressCode" value-text-align="left"></x-address>

      <x-input placeholder="活动详细地点" title="地点" v-model="location"></x-input>
      <!-- <datetime placeholder="点击选取日期" title="日期" v-model="date" value-text-align="left"></datetime> -->
    </group>
    <br/>

    <group>
      <x-textarea max="50" placeholder="是否需要对活动进行介绍或说明..." v-model="detail" />
    </group>

    <br/>
    <br/>

    <x-button plain type="primary" style="border-radius:99px; width: 67%" v-on:click.native="publish">确认</x-button>

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
      GridItem
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


      }
    },

    methods: {
      publish: function(){
        alert(this.subject + ", "+ this. address+ ", " + this.location + ", " + this.detail + ", " + this.datetime + "!")
      }

    },

    watch: {
      addressCode: function() {
        // alert(value2name(this.addressVal, ChinaAddressV4Data))
        this.address = value2name(this.addressCode, ChinaAddressV4Data)
      },

    }

  }
</script>