import React from 'react';

import InvoiceRevision from '../InvoiceRevision/InvoiceRevision'; 
import Overview from '../Overview/Overview';
import MapDiagram from '../MapDiagram/MapDiagram';

import './Invoice.css';

const Invoice = props => {
    return(
      <div className="invoice-container">
        <span 
          className="invoice-title"
        >Invoice
        </span> 
        {props.invoiceNumber}
        <InvoiceRevision />
        <MapDiagram />
        <Overview overViewStatus={props.overViewStatus} />
      </div>
    )
  }

export default Invoice;