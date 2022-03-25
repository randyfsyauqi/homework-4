import React from 'react'
import data from '../../components/component.js'

class Home extends React.Component{
  render(){
    return (
      <div>
        <img src={data.images} className="Album-img" alt="img"/>
        <h1>{data.name}</h1>
        <h2>{data.artist}</h2>
        <button>Select</button>
      </div>
    )
  }
} 

export default Home;

