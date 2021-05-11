import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import Text from "components/UI/Text/Text";
import React from "react";

import useForm from "./useForm";
const ReservationDetails = () => {
  const { data } = useForm();
  return (
    <>
      <div className="content-wrapper">
        <HeaderBar title="Réservation détail" />
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="invoice p-3 mb-3">
                  <div className="row">
                    <div className="col-12">
                      <h4>
                        <i className="fas fa-globe"></i> Agence, Inc.
                        <small className="float-right">
                          Date:
                          <Text text={data.date_reservation} type="date" />
                        </small>
                      </h4>
                    </div>
                  </div>
                  <div className="row invoice-info">
                    <div className="col-sm-4 invoice-col">
                      From
                      <address>
                        <strong>
                          <Text text={data.lieu_depart} type="text" />
                        </strong>
                        <br />
                        <Text text={data.agence_nom} type="text" />
                        <br />
                        <Text text={data.agence_adresse} type="text" />
                        <br />
                        Date départ :{" "}
                        <Text text={data.date_depart} type="date" />
                        <br />
                        Heure départ :{" "}
                        <Text text={data.heure_depart} type="heure" />
                      </address>
                    </div>
                    <div className="col-sm-4 invoice-col">
                      To
                      <address>
                        <strong>
                          <Text text={data.lieu_arrive} type="text" />
                        </strong>
                        <br />
                        <Text
                          text={data.user_name + " " + data.user_prenom}
                          type="text"
                        />
                        <br />
                        Téléphone: <Text text={data.user_num_tel} type="text" />
                        <br />
                        Email: <Text text={data.user_email} type="text" />
                      </address>
                    </div>
                    <div className="col-sm-4 invoice-col">
                      <b>Invoice</b>
                      <br />
                      <br />
                      <b>Order ID:</b>{" "}
                      <Text text={data.nombre_place} type="text" /> (places)
                      <br />
                      <b>Prix unitaire:</b>{" "}
                      <Text text={data.prix} type="text" />
                      <br />
                      <b>Prix total:</b>{" "}
                      <Text text={data.prix * data.nombre_place} type="text" />
                    </div>
                  </div>

                  {/* <div className="row no-print">
                    <div className="col-12">
                      <a
                        href="invoice-print.html"
                        rel="noopener"
                        target="_blank"
                        className="btn btn-default"
                      >
                        <i className="fas fa-print"></i> Print
                      </a>
                      <button type="button" className="btn btn-success float-right">
                        <i className="far fa-credit-card"></i> Submit Payment
                      </button>
                      <button type="button" className="btn btn-primary float-right">
                        <i className="fas fa-download"></i> Generate PDF
                      </button>
                    </div>
                  </div> */}
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
