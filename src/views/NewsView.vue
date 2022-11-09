<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news" v-bind:key="user.id">{{ user.title }}</div>
    <div v-for="user in fetchedNews" v-bind:key="user.id">{{ user.title }}</div> -->
    <p v-for="item in fetchedNews" v-bind:key="item.id">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index'
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchedNews: 'fetchedNews'
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
    // let vm = this;
    // fetchNewsList()
    //     .then(function(response) {
    //       console.log(response);
    //       vm.users = response.data;
    //     })
    //     .catch(function(error) {
    //       console.log(error)
    //     })
  }
}
</script>

<style>

</style>
