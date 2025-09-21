import { ADD_TASK } from "./actions-types";
import { TOGGLE_TASK } from "./actions-types";
import { EDIT_TASK } from "./actions-types";
import { SET_FILTER } from "./actions-types";
const initialState = {
  tasks: [],
  filter: "all", // all | done | not
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };

    case SET_FILTER :
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default reducer;