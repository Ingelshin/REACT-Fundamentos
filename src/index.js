import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import Mensaje from './components/Mensaje';

const container = document.getElementById("root")
const mensaje = document.getElementById("mensaje")

ReactDOM.render(<Card
  title="Techniques Fitness"
/>, container)

ReactDOM.render(<Mensaje
  size="30px"
  color="blue"
  contenido="Hola Ingelshin"
/>, mensaje)
