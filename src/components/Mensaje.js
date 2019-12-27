import React, { Component } from 'react'

class Mensaje extends Component {
  render () {
    const {size, color, contenido} = this.props
    const styles = {
      color: color,
      fontSize: size 
    }
    return (
      <h3 style={styles}>{contenido}</h3>
    )
  }
}

export default Mensaje
