import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { detailsProduit } from '../actions/produitActions';
import LoadingBox from '../composant/LoadingBox';
import MessageBox from '../composant/MessageBox';
import Note from '../composant/Note';



export default function ProductScreen(props){
    // const { id } = useParams();
    // const produit = donnee.produits.find((p) => p.id === Number(id));
    const dispatch=useDispatch();
    const produitId=props.match.params.id;
    const produitDetails= useSelector((state)=>state.produitDetails);
    const {loading, error, produit}=produitDetails;

    useEffect(()=>{
        dispatch(detailsProduit(produitId));
    }, [dispatch, produitId]);
    if(!produit){
        return <div> Article non Trouvé</div>;
    }

    return(

        <div>
        {
          loading? (<LoadingBox></LoadingBox>)
          :
          error? (<MessageBox variant="danger">{error}</MessageBox>)
          :
          (
              
    <div className='row top'>
    <Link to='/'>Retouner en arrière</Link>
    <div className='col-2'>
      <img className="large" src={produit.image} alt={produit.nom}></img>
    </div>

    <div className='col-1'>
      <ul>
          <li>
              <h1>{produit.nom}</h1>
          </li>
          <li>
              <Note
                  note={produit.note}
                  numero={produit.numero}>
              </Note>
          </li>
          <li>
              Prix : {produit.prix} FCFA
          </li>
          <li>
              Description:
              <p>{produit.description}</p>
          </li>
      </ul>
    </div>

    <div className='col-1'>
        <div className='card card-body'>
            <ul>
                <li>
                    <div className='row'>
                        <div>Prix</div>
                        <div className='prix'>{produit.prix} FCFA</div>
                    </div>
                </li>
                <li>
                    <div className='row'>
                        <div>Status</div>
                        <div>{produit.countInStock>0? (<span className='success'> En Stock</span>)
                        :(<span className='error'>Article n'est plus en stock</span>)}</div>
                    </div>
                </li>
                <li>
                    <button className='primary block'> Add to cart</button>
                </li>
            </ul>
        
        </div>

    </div>
  
</div>

          )}
        </div>);

}