import { NewsItem } from "@/api";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { NewsState, state as NState } from "./modules/state";

interface RootState {
  news: NewsState;
}

const store = createStore<RootState>({
  modules: { NState },
});

const key: InjectionKey<Store<RootState>> = Symbol();

const useStore = () => {
  return baseUseStore(key);
};

export { RootState, store, key, useStore };
