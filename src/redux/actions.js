export const SET_USER_INFO = "SET_USER_INFO";

export const creator = (name, status) => ({
  type: SET_USER_INFO,
  payloud: { name, status }, // Передаем объект с именем и статусом
});
