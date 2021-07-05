import logo from './logo.svg';
import './App.css';
import UploadFile from './feature/UploadFile/UploadFile'
import VerifyFile from './feature/VerifyFile/VerifyFile';
import { useState } from 'react';
import LabelPage from './feature/LabelPage/LabelPage';
import html2pdf from 'html2pdf.js'
function App() {
  const [file, setFile] = useState(null)
  const [printState, setPrintState] = useState(false)
  console.log('file app ', file)
  return (
    <div>
      <header id='header'>
      <UploadFile file={(file) => setFile(file)} />
      {file && <VerifyFile headers={file.content.meta.fields} filename={file.name} />}
      </header>
      {file && <div id='print_button'><button onClick={() => setPrintState(true)} type='button' >Imprimer</button></div>}
      {file &&<LabelPage print={printState} callback={(el) => {
        console.log('WORK')
        console.log(el)
        setPrintState(false)
        html2pdf(el.current, {
          margin: 0,
          padding: 0,
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
          html2canvas: { scale: 2, letterRendering: true },
          filename: "Etiquettes_a_imprimer",
          jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' },
        })
      }} file={file} />}
    </div>
  );
}

export default App;
