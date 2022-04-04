import express from 'express';
import donnee from './donnee.js';
 
const app = express();

app.get('/api/produits:id',(req, res)=>{
    const { id } = useParams();
    const produit = donnee.produits.find((p) => p.id === Number(id));

   if(produit){
       res.send(produit)
   }else{
       res.status(404).send({message:'Produit non trouvé'})
   }
});

app.get('/api/produits',(req, res)=>{
    res.send(donnee.produits);
});


 app.use('/', (req, res)=>{
     res.send('Server is ready');
 });
 
 const port = 5000;

app.listen(5000, ()=>{

    console.log(`Serve at http://localhost:${port}`);
});
