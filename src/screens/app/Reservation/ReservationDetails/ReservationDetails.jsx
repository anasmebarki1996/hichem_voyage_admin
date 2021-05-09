import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import React from "react";

const ReservationDetails = () => {
  return (
    <>
      <div className="content-wrapper">
        <HeaderBar title="Réservation détail" />
        <section class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="invoice p-3 mb-3">
                  <div class="row">
                    <div class="col-12">
                      <h4>
                        <i class="fas fa-globe"></i> AdminLTE, Inc.
                        <small class="float-right">Date: 2/10/2014</small>
                      </h4>
                    </div>
                  </div>
                  <div class="row invoice-info">
                    <div class="col-sm-4 invoice-col">
                      From
                      <address>
                        <strong>Admin, Inc.</strong>
                        <br />
                        795 Folsom Ave, Suite 600
                        <br />
                        San Francisco, CA 94107
                        <br />
                        Phone: (804) 123-5432
                        <br />
                        Email: info@almasaeedstudio.com
                      </address>
                    </div>
                    <div class="col-sm-4 invoice-col">
                      To
                      <address>
                        <strong>John Doe</strong>
                        <br />
                        795 Folsom Ave, Suite 600
                        <br />
                        San Francisco, CA 94107
                        <br />
                        Phone: (555) 539-1037
                        <br />
                        Email: john.doe@example.com
                      </address>
                    </div>
                    <div class="col-sm-4 invoice-col">
                      <b>Invoice #007612</b>
                      <br />
                      <br />
                      <b>Order ID:</b> 4F3S8J
                      <br />
                      <b>Payment Due:</b> 2/22/2014
                      <br />
                      <b>Account:</b> 968-34567
                    </div>
                  </div>

                  <div class="row no-print">
                    <div class="col-12">
                      <a
                        href="invoice-print.html"
                        rel="noopener"
                        target="_blank"
                        class="btn btn-default"
                      >
                        <i class="fas fa-print"></i> Print
                      </a>
                      <button type="button" class="btn btn-success float-right">
                        <i class="far fa-credit-card"></i> Submit Payment
                      </button>
                      <button type="button" class="btn btn-primary float-right">
                        <i class="fas fa-download"></i> Generate PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReservationDetails;
