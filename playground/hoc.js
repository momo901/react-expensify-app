import React from 'react'
import ReactDOM from 'react-dom'



const RegularPanel=()=>{
return (
        <div>
            <h2>User dashboard</h2>
            <p>this is dashboard for regular modification </p>
        </div>  
)};

const AdminPanel=()=>{
    return (
        <div>
            <h2>Admin dashboard</h2>
            <p>this is dashboard for Admin modification </p>    
        </div>
    )
}

const Panel=(Element1,Element2)=>{
    return (props)=>(
        <div>
            {props.isAdmin ? <Element2 /> :<Element1/>}
        </div>
    )
}

const Admin = Panel(RegularPanel, AdminPanel);

ReactDOM.render(<Admin isAdmin={false}/> , document.getElementById('app'));
    
