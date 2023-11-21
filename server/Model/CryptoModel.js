import mongoose from "mongoose";

const cyptosch=mongoose.Schema({
    item:{
        type:Object,
        required:true
    },
    url:{
        type:Object,
        required:true
    }
});


const Cryptos=mongoose.model("Cryptos",cyptosch);

export default Cryptos;