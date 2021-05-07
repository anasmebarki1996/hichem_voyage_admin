import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" class="brand-link">
        <img
          src="assets/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
      </Link>

      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="assets/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <Link to="/" class="d-block">
              name admin
            </Link>
          </div>
        </div>

        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item menu-open">
              <Link
                to="/"
                className={pathname === "/" ? "nav-link active" : "nav-link "}
              >
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                  <i class="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>

            <li class="nav-header">Clients</li>
            <li class="nav-item">
              <Link
                to="/add-client"
                className={
                  pathname === "/add-client" ? "nav-link active" : "nav-link "
                }
              >
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Ajouter un client
                  <i class="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/clients"
                className={
                  pathname === "/clients" ? "nav-link active" : "nav-link "
                }
              >
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  List des clients
                  <i class="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>
            <li class="nav-header">Voyages</li>
            <li class="nav-item">
              <Link
                to="/voyages"
                className={
                  pathname === "/add-voyage" ? "nav-link active" : "nav-link "
                }
              >
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Ajouter un voyage
                  <i class="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/voyages"
                className={
                  pathname === "/voyages" ? "nav-link active" : "nav-link "
                }
              >
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  List voyage
                  <i class="right fas fa-angle-left"></i>
                </p>
              </Link>
            </li>

            <li class="nav-header">Reservations</li>
            <li class="nav-item">
              <Link
                to="/voyage"
                className={
                  pathname === "/clients" ? "nav-link active" : "nav-link "
                }
              >
                <i class="nav-icon fas fa-ellipsis-h"></i>
                <p>Reservations</p>
              </Link>
            </li>
            <li class="nav-header">Newsletter</li>
            <li class="nav-item">
              <Link
                to="/"
                className={
                  pathname === "/clients" ? "nav-link active" : "nav-link "
                }
              >
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Newsletter
                  <i class="right fas fa-angle-left"></i>
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
