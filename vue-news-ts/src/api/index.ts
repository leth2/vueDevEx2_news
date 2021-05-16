import axios, { AxiosPromise } from 'axios';

const api = {
  news: 'https://api.hnpwa.com/v0/news/1.json',
  ask: 'https://api.hnpwa.com/v0/ask/1.json',
  jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
  user: 'https://api.hnpwa.com/v0/user/',
  item: 'https://api.hnpwa.com/v0/item/',
};
interface NewsItem {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  url: string;
  title: string;
  type: string;
  user: string;
}

const fetchNews = (): AxiosPromise<NewsItem[]> => {
  return axios.get(api.news);
};

export { NewsItem, fetchNews };
