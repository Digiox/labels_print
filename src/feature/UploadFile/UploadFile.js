import React, { useRef, useState } from 'react';
import './UploadFile.css'
import Papa from 'papaparse'
import Box from '../../element/Box/Box';
import FileName from '../../element/FileName/FileName';

const UploadFile = (props) => {
    const input = useRef(null)
    const [file, setFile] = useState(null)
    console.log('file upload ', file)
    return (<Box >
        <label for='input'>
            <a style={{ display: 'flex', justifyContent: 'center' }}><div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}><img src="https://img.icons8.com/android/24/000000/upload.png" /></div> <p style={{ marginLeft: '4px' }}>Charger un fichier</p></a>
            <input ref={input} onChange={(e) => {
                Papa.parse(e.target.files[0], {
                    download: true, header: true, complete: res => {
                        const newFile = { name: e.target.files[0].name, content: res }
                        setFile(newFile)
                        props.file(newFile)
                    }
                })
            }} id='input' type='file' accept='.csv' />
        </label>
        {file && <div id='file_item'><FileName filename={file.name} /><a id='delete_button' onClick={() => {
        
            input.current.value = null
            setFile(null)
            props.file(null)
        }}><img src="https://img.icons8.com/small/16/000000/delete-sign.png"/></a></div>}
    </Box>);
}

export default UploadFile;