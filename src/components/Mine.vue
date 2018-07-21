<template>
  <div>
    <panel :list="list" :type="type"></panel>
  </div>

</template>

<script>
  import { Panel } from 'vux'

  export default {
    name: 'Home',

    components: {
      Panel
    },

    data() {
      return{
        type: '5',
        list: []
      }
    },

    methods: {

    },

    created(){

    },

    mounted(){
      this.defines.setName('我发起的活动')
      var _this = this
      this.axios.get('http://localhost:3003/index')
                    .then(function(response){
                      console.log(response, 'home success');
                      var data = response.data.data

                      for(var i = 0; i < data.length; ++i){
                        _this.list.push(
                            {
                              'src': data[i].picture_url,
                              'title': data[i].title,
                              'desc': data[i].description,
                              'url': '/project/detailed/' + data[i].id,
                              'meta': {
                                'source': data[i].latitude_longitude,
                                'date': data[i].location,
                                'other': data[i].time
                              }
                            }
                          )
                      }
                    })
                    .catch(function(error){
                      console.log(error, 'home fail');
                    });
    }
  }

</script>