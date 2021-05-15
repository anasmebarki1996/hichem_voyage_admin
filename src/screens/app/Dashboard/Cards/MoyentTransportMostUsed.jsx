import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const MoyentTransportMostUsed = ({ data }) => {
  const dataBar = {
    labels: ["Avion", "Bus", "Taxi", "Train"],
    datasets: [
      {
        label: "# moyen de transport",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card col-md-12">
      <div className="card-header border-0">
        <h3 className="card-title">Moyen de transport</h3>
      </div>
      <div
        style={{
          width: "400px",
          margin: "auto",
        }}
      >
        <Doughnut data={dataBar} />
      </div>
    </div>
  );
};

export default MoyentTransportMostUsed;
