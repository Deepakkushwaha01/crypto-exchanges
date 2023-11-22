import { IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import CloseIcon from '@mui/icons-material/Close';

const Search = ({searchs}) => {

  const {search,newsearch}=searchs;
  return (
    <div className='grid place-items-center'>
      
      <div className='flex w-[80vw] md:w-[40vw] h-[3rem]  items-center border p-[6px] pl-[16px] rounded-full '>

<div className=''>
<BusinessIcon/>

</div>
<input type="text" name="" id="" className=' w-full h-full px-4 outline-none' value={search} onChange={(e)=>newsearch(e.target.value)}/>


<div>
    <IconButton>
{search==""?<SearchIcon/>:<CloseIcon onClick={()=>newsearch("")}/> }
    </IconButton>
</div>

      </div>

    </div>
  )
}

export default Search
