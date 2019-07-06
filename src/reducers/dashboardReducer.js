const initialState = {
    FirstData: [],

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "ACCOUNT_DATA_ALL":
        return {
          ...state,
          FirstData: action.value
        };
    
      default:
        return state;
    }
  }