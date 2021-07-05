import React, { useEffect, useState } from 'react';
import './Modal.css'

const Modal = (props) => {
    const [headersStatus, setHeadersStatus] = useState(null)

    useEffect(() => {
        if (!headersStatus) {
            const headers = props.headers
            var obj = { QUANTITEE_RECUE: false, FORMES: false, CODES_BARRES: false, TAILLE: false, COULEUR: false, PV: false, REFERENCE: false, FOURNISSEUR: false }
            console.log(headers.indexOf('FOURNISSEUR'))
            if (headers.indexOf('QUANTITEE_RECUE') >= 0) {
                obj.QUANTITEE_RECUE = true
            } else { obj.QUANTITEE_RECUE = false }
            if (headers.indexOf('FORMES') >= 0) {
                obj.FORMES = true
            } else { obj.FORMES = false }
            if (headers.indexOf('CODES_BARRES') >= 0) {
                obj.CODES_BARRES = true
            } else { obj.CODES_BARRES = false }
            if (headers.indexOf('TAILLE') >= 0) {
                obj.TAILLE = true
            } else { obj.TAILLE = false }
            if (headers.indexOf('COULEUR') >= 0) {
                obj.COULEUR = true
            } else { obj.COULEUR = false }
            if (headers.indexOf('PV') >= 0) {
                obj.PV = true
            } else { obj.PV = false }
            if (headers.indexOf('REFERENCE') >= 0) {
                obj.REFERENCE = true
            } else {
                obj.REFERENCE = false
            }
            if (headers.indexOf('FOURNISSEUR') >= 0) {
                obj.FOURNISSEUR = true
            } else {
                obj.FOURNISSEUR = false
            }

            setHeadersStatus(obj)
        }
    },[headersStatus, props])
    return (<div id='modal' style={{ display: props.open ? 'initial' : 'none', visibility: props.open ? 'initial' : 'hidden' }}>
        <h3>{props.filename}</h3>
        {headersStatus && <ul id='list'>
            <li>Quantitée reçue: <span className='validate'>{headersStatus.QUANTITEE_RECUE ? 'OK' : <span style={{ color: 'red' }}>ERREUR</span>}</span></li>
            <li>Forme: <span className='validate'>{headersStatus.FORMES ? 'OK' : <span style={{ color: 'red' }}>ERREUR</span>}</span></li>
            <li>Code barre: <span className='validate'>{headersStatus.CODES_BARRES ? 'OK' : <span style={{ color: 'red' }}>ERREUR</span>}</span></li>
            <li>Taille: <span className='validate'>{headersStatus.TAILLE ? 'OK' : <span style={{ color: 'red' }}>ERREUR</span>}</span></li>
            <li>Couleur: <span className='validate'>{headersStatus.COULEUR ? 'OK' : <span style={{ color: 'red' }}>ERREUR</span>}</span></li>
            <li>Prix de vente: <span className='validate'>{headersStatus.PV ? 'OK' : <span style={{ color: 'red' }}>ERREUR</span>}</span></li>
            <li>Référence: <span className='validate'>{headersStatus.REFERENCE ? 'OK' : <span style={{ color: 'red' }}>ERREUR</span>}</span></li>
            <li>Fournisseur: <span className='validate'>{headersStatus.FOURNISSEUR ? 'OK' : <span style={{ color: 'red' }}>ERREUR</span>}</span></li>
        </ul>}
    </div>);
}

export default Modal;