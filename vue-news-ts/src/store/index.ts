import { NewsItem } from "@/api";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { NewsState } from "./modules/news/state";
import { newsModule } from "./modules/news"

interface RootState {
  news: NewsState;
}

const store = createStore<RootState>({
  modules: { news: newsModule },
});

const key: InjectionKey<Store<RootState>> = Symbol();

const useStore = () => {
  return baseUseStore(key);
};

export { RootState, store, key, useStore };
