import { IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';

const Search = () => {
  return (
    <div className='grid place-items-center'>
      
      <div className='flex w-[80vw] md:w-[40vw] h-[3rem]  items-center border p-[6px] pl-[16px] rounded-full '>

<div className=''>
<BusinessIcon/>

</div>
<input type="text" name="" id="" className=' w-full h-full px-4 outline-none' />


<div>
    <IconButton>
<SearchIcon/>
    </IconButton>
</div>

      </div>

    </div>
  )
}

export default Search
