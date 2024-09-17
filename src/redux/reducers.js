import { SET_USER_INFO } from "./actions";

const initialState = {
  name: "James Bond",
  status: "agent 007",
};

const rootRedux = (state = initialState, { type, payloud }) => {
  console.log(type, payloud);
  if (type === SET_USER_INFO) {
    return {
      ...state,
      name: payloud.name, // Обновляем имя из экшена
      status: payloud.status,
    };
  }
  return state;
};

export default rootRedux;
