import logo from './logo.svg';
import './App.css';
import UploadFile from './feature/UploadFile/UploadFile'
import VerifyFile from './feature/VerifyFile/VerifyFile';
import { useState } from 'react';

function App() {
  const [file, setFile] = useState(null)
  return (
    <div>
      <header id='header'>
      <UploadFile file={(file) => setFile(file)} />
      <VerifyFile />
      {file && <VerifyFile />}
      </header>
    </div>
  );
}

export default App;
