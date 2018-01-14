import moment from 'moment';

export default (expenses , {text, sortedBy, startDate,  endDate})=>{
    return expenses.filter((expense)=>{

        const startDateMatch = startDate? startDate.isSameOrBefore(moment(expense.createAt)) : true;
        const endDateMatch = endDate? endDate.isSameOrAfter(moment(expense.createAt)) : true;
        const textMatch = typeof text =='string' && expense.description.toLowerCase().includes(text.toLowerCase().trim())
            return startDateMatch && endDateMatch && textMatch ;
    }).sort((a,b)=>{
        if ( sortedBy ==='amount'){
          return (a.amount < b.amount ? 1 : -1);  
        }
        else 
        if (sortedBy === 'date')
          return (a.createAt < b.createAt ? 1 : -1);          
        
    });
}
