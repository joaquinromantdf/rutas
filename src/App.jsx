import { Component } from "react";
import './App.css'
import { Redirect, Route } from "wouter";
import Login from './componentes/Login'
import Boton from "./componentes/Boton";
import Alumnos from "./componentes/Alumnos";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      menu: "login"
    }
  } 

  render(){
    return(
      <>
        {this.state.menu === "login" &&
          <Login 
            cambiarMenu={(opcion) => this.setState({menu:opcion})}
          />
        }
        {this.state.menu === "alumnos" &&
          <Alumnos
            cambiarMenu={(opcion) => this.setState({menu:opcion})}
          />

        }
      </>
    )
  }
}