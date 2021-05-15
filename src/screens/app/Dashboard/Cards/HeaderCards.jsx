import React from "react";
import { Link } from "react-router-dom";

const HeaderCards = ({ data }) => {
  return (
    <div className="row">
      <div className="col-lg-3 col-6">
        <div className="small-box bg-info">
          <div className="inner">
            <h3>{data.nombreUser}</h3>
            <p>Nombre de clients</p>
          </div>
          <div className="icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <Link to="/clients" className="small-box-footer">
            Plus de détails
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-success">
          <div className="inner">
            <h3>{data.nombreVoyage}</h3>
            <p>Nombre de Voyages</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars"></i>
          </div>
          <Link to="/voyages" className="small-box-footer">
            Plus de détails
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-warning">
          <div className="inner">
            <h3>{data.nombreNewsletter}</h3>

            <p>Nombre de email news letter</p>
          </div>
          <div className="icon">
            <i className="fas fa-user-plus"></i>
          </div>
          <Link to="/newsletters" className="small-box-footer">
            Plus de détails
          </Link>
        </div>
      </div>
      <div className="col-lg-3 col-6">
        <div className="small-box bg-danger">
          <div className="inner">
            <h3>{data.nombreReservation}</h3>

            <p>Nombre de reservation</p>
          </div>
          <div className="icon">
            <i className="fas fa-chart-pie"></i>
          </div>
          <Link to="/reservations" className="small-box-footer">
            Plus de détails
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCards;
