import assign from 'object-assign';
import Actions from 'actions';

const initialState = {
  value: 'Initial field value',
  message: 'Start typing...'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Actions.SYNC_UPDATE:
      return assign({}, state, { value: action.newValue });
    case Actions.ASYNC_UPDATE:
      return assign({}, state, {
        message: action.success ? 'Successful' :  'Failure'
      });
    default:
      return state;
  }
}
