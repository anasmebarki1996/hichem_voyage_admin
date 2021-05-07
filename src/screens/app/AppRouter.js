import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import Home from "./Home/Home";
import Voyage from "./Voyage/Voyage";
import Header from "components/layouts/Header";
import Sidebar from "components/layouts/Sidebar";

import ListClient from "./Client/ListClient/ListClient";
import AddClient from "./Client/AddClient/AddClient";
import UpdateClient from "./Client/UpdateClient/UpdateClient";
import ListVoyage from "./Voyage/ListVoyage/ListVoyage";
import AddVoyage from "./Voyage/AddVoyage/AddVoyage";
import ListReservation from "./Reservation/ListReservation/ListReservation";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/clients">
            <ListClient />
          </Route>
          <Route path="/add-client">
            <AddClient />
          </Route>
          <Route path="/update-client">
            <UpdateClient />
          </Route>

          {/* ####################### */}
          <Route path="/voyages">
            <ListVoyage />
          </Route>
          <Route path="/add-voyage">
            <AddVoyage />
          </Route>
          <Route path="/update-voyage">
            <UpdateClient />
          </Route>
          {/* ####################### */}
          <Route path="/reservations">
            <ListReservation />
          </Route>

          <Route path="/clients">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
