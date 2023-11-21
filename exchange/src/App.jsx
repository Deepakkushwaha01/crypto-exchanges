import { useEffect, useState } from "react";
import Search from "./Components/Search/Search"
import { callCoinApi, callCoinIconApi } from "./Services/Api/ApiCall";


function App() {

 const[setall,newsetall]=useState([]);

const callexternalApi=async()=>{
 const res=await callCoinApi();  // call api from coinAPI.io
 if(res.data){
             console.log(res.data)               //action have to taken  
 }

 const resicon=await callCoinIconApi()
 if(resicon.data){
               console.log(resicon.data)             //action have to taken  
 }

}



useEffect(()=>{
  callexternalApi();
},[])


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



    </div>
    </>
  )
}

export default App
