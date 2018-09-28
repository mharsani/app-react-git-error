import React from 'react'
import Pagination from '../pagination/index'

const Table = ({errorInfo, pagination, handlePagination, nextPagination, previousPagination}) => (
  <div>
    <table className="ui celled padded table">
    <thead>
      <tr>
      <th className="single line"> Issue Number</th>
      <th>Title</th>
      <th>Created At</th>
      <th>Updated At</th>
      <th>Labels</th>
      <th>State</th>
    </tr></thead>
    <tbody>
      {errorInfo.map((infos, index) => (
        <tr key={index}>
          <td>{infos.issue}</td>
          <td>{infos.title}</td>
          <td>{infos.created}</td>
          <td>{infos.updated}</td>
          <td>
          {infos.labels.length ?
          infos.labels.map((obj , index) => (
            <span key={index}>{obj.name}</span>
          )) : <span>NA</span>
          }
          </td>

          <td key={index}>{infos.state}</td>
        </tr>
      ))}
    </tbody>
    <Pagination total={pagination.total} activePage={pagination.activePage} onClick={handlePagination}  nextPagination={nextPagination} previousPagination={previousPagination}/>
  </table>
  
  
</div>
)

export default Table