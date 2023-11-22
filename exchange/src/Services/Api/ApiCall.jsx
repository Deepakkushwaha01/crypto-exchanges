import axios from "axios"


export const callCoinApi=async()=>{            // Call Exchange Data
    try {
        const res=await axios.get(`${import.meta.env.VITE_EXTERNAL_API}?apikey=${import.meta.env.VITE_API_KEY}`);
return res;
    } catch (error) {
        console.log(error)
    }    

}

export const callCoinIconApi=async(apiKey)=>{    // Call Exchange Icon data
    try {
        const res=await axios.get(`${import.meta.env.VITE_EXTERNAL_API_ICON}?apikey=${import.meta.env.VITE_API_KEY}`);
        return res; 
    } catch (error) {
        console.log(error)
    }
    
    }


export const adddatacrpto=async(data)=>{     // Add Data to Database
    try {
        
        const res=await axios.post(`${import.meta.env.VITE_BACKEND}/addcrpto`,data);
        return res;

    } catch (error) {
        console.log(error)
    }
   
}   


export const CallData=async(search)=>{      //Call Data from Database
    try {
        const res=await axios.get(`${import.meta.env.VITE_BACKEND}/getData?search=${search}`);
        return res;
    } catch (error) {
        console.log(error)
    }
}