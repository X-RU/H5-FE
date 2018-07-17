<template>
  <div style="margin-top: 0.5em">
    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)">
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
    </div>

    <divider style="margin-top: 1em; margin-bottom: 1em">更改我的上传</divider>
    
    <div id="test" v-model="shit">
      <div class="img-container">
        <img :src="mySrc" />
      </div>
      <input id="file" type="file" ref="file" v-on:change="getFile"/>
      <label for="file">画像变更</label>
    </div>
  </div>


</template>

<script>
import { Previewer, TransferDom, Divider, XButton } from 'vux'

export default {
  name: 'Photos',

  directives: {
    TransferDom
  },
  components: {
    Previewer,
    Divider,
    XButton
  },
  methods: {
    logIndexChange (arg) {
      console.log(arg)
    },
    show (index) {
      this.$refs.previewer.show(index)
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
            _this.list[0].msrc = this.result
            _this.list[0].src =  this.result
          }
          
        },

  },
  data () {
    return {
      mySrc: 'http://owj98yrme.bkt.clouddn.com//nab/5.jpg',
      list: [
        {
          msrc: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg'
        },
        {
          msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg'
        }, 
        {
          msrc: 'http://owj98yrme.bkt.clouddn.com//nab/7.jpg',
          src: 'http://owj98yrme.bkt.clouddn.com//nab/7.jpg'
          
        },
        {
          msrc: 'http://owj98yrme.bkt.clouddn.com//nab/8.jpg',
          src: 'http://owj98yrme.bkt.clouddn.com//nab/8.jpg'
        },
        {
          msrc: 'http://owj98yrme.bkt.clouddn.com//nab/5.jpg',
          src: 'http://owj98yrme.bkt.clouddn.com//nab/5.jpg'
        },
        {
          msrc: 'http://owj98yrme.bkt.clouddn.com//nab/1.jpg',
          src: 'http://owj98yrme.bkt.clouddn.com//nab/1.jpg'
        }
      ],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      },
    }
  }
}
</script>

<style scoped>
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
