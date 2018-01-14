
/* const app={
    title:'APP Title',
    subtitle:'App subtitle',
    options:[]
};


const submitForm=(e)=>{
    e.preventDefault();
   const option = e.target.elements.option.value;
   if (option){
    
   console.log("perfect");
   app.options.push(option);
   
   e.target.elements.option.value='';
    console.log(app.options);
    

   renderApp();
   }
}


   

const renderApp=()=>
{   
    
    const template =(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options'  : 'No option' }</p>
            <ul>
              {
                  
                  app.options.map((option)=> {
                      return <li key={option}>{option}</li>;
                      
                  }
                )
              }
            </ul>
            <form onSubmit={submitForm}>
              <input type="text" name="option"/>
              <button type="submit">Submit</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}


const appRoot=document.getElementById("app");
renderApp();
 */



 /*==================================== visibility ========================*/

class Visibilty extends React.Component{
    constructor(props){
        super(props);
        this.btnText=this.btnText.bind(this);
        this.state={
           // text:"Show Me",
            show:false
        };
    }
    btnText(){
        this.setState((prevState)=>{
           /*  if(prevState.show){
                text:prevState.text="Hide me";show:prevState.show=false;
                }else{
                 text:prevState.text="Show me";show:prevState.show=true;
                }
                return {text:prevState.text,show:prevState.show} */
                
          return {show:!prevState.show}
            
        });
    }
    render(){
        return(
            <div>
                <h2>TOGGLE VISIBILITY </h2>
                <button onClick={this.btnText}>{this.state.show ? "Hide me": "Show me"}</button>
                { this.state.show && <p>Hello there , i'm visible :) </p>}
           </div>
        );
    }

}
ReactDOM.render(<Visibilty />,document.getElementById("app"));

