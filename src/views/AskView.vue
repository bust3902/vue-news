<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key="item.id">
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
// #1,2
// import { mapState } from 'vuex'
// #3
import { mapGetters } from 'vuex'

export default {
  computed: {
    // #3-1
    ...mapGetters({
      fetchedAsk: 'fetchedAsk'
    })
    // #3-2
    // ...mapGetters(['fetchedAsk'])

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>
