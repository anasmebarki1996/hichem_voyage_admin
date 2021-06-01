import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";

const GenreReservationsPerMonth = ({ data }) => {
  const { nombre_femme, nombre_homme } = data;

  const dataBar = {
    labels: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    datasets: [
      {
        label: "# Femme",
        data: nombre_femme,
        borderWidth: 1,
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "# Homme",
        data: nombre_homme,
        borderWidth: 1,
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="card col-md-12">
      <div className="card-header border-0">
        <h3 className="card-title">Nombre de reservation par mois (genre)</h3>
      </div>
      <div className="bar-container">
        <Bar data={dataBar} options={options} />
      </div>
    </div>
  );
};

export default GenreReservationsPerMonth;
