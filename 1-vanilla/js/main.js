import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";
import KeywordListView from "./views/KeywordListView.js";
import SearchFormView from "./views/SearchFormVeiw.js";
import SearchResultView from "./views/SearchResultView.js";
import TabView from "./views/TabView.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store(storage);

  const views = {
    searchFormView: new SearchFormView(),
    searchResultView: new SearchResultView(),
    tabView: new TabView(),
    keywordListView: new KeywordListView()
  };

  new Controller(store, views);
}
