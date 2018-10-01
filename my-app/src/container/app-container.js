import React from 'react';
import Table from '../components/table/index'
import Search from '../components/search/index'
import { Header } from 'semantic-ui-react'

const AppContainer = (
    {errorInfo, pagination, query, selectVal, isDisabled,  dataSelect, handlePagination, nextPagination, previousPagination, handleFilter, handleSelect}) => (
    <div className="ui container">
        <div className="App-intro">
          <Header as='h3' block>
            <Search handleFilter={handleFilter} dataSelect={dataSelect} handleSelect={handleSelect} isDisabled={isDisabled}/>
          </Header>
          <Table errorInfo={query ? errorInfo.filter(x => x[selectVal].toLowerCase().includes(query.toLowerCase()) !== false) : errorInfo} 
          pagination={pagination} 
          handlePagination={(clicked) => handlePagination(clicked)} 
          nextPagination={nextPagination} 
          previousPagination={previousPagination}/>
        </div>
    </div>
)

export default AppContainer