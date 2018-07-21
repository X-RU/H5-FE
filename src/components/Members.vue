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
        list: []
      }
    },

    methods: {

    },

    mounted(){
      this.defines.setName('活动参与人员')
      var _this = this
      this.axios.get('http://localhost:3003/members')
                    .then(function(response){
                      console.log(response);
                      var form = response.data.data
                      _this.amount = form.length

                      for(var i = 0; i < form.length; ++i){
                        _this.list.push({
                          'src': form[i].picture_url,
                          'title': form[i].screen_name + '(' + form[i].gender + ')',
                          'desc': form[i].description
                        })
                      }

                    })
                    .catch(function(error){
                      console.log(error);
                    });
    }
  }

</script>