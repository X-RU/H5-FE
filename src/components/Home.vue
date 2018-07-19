<template>
  <div>
    <img src="http://owj98yrme.bkt.clouddn.com/236435132238682874.webp" width="200em" height="200em" style="margin: 1em; border-radius: 2em" />
    <x-button style= "width: 67%; margin-bottom: 2em;" type="primary"
      link="/release">
      发起活动
    </x-button>
<!--  -->
    <divider>我的活动</divider>
    <panel :list="list" :type="type"></panel>
  </div>

</template>

<script>
  import { Group, Cell, Panel, Divider, XButton, XHeader } from 'vux'

  export default {
    name: 'Home',

    components: {
      Group,
      Cell,
      Panel,
      Divider,
      XButton,
      XHeader
    },

    data() {
      return{
        cookieV: '',
        type: '5',
        list: [
          // {
          //   src: 'http://owj98yrme.bkt.clouddn.com//lufei/0.jpg',
          //   title: 'this is subject',
          //   desc: 'this is introduce',
          //   url: 'https://www.baidu.com',
          //   meta: {
          //     source: 'this is address',
          //     date: 'this is location',
          //     other: 'this is datetime'
          //   }
          // },

          // {
          //   src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
          //   title: '篮球活动',
          //   desc: '自带篮球、自带水、素质的来Q1',
          //   url: 'https://www.baidu.com',
          //   meta: {
          //     source: '福建省厦门市翔安区',
          //     date: '公寓1篮球场',
          //     other: '2018-7-15 14:00'
          //   }
          // },

          // {
          //   src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
          //   title: '篮球活动',
          //   desc: '自带篮球、自带水、素质的来Q1',
          //   url: 'https://www.baidu.com',
          //   meta: {
          //     source: '福建省厦门市翔安区',
          //     date: '公寓1篮球场',
          //     other: '2018-7-15 14:00'
          //   }
          // },

          // {
          //   src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
          //   title: '篮球活动',
          //   desc: '自带篮球、自带水、素质的来Q1',
          //   url: 'https://www.baidu.com',
          //   meta: {
          //     source: '福建省厦门市翔安区',
          //     date: '公寓1篮球场',
          //     other: '2018-7-15 14:00'
          //   }
          // },

          // {
          //   src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
          //   title: '篮球活动',
          //   desc: '自带篮球、自带水、素质的来Q1',
          //   url: 'https://www.baidu.com',
          //   meta: {
          //     source: '福建省厦门市翔安区',
          //     date: '公寓1篮球场',
          //     other: '2018-7-15 14:00'
          //   }
          // },

        ]
      }
    },

    methods: {
      
    },

    created(){
      
    },

    mounted(){
      // this.axios.post("http://api.komavideo.com/news/list").then(body => {
      //   console.log(body, '!@#$~')
      //   this.content = body.data;
      // })
      // this.axios.post('http://api.komavideo.com/news/list'
      //     // pageSize: '',
      //     // pageIndex: '',
      //     // pageIndex: '',
      //     ).then(function (response) {
      //       console.log(response);
      //     }).catch(function (error) {
      //       console.log(error);
      //     });
      // var cookies = document.cookie.split(';')
      // if(cookies == ''){
      //   return
      // }
      // for(var i = 0; i < cookies.length; ++i){
      //   var kv = cookies[i].split('=')
      //   if(kv[0] == 'panda'){
      //     this.cookieV = kv[1]
      //     // alert(this.cookieV)
      //     break
      //   }
      // }

      // if(this.cookieV == ''){
      //   return
      // }

      var _this = this
      this.axios.get('http://localhost:3003/index')
                    .then(function(response){
                      console.log(response, 'home success');
                      var data = response.data.data
                      _this.list = new Array([data.length])

                      for(var i = 0; i < data.length; ++i){
                        _this.list.push(
                            {
                              'src': data[i].picture_url,
                              'title': data[i].title,
                              'desc': data[i].description,
                              'url': '/project/detailed/' + data[i].id,
                              'meta': {
                                'source': data[i].longitude,
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