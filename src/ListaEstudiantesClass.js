import React, { Component } from 'react'

export default class ListaEstudiantesClass extends Component {
    render() {
        const { listaEstudiantes} = this.props;
        return (
            <React.Fragment>
                <h1>Lista hecha con clase</h1>
                {listaEstudiantes.map((estudiante)=>(
                    <ul>
                        <li>{estudiante.nombre} {estudiante.apellido}</li>
                        <li>{estudiante.edad}</li>
                    </ul>
                ))}
            </React.Fragment>
        )
    }
}
