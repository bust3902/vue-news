<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
// import bus from "@/utils/eventBus";
import ListMixin from "../mixins/ListMixin";

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
}
</script>

<style>

</style>
