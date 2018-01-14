import uuid from 'uuid';


///====================== dipatch actions ===================

export const addExpense=({description,note,amount,createAt}={})=>({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createAt
    }
});

export const removeExpense=({id})=>({
type:'REMOVE',
id
})

export const editExpense =(id, updates)=>({
type:'EDIT',
id,
updates
})

export const setExpense =(id,createAtUpdate)=>({
type:'SET_VALUE',
id,
createAtUpdate
})