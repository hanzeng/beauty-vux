<template>
  <div v-on:click="reverseMessage">
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  methods: {
    reverseMessage: function () {
      console.log(45454);
      this.$vux.alert.show({
        title: 'Vux is Cool',
        content: 'Do you agree?',
        onShow () {
          console.log('Plugin: I\'m showing')
        },
        onHide () {
          console.log('Plugin: I\'m hiding')
        }
      })
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  
</style>
