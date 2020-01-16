import React, {Component} from 'react'
import ExerciseImg from '../images/exercise.png'

class Text extends Component {
  render () {
    return (
      <div>
        <p>{this.props.description}</p>
        <p>{this.props.valores.map(this.props.multiply)}</p>
      </div>
    )
  }
}

Text.defaultProps = {
  description: "Descripción por defecto"
}

class Card extends Component {
  render(){
    return (
      <div>
        <div>
          <img src={ExerciseImg} alt="Exercise"/>
        </div>
        <div>
          <h1>Technique Guides</h1>
          <Text 
            description="Learn amazing street workout and calisthenics"
            valores={[1, 2, 3]}
            multiply={(number) => number*2}
          />
        </div>
      </div>
    )
  }
}

export default Card