import { fetchNews } from "@/api";
import { ActionTree, ActionContext } from "vuex";
import { RootState } from "../..";
import { Mutations, MutationTypes } from "./mutations";
import { NewsState } from "./state";

enum ActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<NewsState, RootState>, "commit">;

const actions: ActionTree<NewsState, RootState> = {
  async [ActionTypes.FETCH_NEWS](
    context: AugmentedActionContext,
    payload?: any
  ) {
    const { data } = await fetchNews();
    context.commit(MutationTypes.SET_NEWS, data);
    return data;
  },
};

type Actions = typeof actions;

export { ActionTypes, actions, Actions };
