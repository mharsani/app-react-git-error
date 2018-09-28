'use strict'

import React from 'react'
import pagination from '../../utils/pagination/index'
import Page from './page'


const Pagination = ({ total, activePage, pageLink, onClick }) => (
  <ul className='pagination'>
    {pagination({ total, activePage }).map((page, index) => (
      <li key={index} className={`pagination-item ${activePage === page ? 'active' : ''}`}>
        <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
      </li>
    ))}
  </ul>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}


export default Pagination