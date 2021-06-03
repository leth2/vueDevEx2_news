<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  <div>
    <ToolBar />
    <ListItem :items="news.item"></ListItem>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { getFullDispatchPath, NamedSpace, useStore } from './store';
import { ActionTypes as NActionTypes } from './store/modules/news/actions';
import ListItem from './components/ListItem.vue';
import ToolBar from './components/ToolBar.vue';

export default defineComponent({
  components: {
    ListItem,
    ToolBar,
  },
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
body {
  margin: 0;
}
</style>
