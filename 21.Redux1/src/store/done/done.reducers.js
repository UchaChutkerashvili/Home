const initialState = {
    doneList: [],
  };
  
  export const doneReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_DONE':
        return { doneList: [...state.doneList, action.payload] };
      default:
        return state;
    }
  };