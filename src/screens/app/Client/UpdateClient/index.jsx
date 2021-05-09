import HeaderBar from "components/layouts/HeaderBar/HeaderBar";
import React from "react";
import UpdateClientInformations from "./UpdateClientInformations/UpdateClientInformations";
import UpdateClientPassword from "./UpdateClientPassword/UpdateClientPassword";

const Index = () => {
  return (
    <>
      <div className="content-wrapper">
        <HeaderBar title="Update Client" />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <UpdateClientInformations />
                <UpdateClientPassword />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
