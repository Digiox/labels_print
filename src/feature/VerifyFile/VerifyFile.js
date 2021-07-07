import React, { useState } from 'react';
import './VerifyFile.css'
import Box from '../../element/Box/Box'
import Modal from '../../element/Modal/Modal';

const VerifyFile = (props) => {
    const [modal, setModal] = useState(false)
    return (<Box>
        <Modal open={modal} headers={props.headers} filename={props.filename} />
        <a href='modal_button' onClick={() => setModal(!modal)}>
        <div style={{display:'flex'}}>
        <img alt='icon_search' id='verify-img' src="https://img.icons8.com/android/24/000000/search.png" />
        <p>Vérifier le fichier</p>
        </div>
        </a>
    </Box>);
}

export default VerifyFile;