<template>
  <div>
      <!-- <divider style="margin-top: 1em">活动详情</divider> -->
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <cell title="发布人" value-align="left" :value="value0">
          <cell-box>
            刘嘉劲
          </cell-box>
        </cell>
        <cell title="主题" value-align="left" :value="value1"></cell>
        <cell title="时间" value-align="left" :value="value2"></cell>
        <cell title="地址" value-align="left" :value="value3"></cell>
        <cell title="地点" value-align="left" :value="value4">
          <cell-box>
            可以存放更多内容可以存放更多内容可以存放更多内容可以存放更多内容可以存放更多内容可以存放多内容
          </cell-box>
        </cell>
      </group>
      
      <group label-width="6em" label-margin-right="2em" label-align="right">
        <cell title="报名详情" value-align="left" :link="toMembers" is-link></cell>
        <cell title="相册" value-align="left" :link="toPhotos" is-link></cell>
      </group>

      <group>
          <div id="manager" v-show="true">
            <cell title="管理（仅限发起人 v-if ）" value-align="left" :link="toManager" is-link></cell>
        </div>
      </group>

      <x-button plain type="primary" style="border-radius:99px; width: 67%; margin-top: 2em;" v-on:click.native="publish">报名/取消报名</x-button>
<!-- 
      <router-view><router-view/> -->

  </div>
</template>


<script>
import { Divider, Group, Cell, XButton, XInput } from 'vux'
export default{
  name: 'Enroll',
  components: {
    Divider,
    Group,
    Cell,
    XButton,
    XInput
  },


  data() {
    return {
      activityId: '5',
      value0: '1111wdweweweweweweweweweweweew1sdsdsdsd',
      toMembers: '/members',
      toPhotos: '/photos',
      toManager: '/manager',
    }
  },
}
</script>

<style scoped>


</style>