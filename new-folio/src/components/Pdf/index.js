import React, { useState } from "react";
import {Page, Text, Image, Document, StyleSheet } from 'react-pdf/dist/esm/entry.webpack5'

function Pdf() {
    const [numPage, setNumPages] = useState(null)
    const [pageNUmber, SetPageNumber] = useState(1)

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPage)
        SetPageNumber(1)
    }

    return (
<Document file={'sample.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
    <Page>
  
    </Page>
</Document>
    );
  }
export default Pdf