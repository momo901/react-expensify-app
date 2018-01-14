import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


const NotFoundPage=()=>
     (<div>
       <h3>Error, 504 </h3>
       <p>this page  does not exist </p>
       <Link to="/"> Go back </Link>
     </div>
    );
export default NotFoundPage;