import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
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
import Dashboard from "./Dashboard/Dashboard";
import { useSelector } from "react-redux";
import Error404 from "screens/error/Error404";

const AppRouter = () => {
  const name = useSelector((state) => state.auth.name);

  return (
    <Router>
      <Header />
      <Sidebar name={name} />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/clients">
          <ListClient />
        </Route>
        <Route path="/add-client">
          <AddClient />
        </Route>
        <Route path="/update-client">
          <UpdateClient />
        </Route>

        <Route path="/voyages">
          <ListVoyage />
        </Route>
        <Route path="/add-voyage">
          <AddVoyage />
        </Route>
        <Route path="/update-voyage">
          <UpdateVoyage />
        </Route>
        <Route path="/reservations">
          <ListReservation />
        </Route>
        <Route path="/reservation-details">
          <ReservationDetails />
        </Route>

        <Route path="/newsletters">
          <Newsletter />
        </Route>
        <Route path="/">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
