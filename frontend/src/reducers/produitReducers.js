const { PRODUCT_LIST_FAIL,
        PRODUCT_LIST_REQUEST,
         PRODUCT_LIST_SUCCESS, 
         PRODUCT_DETAILS_REQUEST,
         PRODUCT_DETAILS_SUCCESS,
         PRODUCT_DETAILS_FAIL} = require ('../constants/produitConstants');

  export const produitListReducer = (
      state = { loading:true, produits:[]},
       action
       )=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
         return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, produits: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};   
        default:
            return state;    
    }
};

export const produitDetailsReducer=(state= {produit:{}, loading:true}, action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return{loading:false, produit: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return{loading: false, error:action.payload}
        default:
            return state;          
    }
}