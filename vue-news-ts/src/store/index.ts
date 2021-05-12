import { NewsItem } from "@/api";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  item: NewsItem[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    item: [],
  },
});

export const useStore = () => {
  return baseUseStore(key);
};
