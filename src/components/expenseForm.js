import React from 'react';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
import moment, { calendarFormat } from 'moment'
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



const Time = moment();
console.log(Time.format('DD MMM YYYY'))
export default class ExpenseForm extends React.Component{
        constructor(props){
            super(props);
           this.state = {
            description: props.expense ? props.expense.description :'',
            note:props.expense ? props.expense.note :'',
            amount:props.expense? props.expense.amount :'',
            createAt:props.expense?moment(props.expense.createAt):moment(),
            callendarFocused:false,
            msgError:'',
            calendarDis:props.expense ? true : false
           }; 
           console.log(this.state.callendarFocused);
        }
        
        

        onDescriptionChange=(e)=>{
            const description=e.target.value;
            this.setState(()=>({description}))
        };

        onNoteChange=(e)=>{
            const note=e.target.value;
            this.setState(()=>({note}))
        };

        onAmountChange=(e)=>{
            const amount=e.target.value;
        if(amount.match(/^[0-9]\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
            }
        };

        onDateChange=(createAt)=>{
            if(createAt){
                this.setState(()=>({createAt}));
            }      
        }

        onFocusChange=({focused})=>{
            this.setState(()=>({callendarFocused:focused}));
            console.log('this is > ',focused)
        }

        onSubmit=(e)=>{
            e.preventDefault();
            
            
            if(!this.state.description || !this.state.amount){
                this.setState(()=>({msgError:'Please check the descrption and the amount input !!'}))
            }else{
                this.setState(()=>({msgError:''}))
                this.props.onSubmit({
                    description : this.state.description,
                    note : this.state.note,
                    amount: parseFloat(this.state.amount),
                    createAt:this.state.createAt.valueOf(),
                }) 
                this.state.description ='';
                this.state.note='';
                this.state.amount='';
                this.state.createAt= moment(); 
                             
            }
        }

     /*    onCreactAt=(e)=>{
            const description=e.target.value;
            this.setState(()=>({description:description}))
        }; */

    render(){
        return (
            <div>
                {this.state.msgError && <p>{this.state.msgError}</p>}
                <form onSubmit={this.onSubmit}>
                    <label>Description :</label> 
                        <input
                        type="text" autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange}
                        /> 
                        <br></br>
                    <label>Note :</label> 
                        <textarea 
                        type="text"
                        placeholder="write your expense note here (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        /> 
                        <br></br>
                    <label>Amout :</label>  
                        <input 
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        /> 
                    <SingleDatePicker
                        date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.callendarFocused}
                        onFocusChange={this.onFocusChange} 
                        isOutsideRange={()=>false}
                        numberOfMonths={1}
                        disabled={this.state.calendarDis}

                    />
                   
                    <button>Submit</button>
                </form>
            </div>
         );
    }
}
// const stateToProps=(state)=>{
//     return {expenses:state.expenses }
// }
// connect(stateToProps)(ExpenseForm);

