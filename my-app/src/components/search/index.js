import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Search = ({handleFilter, dataSelect, handleSelect, isDisabled}) => (
<div className="grid">
  <Dropdown placeholder='Select your option' selection  options={dataSelect} onChange={handleSelect} />
    <div className='ui big icon input'>
        <input type='text' placeholder='Search...' onChange={handleFilter} disabled={isDisabled}  />
        <i aria-hidden='true' className='search icon' />
    </div>
</div>
)

export default Search