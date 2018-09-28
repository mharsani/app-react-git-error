import React from 'react';
import Table from '../components/table/index'

const AppContainer = ({errorInfo, pagination, handlePagination, nextPagination, previousPagination}) => (
    <div className="ui container grid">
        {console.log(errorInfo)}
        <div className="App-intro">
          <Table errorInfo={errorInfo} pagination={pagination} handlePagination={(clicked) => handlePagination(clicked)} nextPagination={nextPagination} previousPagination={previousPagination}/>
        </div>
    </div>
)

export default AppContainer