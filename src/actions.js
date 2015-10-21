const ActionTypes = {
  VALUE_CHANGE: 'value-change'
};

export function valueChange(value) {
  return {
    type: ActionTypes.VALUE_CHANGE,
    newValue: value
  };
}

export default ActionTypes;
