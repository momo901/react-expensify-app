/* 
let text = 'Show Text';
let show = false;
const btnText=()=>{
    if (show)
    {
   text ='Show Text';
   show=false;
    }
    else{
        text ='Hide Text';
        show=true; 

    }
    

    console.log("nice work !")
    render();
}



const render=()=> {
 const template = (
        <div>
            <h2>TOGGLE VISIBILITY </h2>
            <button onClick={btnText}>{text}</button>
            { show && <p>Hello there , i'm visible :) </p>}
        </div>
    )
    ReactDOM.render(template,appRoot);
}
const appRoot=document.getElementById("app");
render();  */
//=====================================================================================





// class Counter extends React.Component{
//     constructor(props){
//        super(props) ;
//        this.handlerAddOne=this.handlerAddOne.bind(this);
//        this.handlerMinusOne=this.handlerMinusOne.bind(this);
//        this.handlerReset=this.handlerReset.bind(this);
//        this.state={
//            count:0
//        }
//     }
    
//     componentDidMount(){
//         const data=localStorage.getItem('count');
//         const dataResult=parseInt(data)
//         if(dataResult){
//             this.setState(()=>({
//             count:dataResult
//             }));
//             console.log(dataResult);
//       }
//     }

//     componentDidUpdate(prevProps,prevState){
//        //const jsn=JSON.stringify(parseInt(this.state.count,10));
//        //const jsn=JSON.stringify(this.state.count);

//           localStorage.setItem('count',this.state.count);
//         console.log('component get updated');
//     }

//     handlerAddOne(){
//         this.setState((prevState)=>{
//             return {
//                 count:prevState.count + 1   
//             } 
//         });
//     }

//     handlerMinusOne(){
//         this.setState((prevState)=>{
//             return {
//                 count:prevState.count - 1   
//             } 
//         });
//     }

//     handlerReset(){
//         this.setState(()=>{
//             return {
//                 count:0   
//             } 
//         });
//     }
//     render(){
//         return (
//             <div>
//                 <h2>My Count:{this.state.count}</h2>
//                 <button onClick={this.handlerAddOne}>+1</button>
//                 <button onClick={this.handlerMinusOne}>-1</button>
//                 <button onClick={this.handlerReset}>reset</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Counter />,document.getElementById('app'));





















//=====================================================================================

const Header=(props)=>{
    return (
        <div>
        <h1>{props.title}</h1>
        <p>put your life in a computer hands</p>
        </div>
    );
}


const Action=(props)=>{

       return (
            <div>
                <button 
                onClick={props.pickAction}
                disabled={!props.hasOption}
                >what should i do ?</button>
            </div>
        );
    }


const Option=(props)=>{

           return (
                <div>
                     <p>{props.textOption}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
                     <button onClick={(e)=>{props.HandlerRemoveOption(props.textOption)}}>Delete</button>
                     </p>
                </div>
               );
        
    }
     


const Options=(props)=>{
  return (
          
          <div>
          <button onClick={props.removeHandler}>Remove all</button>

          {
              props.optionlist.map((option)=>
               <Option
                HandlerRemoveOption={props.HandlerRemoveOption}
                key={option} textOption={option} />
                 //console.log(this.props.optionlist)
            )  
            
          }
          </div>
        );
}


class ADDOption extends React.Component{
   constructor(props){
        super(props);
        this.addFormSubmit=this.addFormSubmit.bind(this);
        this.state={
            error:undefined
        }
   }
    addFormSubmit(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error = this.props.addFormSubmit(option);
        if(!error){
            e.target.elements.option.value='';
        }
        this.setState(()=>{
            return {error}
        })
    }     
    
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addFormSubmit}>
                <input type="text" name="option"/>
                <button>submit</button>
                </form>
            </div>
        );
    }
}



  /*=================== main component ====================== */

class IndecesionApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            optionlist:[],
            title:"Indecesion APP !!"
            
        }
        

        this.removeHandler=this.removeHandler.bind(this);
        this.addFormSubmit=this.addFormSubmit.bind(this);
        this.pickAction=this.pickAction.bind(this);
        this.HandlerRemoveOption=this.HandlerRemoveOption.bind(this);
    }

    componentDidMount(){
        try{
            const data=localStorage.getItem('option');
            const dataArray=JSON.parse(data);
            if(dataArray){
                this.setState(()=>({
                         optionlist:dataArray
                 }))
                

            }
            
        }catch(e){
             
         }
    }
    componentDidUpdate(prevProps, prevState){
            if(prevState.optionlist.length!=this.state.optionlist){
            const jsn=JSON.stringify(this.state.optionlist);
            localStorage.setItem('option',jsn);
        
        }
    }

    componentWillUnmount(){

    }

    removeHandler(){
        this.setState(()=>{
           return{optionlist:[]} 
        })
    }
    HandlerRemoveOption(optiontodelet){
        this.setState((prevState)=>{

                return ({
                    optionlist:prevState.optionlist.filter((option)=> option!=optiontodelet)
                });


        })

    }

    addFormSubmit(option){
        if(!option){
            return "enter a valide option, please"
        } else if(this.state.optionlist.indexOf(option)!=-1)
        {
            return "This Options already exist, please type an other one"
        }
        
            this.setState((prevState)=>{
                return {
                    optionlist:prevState.optionlist.concat([option]),
                 
                }
            })
            //e.target.elements.option.value='';
        
    }
    
    pickAction(){
        const randomNum=Math.floor(Math.random() * this.state.optionlist.length);
        const option=this.state.optionlist[randomNum];
        alert(option);
    }
    
    render(){


        return(
            <div>
                <Header title={this.state.title}/>
                <Action hasOption={this.state.optionlist.length>0} pickAction={this.pickAction} />
                <Options 
                    optionlist={this.state.optionlist}
                    removeHandler={this.removeHandler}
                    HandlerRemoveOption={this.HandlerRemoveOption}
                />
                <ADDOption addFormSubmit={this.addFormSubmit}/>
            </div>
        );
    }
}
ReactDOM.render(<IndecesionApp/>,document.getElementById('app')); 

