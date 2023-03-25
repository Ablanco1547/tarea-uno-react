import React from "react";

export const ListaEstudiantes = ({listaEstudiantes}) =>{
    return(
        <React.Fragment>
            <h1>Lista hecha con funcion</h1>
            {listaEstudiantes.map((estudiante)=>(
                <ul>
                    <li>{estudiante.nombre} {estudiante.apellido}</li>
                    <li>{estudiante.edad}</li>
                </ul>
            ))}
        </React.Fragment>
    )
};