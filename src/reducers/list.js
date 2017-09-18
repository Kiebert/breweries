const list = (state = [], action) => {
    switch (action.type) {
      case 'SET_LIST':
        return action.payload
      case 'RESET_LIST':
        return [];
      default:
        return state
    }
  }
  
  export default list