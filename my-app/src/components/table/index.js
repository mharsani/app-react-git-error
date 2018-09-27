import React from 'react'

const Table = ({errorInfo}) => (
  <table className="ui celled padded table">
  <thead>
    <tr><th className="single line"> Issue Number</th>
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
        {infos.labels.map((obj, idx) => (
          <td style={color ``} key={idx}>{obj.name}</td>
        ))}
        <td key={index}>{infos.state}</td>
      </tr>
    ))}
  </tbody>
</table>
)

export default Table