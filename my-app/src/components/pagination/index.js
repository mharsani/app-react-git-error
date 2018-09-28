'use strict'

import React from 'react'
import pagination from '../../utils/pagination/index'
import Page from './page'


const Pagination = ({ total, activePage, pageLink, onClick, nextPagination, previousPagination }) => (
  <tfoot>
    <tr>
      <th colSpan='6'>
        <div className='ui pagination right floated menu'>
          <a className='icon item' onClick={() => previousPagination(activePage - 1)}>
            <i aria-hidden='true' className='chevron left icon' />
          </a>
          {pagination({ total, activePage }).map((page, index) => (
            <div key={index} className={`item ${activePage === page ? 'active' : ''}`}>
              <Page page={page} pageLink={pageLink.replace('%page%', page)} onClick={onClick} />
            </div>
          ))}
          <a className='icon item' onClick={() => nextPagination(activePage + 1)}>
            <i aria-hidden='true' className='chevron right icon'/>
          </a>
        </div>
      </th>
    </tr>
  </tfoot>
)

Pagination.defaultProps = {
  pageLink: '',
  activePage: 1
}


export default Pagination