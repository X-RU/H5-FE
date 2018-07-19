<template>
  <div>
    <divider>参与人数: {{ amount }}</divider>
    <panel :list="list" :type="type"></panel>
  </div>

</template>

<script>
  import { Group, Cell, Panel, Divider, XButton } from 'vux'

  export default {
    name: 'Members',

    components: {
      Group,
      Cell,
      Panel,
      Divider,
      XButton,
    },

    data() {
      return{
      	activityId: '',
        amount: '0',
        type: '5',
        list: [
          {
            src: 'http://owj98yrme.bkt.clouddn.com//lufei/0.jpg',
            title: 'username',
            desc: 'enroll time: ' + '2018-9-15 18:13'
          },

          {
            src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
            title: 'zero',
            desc: 'enroll time: ' + '2018-9-13 22:16',
          },

        ]
      }
    },

    methods: {

    },

    mounted(){
      //获取   ?pid=123  中的项目编号
      var url = document.location.toString(); //获取url中"?"符后的字串
      if(url.indexOf('?') != -1){
        url = url.substring(url.indexOf('?')+1, url.length)
        kv = url.split('=')
        if(kv[0] == 'pid' && kv[1] != null){
          this.activityId = kv[1]
        }
      }

      var _this = this

      this.axios.get('http://localhost:3003/members',{
                      params: {
                        project_id: _this.activityId
                      }
                    })
                    .then(function(response){
                      console.log(response);
                      var data = response.data.members
                      _this.amount = data.length
                      _this.list = new Array([data.length])
                      for(var i = 0; i < data.length; ++i){
                        _this.list.push({
                          'src': data[i].picture,
                          'title': data[i].username,
                          'desc': '报名时间：' + data[i].enrolledTime
                        })
                      }

                    })
                    .catch(function(error){
                      console.log(error);
                    });
    }
  }

</script>