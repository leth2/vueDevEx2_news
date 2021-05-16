<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <div>
    <ul>
      <li v-for="(article, index) in news.item" :key="index">
        <a :href="article.url"
          ><span>{{ `${article.title} by ${article.user} when ${article.time_ago}` }}</span></a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { getFullDispatchPath, NamedSpace, useStore } from './store';
import { ActionTypes as NActionTypes } from './store/modules/news/actions';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();
    const news = computed(() => store.state.news);

    // onBeforeMount(async () => {
    //   await store.dispatch(getFullDispatchPath(NamedSpace.NEWS, NActionTypes.FETCH_NEWS));
    // });

    onMounted(async () => {
      await store.dispatch(getFullDispatchPath(NamedSpace.NEWS, NActionTypes.FETCH_NEWS));
    });

    return { news };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
