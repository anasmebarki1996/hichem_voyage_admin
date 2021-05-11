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
import Header from "components/layouts/Header";
import Sidebar from "components/layouts/Sidebar";

import ListClient from "./Client/ListClient/ListClient";
import AddClient from "./Client/AddClient/AddClient";
import UpdateClient from "./Client/UpdateClient";
import ListVoyage from "./Voyage/ListVoyage/ListVoyage";
import AddVoyage from "./Voyage/AddVoyage/AddVoyage";
import ListReservation from "./Reservation/ListReservation/ListReservation";
import UpdateVoyage from "./Voyage/UpdateVoyage/UpdateVoyage";
import ReservationDetails from "./Reservation/ReservationDetails/ReservationDetails";
import Newsletter from "./Newsletter/Newsletter";

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
            <UpdateVoyage />
          </Route>
          {/* ####################### */}
          <Route path="/reservations">
            <ListReservation />
          </Route>
          <Route path="/reservation-details">
            <ReservationDetails />
          </Route>
          {/* ####################### */}
          <Route path="/newsletter">
            <Newsletter />
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
