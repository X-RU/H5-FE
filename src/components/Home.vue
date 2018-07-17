<template>
  <div>
    <img src="http://owj98yrme.bkt.clouddn.com/236435132238682874.webp" width="200em" height="200em" style="margin: 1em; border-radius: 2em" />
    <x-button style= "width: 67%; margin-bottom: 2em;" type="primary"
      link="/release">
      发起活动
    </x-button>

    <pre>..{{content}}..</pre>

    <divider @click.native="test">我的活动</divider>
    <panel :list="list" :type="type"></panel>
  </div>

</template>

<script>
  import { Group, Cell, Panel, Divider, XButton } from 'vux'

  export default {
    name: 'Home',

    components: {
      Group,
      Cell,
      Panel,
      Divider,
      XButton,
    },

    data() {
      return{
        content: '',

        organizer: 'aaaa',
        subject: 'zhuti',
        datetime: 'datetime',
        address: 'address',
        location: 'location',
        type: '5',
        list: [
          {
            src: 'http://owj98yrme.bkt.clouddn.com//lufei/0.jpg',
            title: 'this is subject',
            desc: 'this is introduce',
            url: 'https://www.baidu.com',
            meta: {
              source: 'this is address',
              date: 'this is location',
              other: 'this is datetime'
            }
          },

          {
            src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
            title: '篮球活动',
            desc: '自带篮球、自带水、素质的来Q1',
            url: 'https://www.baidu.com',
            meta: {
              source: '福建省厦门市翔安区',
              date: '公寓1篮球场',
              other: '2018-7-15 14:00'
            }
          },

          {
            src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
            title: '篮球活动',
            desc: '自带篮球、自带水、素质的来Q1',
            url: 'https://www.baidu.com',
            meta: {
              source: '福建省厦门市翔安区',
              date: '公寓1篮球场',
              other: '2018-7-15 14:00'
            }
          },

          {
            src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
            title: '篮球活动',
            desc: '自带篮球、自带水、素质的来Q1',
            url: 'https://www.baidu.com',
            meta: {
              source: '福建省厦门市翔安区',
              date: '公寓1篮球场',
              other: '2018-7-15 14:00'
            }
          },

          {
            src: 'http://owj98yrme.bkt.clouddn.com//lufei/2.jpg',
            title: '篮球活动',
            desc: '自带篮球、自带水、素质的来Q1',
            url: 'https://www.baidu.com',
            meta: {
              source: '福建省厦门市翔安区',
              date: '公寓1篮球场',
              other: '2018-7-15 14:00'
            }
          },

        ]
      }
    },

    methods: {
      test: function(){
        console.log(this.list, '@@@@')
        var url = this.list[0].url + this.list[0].aid
        alert(url)

      }
    },

    mounted(){
      this.axios.post("http://api.komavideo.com/news/list").then(body => {
        console.log(body, '!@#$~')
        this.content = body.data;
      })
    }
  }

</script>