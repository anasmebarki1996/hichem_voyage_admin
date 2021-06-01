import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const GenreReservationCercle = ({ data }) => {
  const dataBar = {
    labels: ["Femme", "Homme"],
    datasets: [
      {
        label: "# Reservation par genre",
        data: data,
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card col-md-12">
      <div className="card-header border-0">
        <h3 className="card-title">Reservation genre</h3>
      </div>
      <div className="doughnut-container">
        <Doughnut data={dataBar} />
      </div>
    </div>
  );
};

export default GenreReservationCercle;
