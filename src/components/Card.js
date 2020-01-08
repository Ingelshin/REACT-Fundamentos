import React from 'react'
import ExerciseImg from '../images/exercise.png'

function Author (props) {
  return <p>By Ingelshin</p>
}

class Card extends React.Component {
  render(){
    return (
      <div>
        <div>
          <img src={ExerciseImg} alt="Exercise"/>
        </div>
        <div>
          <h1>Technique Guides</h1>
          <p>Learn amazing street workout and calisthenics</p>
        </div>
        <div>
          <Author/>
        </div>
      </div>
    )
  }
}
 
export default Card