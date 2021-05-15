import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";

const ReservationByMonths = ({ data }) => {
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
        label: "# reservation",
        data: data,
        borderWidth: 1,
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
        <h3 className="card-title">Nombre de reservation par mois</h3>
      </div>
      <Bar data={dataBar} options={options} />
    </div>
  );
};

export default ReservationByMonths;
