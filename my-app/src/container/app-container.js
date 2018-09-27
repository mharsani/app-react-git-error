import React from 'react';
import Table from '../components/table/index'

const AppContainer = ({errorInfo}) => (
    <div className="ui container  grid">
        {console.log(errorInfo)}
        <div className="App-intro">
          <Table errorInfo={errorInfo}/>
        </div>
    </div>
)

export default AppContainer