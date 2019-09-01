<template>
  <div style="pading:100px;margin-bottom:20px;">
    <div class="tabs">
      <span
        v-for="(item,index) in ['新闻','体育','娱乐']"
        :key="index"
        @click="handleClick(index)"
        :class="{active:current === index}"
      >{{item}}</span>
    </div>

    <div v-show="current ===0">
      <ul>
        <li>你看这个碗它又大又圆</li>
        <li>skr</li>
        <li>鸡你太美</li>
      </ul>
    </div>

    <div v-show="current ===1">
      <ul>
        <li>喜欢唱、跳、rap、篮球</li>
        <li>自♂由</li>
        <li>fa♂fan♂</li>
      </ul>
    </div>

    <div v-show="current ===2">
      <ul>
        <li>黑喂狗</li>
        <li>双人舞♂</li>
        <li>伊丽莎白鼠</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //记录当前状态
      current: 0
    };
  },
  methods: {
    handleClick(index) {
      //修改current
      this.current = index;
    }
  }
};
</script>

<style lang="less" scoped>
.tags {
  margin-bottom: 30px;
}

span {
    cursor: pointer;
  }

.active {
  color: blue;
}
</style>