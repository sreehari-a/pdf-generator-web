import React from 'react';

type Props = {
    pdfUrl: string
}
const PdfViewer = ({ pdfUrl }: Props) => {
    return (
           <iframe
            title="PDF Viewer"
            //@ts-ignore
            view="FitV"
            src={`${pdfUrl}`}
            // type="application/pdf"
            width="100%"
            height="600"
        />
    );
};

export default PdfViewer;