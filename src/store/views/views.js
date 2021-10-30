import { combineReducers } from "redux";

const INCREMENT_VIEW = "INCREMENT_VIEW";

export function incrementView(view) {
  return {
    type: INCREMENT_VIEW,
    view,
  };
}

const defaultViews = [
  {
    views: 1,
  },
];

function views(state = defaultViews, action) {
  switch (action.type) {
    case INCREMENT_VIEW:
      // const view = state.find((b) => action.view === b.id);
      // const views = state.filter((b) => action.view !== b.id);
      return state + 1;
    default:
      return state;
  }
}
const viewApp = combineReducers({
  views,
});

export default viewApp;
