import { NewsItem } from '@/api';

interface NewsState {
  item: NewsItem[];
}

const state: NewsState = {
  item: [],
};

export { state, NewsState };
