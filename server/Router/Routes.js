import express from 'express'
import { AddData } from '../Controller/AddCryptoData.js';
import Cryptos from '../Model/CryptoModel.js';

const router=express.Router();

router.post('/addcrpto',AddData)
router.delete('/deleteAll', async (req, res) => {
    try {
      const result = await Cryptos.deleteMany({});
      res.json({ message: `${result.deletedCount} document(s) deleted` });
    } catch (error) {
      res.status(500).json({ error: `Internal Server Error ${error}` });
    }
  });
  
  

export default router