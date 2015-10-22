const ActionTypes = {
  SYNC_UPDATE: 'sync-update',
  ASYNC_UPDATE: 'async-update'
};

const simulateServerTime = function(value) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.ASYNC_UPDATE,
        success: Math.random() > 0.5
      });
    }, 500);
  };
}

export function asyncAction(value) {
  return simulateServerTime(value);
}

export function syncAction(value) {
  return {
    type: ActionTypes.SYNC_UPDATE,
    newValue: value
  };
}

export default ActionTypes;
