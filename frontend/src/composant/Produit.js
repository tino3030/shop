import React from 'react';
import Note from './Note';

export default function Produit(props){
    const {produit}=props;
    return(
        <div key={produit.id} className="card">
        <a href={`/produits/${produit.id}`}>
        <img className="medium" src={produit.image} alt={produit.nom}/>
        </a>
        <div className="card-body">
          <a href={`/produits/${produit.id}`}>
            <h2>{produit.nom}</h2>
          </a>

          <Note note={produit.note} numero={produit.numero}></Note>
         
          <div className="prix">{produit.prix} FCFA</div>
        </div>
      </div>

    )
}