import React, { useEffect, useRef, useState } from 'react';
import './LabelPage.css'
import JsBarcode from 'jsbarcode'
import formatLabelsDatas from '../../functions/formatLabelsDatas/formatLabelsDatas';
const LabelPage = (props) => {
    const [datas, setDatas] = useState(null)
    const pageToPrint = useRef(null)


    useEffect(() => {
        if (props.print) {
            console.log("TRUE")
            props.callback(pageToPrint)
        }
        if (datas) {
            JsBarcode(".barcode").init();
        }

        if (props.file && datas === null) {
            setDatas(formatLabelsDatas(props.file))
        }
    }, [props.file, datas, props.print, props])


    const renderPage = (el, ln) => {
        console.log(ln)
        if (ln === 52) {
            console.log('print new')
        }
        return <div>
            <div key={ln} className='label_item'>
                <div className='label_row'>
                    <p>{el.REFERENCE}</p>
                    <p>{el.PV}</p>
                </div>
                <div className='label_row'>
                    <p>{el.FORMES}</p>
                    <p>{el.TAILLE}</p>
                </div>
                <div className='label_row'>
                    <p>{el.CODES_BARRES}</p>
                    <p>{el.FOURNISSEUR}</p>
                </div>
                <canvas jsbarcode-value={el.CODES_BARRES} className="barcode"></canvas>
            </div>
            
            {/* {ln === 52 && <div className="html2pdf__page-break"></div>} */}
        </div>
    }


    return (<div ref={pageToPrint} id='label_section'>

        {datas && datas.map((el, k) => {

            return renderPage(el, k)
        })}

    </div>);
}

export default LabelPage