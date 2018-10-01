import React from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'


const Search = ({handleFilter, dataSelect, handleSelect, isDisabled}) => (
 <Grid columns='equal'>
    <Grid.Column  width={4}>
        <Dropdown placeholder='Select your option' selection  options={dataSelect} onChange={handleSelect} />
    </Grid.Column>
    <Grid.Column>
        <div className='ui icon input'>
            <input type='text' placeholder='Search...' onChange={handleFilter} disabled={isDisabled}  />
            <i aria-hidden='true' className='search icon' />
        </div>
    </Grid.Column>
  </Grid>
)

export default Search