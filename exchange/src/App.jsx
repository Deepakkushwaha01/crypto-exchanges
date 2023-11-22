import { useEffect, useState } from "react";
import Search from "./Components/Search/Search"
import { CallData, adddatacrpto, callCoinApi, callCoinIconApi } from "./Services/Api/ApiCall";
import { FormatNum } from "./Components/FormatNumber/FormatNumber";


function App() {
const[exchange,setexchange]=useState(null);
const[exchangeIcon,setexchangeIcon]=useState(null);
 const[setall,newsetall]=useState([]);

/* ----------------------------------------------------- Get Api From External ------------------------------------------------- */

const callexternalApi=async()=>{

  const res=await callCoinApi();  // call api from coinAPI.io
  if(res.data){
   setexchange(res.data)      //set values to state of exchange data 
  }
 
  const resicon=await callCoinIconApi()
  if(resicon.data){
   setexchangeIcon(resicon.data)             //set values to state  of exchange icon data
  }


/* ---------------------------- IT compare and set data with matching exchange_id ------------------------------------------- */

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

    newsetall(per=>[...per,{item:val,url:{}}])         // those who have not url are set here
  }
}

})
}
/* ------------------------------------------------ End Up of matching exchange_id ----------------------------------------- */
}
 
/* ----------------------------------------------------------------------------------------------------------------------------- */






/* ------------------------------------------------------- Send Data To DataBase ----------------------------------------------- */

const addBackendData=async()=>{
  
setall.length>0 && setall.forEach((val)=>{    // Sending one by one data to protect from server error , Request Entity Too Large
  adddatacrpto(val);
})
 
}

useEffect(()=>{
  addBackendData();
},[setall.length>0])

/* ------------------------------------------------------------------------------------------------------------------------------ */




/* ------------------------------------------------- Get Data From Database ----------------------------------------------------- */
const [values,newvalues]=useState(null);

const getDataToDatabase=async()=>{
const res=await CallData();
if(res.data.success==true){
  newvalues(res.data.data);
}

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


<div className="w-full flex justify-center">
  <table className="w-full h-full  text-center">
  <thead>
          <tr>
            <th>exchanges</th>
            <th>24th trade volume</th>
          </tr>
        </thead>
  
   <tbody >
          {
            values && values.map((val,index)=>{
              return  <tr key={index} className="border-t ">
              <td className=" w-[50vh]">{
         
                <div className="flex  justify-center w-full ">
                <div className="flex gap-[15px] py-[0.5rem]">
                <h2>{index+1}</h2>
                <div className="flex gap-[10px]"> 
                  <div className="grid place-items-center"><img src={val.url.url?val.url.url:''} alt="" className="w-[60%]" /></div>
<div>{ val.item &&  <h2 className="text-[#06285c] font-semibold">{val.item.name}</h2>}</div>
                </div>

                </div></div>
                }</td>

              <td className="w-[50vh] ">{val.item && <h1 className="text-[#06285c] font-bold">{FormatNum(val.item.volume_1day_usd)}</h1>}</td>
            </tr>
            })
          }
         
   
        </tbody>

  </table>
</div>

    </div>
    </>
  )
}

export default App
