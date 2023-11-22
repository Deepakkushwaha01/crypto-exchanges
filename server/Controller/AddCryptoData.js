import Cryptos from "../Model/CryptoModel.js";


export const GetData=async(req,res)=>{

const search=req.query.search;
const page = req.query.page || 1;
console.log(search)
let query={}
const ITEM_PER_PAGE = 10;

if(search.length>0){
    query["item.name"]={$regex:search,$options:"i"}
    }


    try {
        let skip = (page - 1) * ITEM_PER_PAGE;

        const count = await Cryptos.countDocuments(query);

const data=await Cryptos.find(query).limit(ITEM_PER_PAGE).skip(skip);

const pageCount = Math.ceil(count / ITEM_PER_PAGE);

res.send({
    success:true,
    Pagination: {
        count,
        pageCount,
      },
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