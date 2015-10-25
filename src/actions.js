const ActionTypes = {
  SYNC_UPDATE: 'sync-update',
  ASYNC_UPDATE: 'async-update'
};

const checkUserExists = function(value) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.ASYNC_UPDATE,
        existingUser: Math.random() > 0.5
      });
    }, 500);
  };
}

export function asyncAction(value) {
  return checkUserExists(value);
}

export function syncAction(value) {
  return {
    type: ActionTypes.SYNC_UPDATE,
    newValue: value
  };
}

export default ActionTypes;
