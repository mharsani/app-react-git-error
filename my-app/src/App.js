import React, { Component } from 'react'
import AppContainer from './container/app-container'

class App extends Component {
  constructor() {
    super()
    this.state = {
      errorInfo: [],
      pagination: {
        total: 1,
        activePage: 1
      }
    }
    this.perPage = 8
  }

  getUrlApi (page = 1) {
    return `https://api.github.com/repos/facebook/react/issues?per_page=${this.perPage}&page=${page}`
  }

  nextPagination (next) {
    if(next <=  this.state.pagination.total ){
      this.getApiData(next)
    }
    return null
  }

  previousPagination (previous) {
    if(previous >= 1 ){
      this.getApiData(previous)
    }
    return null
   }
 

  getApiData (page) {
    fetch(this.getUrlApi(page))
        .then(res => {
          const linkHeader  = res.headers.get('Link')
          const totalPagesMatch = linkHeader.match(/page=(\d+)>; rel="last/)
          //totalPagesMatch put -1 just to fix return wrong last page from API
          this.setState({
            pagination: {
              total: +totalPagesMatch[1] - 1,
              activePage: page
            }
          })
          return res.json()
        })
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
  
  componentDidMount () {
    this.getApiData()
  }
  render() {
    return (
      <AppContainer 
       {...this.state}
       handlePagination={(page) => this.getApiData(page)}
       nextPagination={(next) => this.nextPagination(next)}
       previousPagination={(previous) => this.previousPagination(previous)}
       />
    );
  }
}

export default App;
