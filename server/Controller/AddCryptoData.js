import Cryptos from "../Model/CryptoModel.js";


export const GetData=async(req,res)=>{
    try {
        

const data=await Cryptos.find({}).limit(10);

res.send({
    success:true,
    data
})

    } catch (error) {
        console.log(error)
    }
}




export const AddData=async(req,res)=>{

try {
    const{item,url}=req.body;

if(!item){
    return res.send({
        success:false,
        message:"Data Not Found"
    })
}

const exsitData=await Cryptos.findOne({"item.exchange_id":item.exchange_id});

if (exsitData) {
    
    await Cryptos.updateOne({ "item.exchange_id":item.exchange_id }, { $set: {item,url} },{new:true});
    return res.status(200).send({
        success:true,
        message:"Data is Updated"
    })
  } else {
    // If document doesn't exist, create a new one
    const newDocument = new Cryptos({item,url});
    await newDocument.save();
    return res.status(200).send({
        success:true,
        message:"Data is Created"
    })
  }

} catch (error) {
    console.error(`Error processing : ${error}`);
}
}