import axios from "axios"


export const callCoinApi=async(apiKey)=>{     // Call Exchange Data
const res=await axios.get(`${import.meta.env.VITE_EXTERNAL_API}?apikey=${import.meta.env.VITE_API_KEY}`);
return res;
}

export const callCoinIconApi=async(apiKey)=>{    // Call Exchange Icon data
    const res=await axios.get(`${import.meta.env.VITE_EXTERNAL_API_ICON}?apikey=${import.meta.env.VITE_API_KEY}`);
    return res;
    }


export const adddatacrpto=async(data)=>{
    const res=await axios.post(`${import.meta.env.VITE_BACKEND}/addcrpto`,data);
    return res;
}    