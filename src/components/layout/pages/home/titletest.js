import React, { Component } from 'react'

class TitleTest extends Component{
  constructor(props){
    super(props)

    this.state = {
      text: "Cliccami"
    }
  }

  handleClick = () => {
    this.setState({text : "ahia, mi hai cliccato"})
  }
      render(){
        const {handleClick} = this
        const {text} = this.state

        return <button onClick={handleClick}>{text}</button> 
      }
 
}

export default TitleTest