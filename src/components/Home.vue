<template>
  <div>
<!--     <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="3em"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
      </search> -->

    <img src="http://owj98yrme.bkt.clouddn.com/236435132238682874.webp" width="200em" height="200em" style="margin: 1em; border-radius: 2em" />

    <x-button style= "width: 67%; margin-bottom: 2em;" type="primary"
      link="/release">
      发起活动
    </x-button>

    <panel :list="list" :type="type"></panel>
  </div>

</template>

<script>
  import { Group, Cell, Panel, Divider, XButton, XHeader, Search } from 'vux'

  export default {
    name: 'Home',

    components: {
      Group,
      Cell,
      Panel,
      Divider,
      XButton,
      XHeader,
      Search
    },

    data() {
      return{
        cookieV: '',
        type: '5',
        list: [],
        results: [],
        value: 'test'
      }
    },

    methods: {
      //搜索框代码
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
    },

    created(){

    },

    mounted(){
      this.defines.setName('趣玩活动中心')
      var _this = this
      this.axios.get('http://localhost:3003/index')
                  .then(function(response){
                    console.log(response, 'home success');
                    if(response == undefined || response == null){
                      console.log('response is null')
                    }
                    var data = response.data.data
                    //这是一个坑
                    // _this.list = new Array(data.length)

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

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}

</script>