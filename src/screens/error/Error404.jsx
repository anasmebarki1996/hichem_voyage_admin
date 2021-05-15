import React from "react";

const Error404 = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div class="content-wrapper pt-5">
                  <section class="content">
                    <div class="error-page">
                      <h2 class="headline text-warning">404</h2>
                      <div class="error-content">
                        <h3>
                          <i class="fas fa-exclamation-triangle text-warning"></i>{" "}
                          Oops! Page not found.
                        </h3>
                        <p>
                          We could not find the page you were looking for.
                          Meanwhile, you may{" "}
                          <a href="{% link index.md %}">return to index</a>.
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
