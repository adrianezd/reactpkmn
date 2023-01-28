import React from 'react'
import "../components.styles.css"

export default function Modal ({open, onClose, pokemon} = {pokemon: "blastoise"}) {

    if(!open) return null 

  return (
    <div className="overlay">
        <div className="modalContainer">
            <img src={require('../../assets/mb.png')} alt="pokemon" />
                <div className="modalRight">
                    <p onClick={onClose} className="closeBtn">X</p>
                    <div className="content">
                        <h3>¿QUIERES CUIDAR A ESTE POKEMON?</h3>
                        <p>¡Puedes adoptarlo!</p>
                        <button className="adoptar">Adoptar {pokemon} ??</button>
                    </div>
                    <div className="btnContainer">
                        <button className="btnPrimary">
                            <span className='bold'>Yes</span>
                        </button>
                        <button className="btnOutline">
                            <span className='bold'>No</span>
                        </button>
                    </div>
                </div>
        </div>
    </div>
  )
}
