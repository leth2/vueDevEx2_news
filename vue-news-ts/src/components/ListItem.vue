<template>
  <ul class="news-list">
    <li v-for="(news, index) in items" :key="index" class="post">
      <div class="points">{{ news.points || 0 }}</div>
      <div>
        <p class="news-title">
          <template v-if="news.domain">
            <a :href="news.url">{{ news.title }}</a
            ><small class="link-text" v-if="news.domain">({{ news.domain }})</small>
          </template>
          <template v-else>
            <router-link :to="`/item/${news.id}`">{{ news.title }}</router-link>
            <small
              ><a class="link-text" :href="news.domain" v-if="news.domain">({{ news.domain }})</a></small
            >
          </template>
        </p>
        <small v-if="news.user" class="link-text">
          by {{ news.user }}
          <!-- <router-link :to="`/user/${news.user}`" class="link-text">{{ news.user }}</router-link> -->
        </small>
        <small v-if="news.time_ago" class="link-text">
          <!-- {{ news.time_ago.concet(", 2021") }} -->
          {{ timeAgo(news) }}
        </small>
      </div>
      <!-- 
      <a :href="news.url"
        ><span>{{ `${news.title} by ${news.user} when ${news.time_ago}` }}</span></a
      > -->
    </li>
  </ul>
</template>

<script lang="ts">
import { NewsItem } from '@/api';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ListItem',
  props: {
    items: {
      type: Array as PropType<NewsItem[]>,
      required: true,
    },
  },
  setup() {
    const timeAgo = (news: NewsItem): string => {
      return news.time_ago.concat(', 2021');
    };
    return { timeAgo };
  },
});
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
