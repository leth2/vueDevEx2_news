import { NewsState } from './state';
import { NewsItem } from '@/api';

enum MutationTypes {
  SET_NEWS = 'SET_NEWS',
}

const mutations = {
  [MutationTypes.SET_NEWS](state: NewsState, news: NewsItem[]) {
    state.item = news;
  },
};

type Mutations = typeof mutations;

export { MutationTypes, mutations, Mutations };
