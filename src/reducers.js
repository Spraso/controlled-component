import assign from 'lodash/object/assign';
import Actions from 'actions';

const initialState = {
  value: '',
  message: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.SYNC_UPDATE:
      return assign({}, state, { value: action.newValue });
    case Actions.ASYNC_UPDATE:
      return assign({}, state, {
        message: `Username ${action.existingUser ? 'exists' :  'available'}`
      });
    default:
      return state;
  }
}
