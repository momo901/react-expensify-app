import moment from 'moment';
//================= FILTER REDUCER ====================

export const defaultFiltersState={
    text:'',
    sortedBy:'date',
    //sortedByDate:undefined,
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
};
export default ( state=defaultFiltersState,action )=>{
    switch (action.type){
    case 'SET_FILTER_TEXT': 
        return {...state, text:action.text} 
    case 'SET_FILTER_DATE': 
        return {...state, sortedBy:'date'}
    case 'SET_FILTER_AMOUNT': 
        return {...state, sortedBy:'amount'}
    case 'SET_FILTER_START_DATE': 
        return {...state, startDate:action.startDate}
    case 'SET_FILTER_END_DATE': 
        return {...state, endDate:action.endDate}    
      default: return state; 
    }  
};