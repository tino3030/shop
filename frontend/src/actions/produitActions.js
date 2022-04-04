import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/produitConstants";
import Axios from 'axios';

export const listProduit = () =>async (dispatch)=>{
    dispatch({
        type:PRODUCT_LIST_REQUEST,
    });
    try{
       const { donnee} = await Axios.get('/api/produits');
       dispatch({type:PRODUCT_LIST_SUCCESS, payload:donnee})
    }catch(error){
      dispatch({type:PRODUCT_LIST_FAIL, payload: error.message})
    }
};

export const detailsProduit= (produitId)=> async(dispatch)=>{
  dispatch({type: PRODUCT_DETAILS_REQUEST, payload:produitId});
  try{
    const {donnee}= await Axios.get(`/api/produits/${produitId}`);
    dispatch({type:PRODUCT_DETAILS_SUCCESS, payload:donnee})
  }catch(error){
    dispatch({type:PRODUCT_DETAILS_FAIL, payload:error.response && 
    error.response.donnee.message? error.response.donnee.message
  :error.message,})

  }

}