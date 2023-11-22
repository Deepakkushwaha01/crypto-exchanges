import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({pagecount,pages}) => {
    const {page,setpage}=pages;
    const pagesToShow = 4;

const renderPageItems = () => {
    const items = [];
    const startPage = Math.max(1, Math.min(page, pagecount - pagesToShow + 1));  // To get min to max value 1-33

    for (let i = startPage; i < startPage + pagesToShow; i++) {    // it will run 1 to 36
      items.push(
        <Pagination.Item key={i} active={i === page} onClick={() => setpage(i)}>
          {i}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <div className=''>
         <Pagination>
         <Pagination.Prev  onClick={()=>{page>1? setpage(page-1):''}} />

{renderPageItems()}
         <Pagination.Next   onClick={()=>{pagecount>page? setpage(page+1):''}}  />
         </Pagination>
        
    </div>
  )
}

export default Paginations
