import React, { Component } from 'react'
import AppContainer from './container/app-container'

class App extends Component {
  constructor() {
    super()
    const dataSelect = [{ key: 'issue', value:'issue', text: 'Issues Number' }, 
    { key: 'Title', value: 'title', text: 'Title' }, 
    { key: 'state', value:'state', text: 'State' } ]
    this.state = {
      dataSelect: dataSelect,
      errorInfo: [],
      query: "",
      selectVal: "title",
      isDisabled: true,
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

   handleFilter(e) {
      this.setState({ query: e.target.value })
  }

  handleSelect = (event, data) => {
    this.setState({
      selectVal: data.value,
      isDisabled: false
    });
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
                  issue: eachElement.number.toString(),
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
       handleFilter={(e) => this.handleFilter(e) }
       handleSelect={(e, data) => this.handleSelect(e, data)}
       previousPagination={(previous) => this.previousPagination(previous)}
       />
    );
  }
}

export default App;
