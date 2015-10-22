import assign from 'object-assign';
import Actions from 'actions';

const initialState = {
  value: 'Initial field value'
};

function slowValidate(value) {
  const iterations = 1000;
  var randomResult = 0;

  for (let i = 0; i < iterations; i += 1) {
    randomResult += Math.random() > 0.5 ? 1 : 0;
  }

  return {
    value: value,
    result: randomResult < (iterations / 2),
    reason: 'An error message'
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.VALUE_CHANGE:
      return assign({}, state, slowValidate(action.newValue));
    default:
      return state;
  }
}
