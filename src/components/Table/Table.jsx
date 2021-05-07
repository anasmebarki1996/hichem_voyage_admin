import { useEffect, useState } from "react";
import React from "react";
import {
  AiFillCaretUp,
  AiFillCaretDown,
  AiOutlineDelete,
  AiOutlineInfoCircle,
  AiOutlineForm,
} from "react-icons/ai";
import Pagination from "components/Pagination/Pagination";
import Text from "components/UI/Text/Text";

const Table = ({
  attributes,
  data,
  currentPage,
  setCurrentPage,
  actions,
  numberOfPage,
  setOrder,
  order,
}) => {
  return (
    <div className="card-body table-responsive p-0">
      <table className="table table-striped table-valign-middle">
        <thead>
          <tr>
            <th>#</th>
            {attributes.map((attribute) => {
              return (
                <th>
                  <div className="row">
                    <div> {attribute.title}</div>
                    {attribute.order && (
                      <div>
                        <AiFillCaretUp
                          size="10"
                          style={
                            attribute.name + " DESC" === order
                              ? { color: "red" }
                              : { color: "black", cursor: "pointer" }
                          }
                          onClick={() => {
                            setOrder(attribute.name + " DESC");
                          }}
                        />

                        <AiFillCaretDown
                          size="10"
                          style={
                            attribute.name + " ASC" === order
                              ? { color: "red" }
                              : { color: "black", cursor: "pointer" }
                          }
                          onClick={() => {
                            setOrder(attribute.name + " ASC");
                          }}
                        />
                      </div>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
          <tr></tr>
        </thead>
        {data && data.length > 0 && (
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1 + 5 * currentPage}</td>
                  {attributes.map((attribute) => {
                    return (
                      <td>
                        <Text
                          text={item[attribute.name]}
                          type={attribute.type}
                        />
                      </td>
                    );
                  })}
                  {(actions.delete || actions.update || actions.details) && (
                    <td>
                      {actions.delete && (
                        <AiOutlineDelete
                          style={{
                            cursor: "pointer",
                            marginRight: 5,
                            marginLeft: 5,
                            color: "red",
                          }}
                          onClick={() => actions.delete(item.id)}
                        />
                      )}
                      {actions.update && (
                        <AiOutlineForm
                          style={{
                            cursor: "pointer",
                            marginRight: 5,
                            marginLeft: 5,
                            color: "green",
                          }}
                          onClick={() => actions.update(item.id)}
                        />
                      )}
                      {actions.details && (
                        <AiOutlineInfoCircle
                          style={{
                            cursor: "pointer",
                            marginRight: 5,
                            marginLeft: 5,
                            color: "blue",
                          }}
                          onClick={() => actions.details(item.id)}
                        />
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>

      {data && data.length === 0 && (
        <div className="justify-content-center w-100">
          <h1 className="text-center">aucun item disponible</h1>
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfPage={numberOfPage}
      />
    </div>
  );
};

export default Table;
