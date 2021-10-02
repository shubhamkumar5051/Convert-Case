import React from "react";
// import PropTypes from "prop-types";
export default function Footer(props) {
  return (
    <div>
      <>
        <footer className={`bg-${props.mode} text-center text-${props.mode}`}>
          {/* <!-- Grid container --> */}

          <div className="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section className="mb-1">
              {/* <!-- Facebook --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                style={{ backgroundColor: `#3b5998` }}
                href="https://www.facebook.com/shubham.kohli.948/"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                // style="backgroundColor: ;"
                style={{ backgroundColor: `#55acee` }}
                href="https://twitter.com/Aashiq_skm"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              {/* <!-- Instagram --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                style={{ backgroundColor: `#ac2bac` }}
                href="https://www.instagram.com/shubh_kohli_18/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* <!-- Linkedin --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                style={{ backgroundColor: ` #0082ca` }}
                href="https://www.linkedin.com/in/shubham-kumar-8965221a0/"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* <!-- Github --> */}
              <a
                className="btn btn-outline-light btn-floating m-1"
                style={{ backgroundColor: `#333333` }}
                href="https://github.com/shubhamkumar5051"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>
          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            // style={{ backgroundColor: `rgba(0, 0, 0, 0.7)` }}
          >
            <a
              className={`text-${props.mode === "light" ? "dark" : "light"}`}
              href="https://portfolio-shubhamkr5051.netlify.app/"
            >
              © 2021 Copyright- Shubham kumar
            </a>
          </div>
        </footer>
      </>
    </div>
  );
}
