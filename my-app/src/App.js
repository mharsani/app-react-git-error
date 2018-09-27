import React, { Component } from 'react';
import AppContainer from './container/app-container'

class App extends Component {
  constructor() {
    super()
    this.state = {
      errorInfo: [],
    }
  }
  componentDidMount () {
    const url = 'https://api.github.com/repos/facebook/react/issues'
    fetch(url)
        .then(res => res.json())
        .then(result => {
            this.setState({
              errorInfo: result.map((eachElement) => {
                return {
                  issue: eachElement.number,
                  title: eachElement.title ,
                  created: eachElement.created_at,
                  updated: eachElement.updated_at,
                  labels: eachElement.labels,
                  state: eachElement.state
                }
              })
            })
        }
      )
  }
  render() {
    return (
      <AppContainer  {...this.state}/>
    );
  }
}

export default App;
