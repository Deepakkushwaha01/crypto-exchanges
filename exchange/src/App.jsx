import { useEffect, useState } from "react";
import Search from "./Components/Search/Search"
import { adddatacrpto, callCoinApi, callCoinIconApi } from "./Services/Api/ApiCall";


function App() {
const[exchange,setexchange]=useState(null);
const[exchangeIcon,setexchangeIcon]=useState(null);
 const[setall,newsetall]=useState([]);

/* ----------------------------------------------------- Get Api From External ------------------------------------------------- */

const callexternalApi=async()=>{
if(exchange && exchangeIcon){

  exchange.forEach((val)=>{

const match=exchangeIcon.find((icon)=>{
  return val.exchange_id== icon.exchange_id
})

if(match){

  if(!setall.includes(setall.find(x=>x.item.exchange_id==val.exchange_id))){  // To Pretend Duplication
  newsetall(per=>[...per,{item:val,url:match}])
}

}else {
  if(!setall.includes(setall.find(x=>x.item.exchange_id==val.exchange_id))){
    newsetall(per=>[...per,{item:val,url:{}}])
  }
}

})
}
}

console.log(setall)

const getval=async()=>{
  const res=await callCoinApi();  // call api from coinAPI.io
  if(res.data){
   setexchange(res.data)      //set values to state  
  }
 
  const resicon=await callCoinIconApi()
  if(resicon.data){
   setexchangeIcon(resicon.data)             //set values to state  
  }
}


 useEffect(()=>{
  getval();
},[]) 
/* ----------------------------------------------------------------------------------------------------------------------------- */


/* ------------------------------------------------------- Send Data To DataBase ----------------------------------------------- */

const addBackendData=async()=>{
  
setall.length>0 && setall.forEach((val)=>{
  adddatacrpto(val);
})
 
}

useEffect(()=>{
  addBackendData();
},[setall.length>0])

/* ------------------------------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------- Get Data From Database ----------------------------------------------------- */

const getDataToDatabase=async()=>{

}

useEffect(()=>{
  getDataToDatabase();
},[])

/* ------------------------------------------------------------------------------------------------------------------------------ */
  return (
    <>
    <div>
      <div className="py-[4.5rem] flex flex-col gap-[3vh]">
      <h1 className="text-[#06285c] font-pop font-bold text-3xl tracking-wide text-center">Top crypto exchanges</h1>
      <h1 className="text-[#06285c] font-pop  text-xl tracking-wide text-center">Compare all 190 crypto exchanges,The list is ranked by trading volume</h1>
      </div>

<div>
 <Search/>
</div>

<div>
  <button onClick={()=>callexternalApi()} 
  className="bg-sky-500 px-[1.5rem] py-[0.5rem] rounded-xl text-white font-semibold text-lg tracking-wide">Update Data</button>
</div>

    </div>
    </>
  )
}

export default App
