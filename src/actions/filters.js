
//========================FILTERS Actions======================

export const setFilterText=(text='')=>({
    type:'SET_FILTER_TEXT',
    text
})

export const setFilterByDate=()=>({
    type:'SET_FILTER_DATE',
   
})

export const setFilterByAmount=()=>({
    type:'SET_FILTER_AMOUNT',
    
})

export const setFilterStartDate=(startDate='')=>({
    type:'SET_FILTER_START_DATE',
    startDate
})

export const setFilterEndDATE=(endDate='')=>({
    type:'SET_FILTER_END_DATE',
    endDate
})