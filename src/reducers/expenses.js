
//====================Expense reducers ==========================


const defaultExpensesState=[];
export default (state=defaultExpensesState,action)=>{
        switch(action.type) {
        case 'ADD_EXPENSE':

             return ([...state, action.expense]); 
        case 'REMOVE':
            return ( state.filter(({id})=>(id!=action.id) ));
        case 'EDIT':
        return state.map((expense)=>{
                if (action.id===expense.id){
                    return { ...expense,...action.updates}
                }else{
                    return expense;
                }
            });
        case 'SET_VALUE':
        return state.map((expense)=>{
            if (expense.id===action.id)
            {
                return {...expense,...action.createAtUpdate}
            }
            else{
                return expense;
            }
        })
        default: return  state;      
        };
};

