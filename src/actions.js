const ActionTypes = {
  VALUE_CHANGE: 'value-change'
};

const simulateServerTime = function(value) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.VALUE_CHANGE,
        newValue: value
      });
    }, 500);
  };
}

export function valueChange(value) {
  return simulateServerTime(value);
}

export default ActionTypes;
