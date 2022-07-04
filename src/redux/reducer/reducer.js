let initialState = {
  count: 0,
};

//reducer => store를 바꾼다!
function reducer(state = initialState, action) {
  // if문 쓰는 곳도 있고 switch문 쓰는 곳도 있다.
  if (action.type === "DECREMENT") {
    // action.type이 INCREMENT이면
    return { ...state, count: state.count - action.payload.num };
    //(...state: 다른 state들은 유지를 하되) count + 1
  }
  // reducer가 return하는 값을 store는 그대로 적용시킨다!
  // ==> reducer는 항상 return을 해줘야 함
  return { ...state };
}

export default reducer;
