import { actions } from "./actions";
//dummy data
const initialData = [
  {
    id: 1,
    task: "sleep"
  },
  {
    id: 2,
    task: "Node.JS"
  }
];

//
export const todoReducer = (state = initialData, action) => {
  console.log(action.payload, "DISPATCH payload COMING");
  console.log(action.type, "DISPATCH Type COMING");
  switch (action.type) {
    case actions.ADD_TODO:
      const newTodo = {
        id: Math.random(),
        task: action.payload
      };
      return [...state, newTodo];
    case actions.DELETE_TODO:
      const newList = state.filter((x) => x.id !== action.payload.id);
      return newList;
    default:
      return state;
  }
};
