import React from 'react'
import { useState } from 'react'

export default function Formulario(){
    const[form, setForm] = useState({});

    const validacion=e=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    

    const controlenvio=e=>{
        e.preventDefault();
        alert("Se han enviado los datos con éxito")
    }

    return(
        <>
        <center>
         <h3>FORMULARIO PARA SABER LOS LENGUAJES MAS USADOS</h3>
         <form onSubmit={controlenvio}>
             <label htmlFor="nombre">Nombre:
             </label>
                <p>
                    <input type="text" id="nombre" name="nombre" value={form.nombre}onChange={validacion}/>
             </p>
             <div>
                <label htmlFor="apellido">Apellido:
                </label>
                <p>
                    <input type="text" id="apellido" name="apellido" value= {form.apellido}onChange={validacion}/>
                </p>
             </div>
             <p>Elige tu lenguaje favorito</p>
               &nbsp;<input type="radio"  id= "java" name="programa" value="java"onChange={validacion}/>
                <label htmlFor="java">Java</label>
                &nbsp;&nbsp;&nbsp;<input type="radio" id="javascript" name="programa" value="javascript"onChange={validacion}/>
                <label htmlFor="javascript">Java Script</label>
                &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="html" name="programa" value="html"onChange={validacion}/>
                <label htmlFor="html">HTML</label>
                &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="css" name="programa" value="css"onChange={validacion}/>
                <label htmlFor="css">CSS</label>
                &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="phyton" name="programa" value="phyton"onChange={validacion}/>
                <label htmlFor="phyton">PHYTON</label>
                &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" id="php" name="programa" value="php"onChange={validacion}/>
                <label htmlFor="php">PHP</label>
                 <p>
                    <input type="submit"/>
                </p>
            </form>
        </center> 
       </>
       
    )

}