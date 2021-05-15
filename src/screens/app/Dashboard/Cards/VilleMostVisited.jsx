import React from "react";

const VilleMostVisited = ({ data }) => {
  return (
    <div className="card col-md-12">
      <div className="card-header border-0">
        <h3 className="card-title">Les villes les plus visitées</h3>
      </div>
      <div className="card-body table-responsive p-0">
        <table className="table table-striped table-valign-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom de la ville</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.lieu_arrive}</td>
                    <td>{item.nombre}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VilleMostVisited;
