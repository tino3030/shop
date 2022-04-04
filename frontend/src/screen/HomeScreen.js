import React, { useEffect}  from 'react';
import Produit from '../composant/Produit';
import LoadingBox from '../composant/LoadingBox';
import MessageBox from '../composant/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import  {listProduit} from '../actions/produitActions';



export default function HomeScreen(){
  const  dispatch= useDispatch();
  const produitList=useSelector(state=>state.produitList)
  const {loading, error, produits=[]}=produitList;

  useEffect(() => {
   dispatch(listProduit());
}, [dispatch]);


    return(
      <div>
        {
          loading? (<LoadingBox></LoadingBox>)
          :
          error? (<MessageBox variant="danger">{error}</MessageBox>)
          :
          (<div className="row center">
          { produits.map((produit )=> {
            return (<Produit key={produit.id} produit={produit}></Produit>
            );
          })}
        </div>)
        }    
        
    </div>
    );
}