import React from 'react';
import ReactDOM from 'react-dom';

const user = {
  firstName: "Ingelshin",
  lastName: "Barraza",
  avatar: "https://image.flaticon.com/icons/png/512/147/147140.png"
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if (user) {
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}

const element = (
  <div>
    <h2>{getGreeting(user)}</h2>
    <img src={user.avatar} alt="avatar"/>
  </div>
)
const container = document.getElementById("root")

ReactDOM.render(element, container);
