import { RootState } from "@/store";
import { Module } from "vuex";
import { NewsState, state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";

const newsModule: Module<NewsState, RootState> = {
  namespaced: true,
  actions,
  mutations,
  state,
};

export  {newsModule};
