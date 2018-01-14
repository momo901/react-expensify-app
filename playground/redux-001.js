import {createStore} from 'redux';



const incrementCount=({name:incrementBy = 1}={})=>({
    type:'INCREMENT', 
    incrementBy  
});

const decrementCount=({name:decrementBy = 1}={})=>({
    type:'DECREMENT',
    decrementBy
});

const resetCount=({count})=>({
    type:'RESET',
    count
});

const setCount=({count})=>({
    type:'SET',
    count
})

const countReducer = (state = {count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
        return {
            count:state.count + action.incrementBy
        };

        case 'RESET':
        return {
            count:action.count
        };

        case 'DECREMENT':
        return {
            count:state.count - action.decrementBy  
        };

        case 'SET':
        return {
            count:action.count  
        };

        default: return state;
    };

};

const store = createStore( countReducer );



store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(
  incrementCount({name:100})
);

store.dispatch(
    incrementCount({name:25})
  );

store.dispatch(
    decrementCount({name:5})
  ); 

store.dispatch(
    resetCount({count:0})
);

store.dispatch(
    setCount({count:1000})
);



//store.dispatch( decrementCount({name:200} ));





