import React, { useState } from 'react';
import './UploadFile.css'
import Papa from 'papaparse'
import Box from '../../element/Box/Box';

const UploadFile = (props) => {
    const [file, setFile] = useState(null)
    return (<Box >
        <label for='input'>
            <a style={{ display: 'flex', justifyContent: 'center' }}><div style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }}><img src="https://img.icons8.com/android/24/000000/upload.png" /></div> <p style={{ marginLeft: '4px' }}>Charger un fichier</p></a>
            <input onChange={(e) => {
                Papa.parse(e.target.files[0], {
                    download: true, header: true, complete: res => {
                        console.log(res)
                        const newFile = { name: e.target.files[0].name, content: res }
                        setFile(newFile)
                        props.file(newFile)
                    }
                })
            }} id='input' type='file' accept='.csv' />
        </label>
        {file && <p>{file.name}</p>}
    </Box>);
}

export default UploadFile;