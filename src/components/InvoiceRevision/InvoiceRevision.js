import React from 'react';

import './InvoiceRevision.css';

const InvoiceRevision = () => {
  return(
    <div>
      <div className="invoice-revision-container">
        <span className="invoice-revision-title">Invoice - Revision</span>
      </div>
      <div className="invoice-revision-content">
        <div className="row custom-row">
          <div className="custom-col col-sm-3">
            <div className="row">
              <div className="col-sm-6">
                <div className="invoice-content-column">
                  Invoice #
                </div>
                <div className="invoice-content-column">
                  Date
                </div>
                <div className="invoice-content-column">
                  Due date
                </div>
                <div className="invoice-content-column">
                  Terms
                </div>
              </div>
              <div className="col-sm-6">
              <div className="invoice-content-column">
                  33-0092kk00
                </div>
                <div className="invoice-content-column">
                  7/31/18
                </div>
                <div className="invoice-content-column">
                  7/31/18
                </div>
                <div className="invoice-content-column last">
                  Net 0
                </div>
              </div>
            </div>
          </div>
          <div className="custom-col col-sm-6">
            <div className="bill-to">Bill to</div>
          </div>
          <div className="custom-col col-sm-3">
            <div className="balance-title">New Balance upon Re-booking</div>
            <div className="balance">$452.5</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceRevision;