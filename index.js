import React from "react";
import  ReactDOM  from "react-dom/client";
import Hola,{Hola2} from './sumar';
import Producto from "./producto";
import  {Posts} from "./posts";
import {user} from  "./user";

const root =ReactDOM.createRoot(document.getElementById('root'));

//function Hola(){
  //const user={
    //nombre:'Melani',
    //apellido:'Molina'
  //}
  //return (<div>
   // <h1>{user.nombre}</h1>
    //<h3>{user.apellido}</h3>
  //</div>
  //)
//}

root.render(<div>
        
        {
            user.map((user,i)=> {
                return(
                    <div key={i} >
                        <h1>
                            {user.nombre}
                        </h1>
                        
                    </div>
                )
            
            }
            )
        }
        
    </div>
) 

