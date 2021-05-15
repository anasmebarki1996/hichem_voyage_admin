import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Index = ({ name }) => {
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ height: "100vh" }}
    >
      <Link to="/" className="brand-link" style={{ textAlign: "center" }}>
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <img
            src="assets/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <div className="info">
            <Link
              to="/"
              className="d-block"
              style={{ textTransform: "capitalize" }}
            >
              {name}
            </Link>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link
                to="/"
                className={pathname === "/" ? "nav-link active" : "nav-link"}
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>

            <li className="nav-header">Clients</li>
            <li className="nav-item">
              <Link
                to="/add-client"
                className={
                  pathname === "/add-client" ? "nav-link active" : "nav-link "
                }
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Ajouter un client
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/clients"
                className={
                  pathname === "/clients" ? "nav-link active" : "nav-link "
                }
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  List des clients
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>
            <li className="nav-header">Voyages</li>
            <li className="nav-item">
              <Link
                to="/add-voyage"
                className={
                  pathname === "/add-voyage" ? "nav-link active" : "nav-link "
                }
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Ajouter un voyage
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/voyages"
                className={
                  pathname === "/voyages" ? "nav-link active" : "nav-link "
                }
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  List voyage
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>

            <li className="nav-header">Reservations</li>
            <li className="nav-item">
              <Link
                to="/reservations"
                className={
                  pathname === "/reservations" ? "nav-link active" : "nav-link "
                }
              >
                <i className="nav-icon fas fa-ellipsis-h"></i>
                <p>Reservations</p>
              </Link>
            </li>
            <li className="nav-header">Newsletters</li>
            <li className="nav-item">
              <Link
                to="/newsletters"
                className={
                  pathname === "/newsletters" ? "nav-link active" : "nav-link "
                }
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  List Newsletter
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Index;
