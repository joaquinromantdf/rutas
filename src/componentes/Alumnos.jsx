import { Component } from "react";
import Boton from "./Boton";

export default class Alumnos extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="Contenedor">
                Componente Alumnos
                <Boton
                    click={() => this.props.cambiarMenu("Login")}
                > Ir a alumnos </Boton>
            </div>
        )
    }
}