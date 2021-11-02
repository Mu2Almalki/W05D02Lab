const initialState={
    counter : 0,
}
const counter =(state=initialState,{type,payload})=>{
    switch(type){
        case 'INC_COUNTER' :
            return { counter: state.counter + payload };
            case 'DEC_COUNTER':
        return { counter: state.counter - payload
        };
      case 'RESET_COUNTER':
        return {
          counter: 0
        };
        default:  return state;
    }
    
}
export default counter;

export const incCounter = (payload) => {
    return {
      type: 'INC_COUNTER',
      payload: payload,
    };
  };
  
  export const decCounter = (payload) => {
    return {
      type: 'DEC_COUNTER',
      payload: payload,
    };
  };
  
  export const resetCounter = () => {
    return {
      type: 'RESET_COUNTER'
    };
  };