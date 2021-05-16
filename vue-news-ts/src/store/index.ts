import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { NewsState } from './modules/news/state';
import { newsModule } from './modules/news';

const getFullDispatchPath = (R: string, D: string): string => {
  return `${R}/${D}`;
};

enum NamedSpace {
  NEWS = 'news',
}

interface RootState {
  [NamedSpace.NEWS]: NewsState;
}

const store = createStore<RootState>({
  modules: { [NamedSpace.NEWS]: newsModule },
});

const key: InjectionKey<Store<RootState>> = Symbol();

const useStore = () => {
  return baseUseStore(key);
};

export { getFullDispatchPath, NamedSpace, RootState, store, key, useStore };
