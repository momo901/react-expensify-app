import React from 'react';
import {connect} from 'react-redux';
import {setFilterText, setFilterByDate ,setFilterByAmount,setFilterStartDate,setFilterEndDATE} from '../actions/filters' 
import {DateRangePicker} from 'react-dates'

class ExpenseFilterList extends React.Component{
    constructor(props){
        super(props);
    this.state ={
            calondarFocus:null,
     }
     console.log(props)
    }
   
    
    onDatesChange=({startDate, endDate})=>{
        this.props.dispatch(setFilterStartDate(startDate));
        this.props.dispatch(setFilterEndDATE(endDate));
    }
   
    onFocusChange=(focusedInput)=>{
            this.setState(()=>({calondarFocus: focusedInput}))   
    }
    render(){
        return(
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e)=>{
                    this.props.dispatch(setFilterText(e.target.value)) }    
                }/>
                <select onChange={(e)=>{
                    if(e.target.value ==='amount'){return this.props.dispatch(setFilterByAmount())}
                    else{
                        return this.props.dispatch(setFilterByDate())
                    }
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
               </select>
               <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calondarFocus}
                onFocusChange={this.onFocusChange}
               />
            </div>
        
        );
        
    }


}
const mapStateToProps = (state)=>({ filters:state.filters}) ;

export default connect(mapStateToProps)(ExpenseFilterList);