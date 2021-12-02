/** @format */

import React, { useRef, useState, useEffect } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

const Home = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(null);
  const [state, setState] = useState({ name: "", department: "" });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  };

  useEffect(
    () => setHeight((ref.current && ref.current.scrollWidth) * 1.3),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    exportComponentAsPNG(ref, {
      fileName: "convo-card.png",
      html2CanvasOptions: {
        backgroundColor: "#fff",
      },
    });
  };

  return (
    <div className="d-flex flex-wrap flex-columnjustify-content-centeralign-items-center vh100 p-3 p-md-0 py-4 py-md-0 home">
      <div className="col-12 col-md-4 p-4 p-xxl-5 section-1 border">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            value={state.name}
            placeholder="Full Name"
            onChange={(e) => handleChange(e)}
            className="form-control"
          />
          <input
            type="text"
            id="department"
            value={state.department}
            placeholder="Department"
            onChange={(e) => handleChange(e)}
            className="form-control mt-3"
          />
          <input
            type="file"
            onChange={(e) => handleFile(e.target.files[0])}
            className="form-control mt-3"
          />
          <button className="btn btn-success btn__smbtn-sm w-100 text-white mt-4 d-center no-shadow">
            <span className="small fw-bold">Download image</span>
          </button>
        </form>
      </div>
      <div className="col-12 col-md-8 section-2 d-center py-5 py-md-0">
        <div
          className="text-white fw-bold d-flex flex-column display-4 border p4 col-12 col-md-10 col-lg-10 col-xl-9 col-xxl-6"
          ref={ref}
          style={{
            minHeight: `${height}px`,
            maxHeight: `${height}px`,
            backgroundColor: `rgba(34, 117, 94, 0.45)`,
            backgroundImage: `url(${
              image ||
              "https://res.cloudinary.com/codeleaf/image/upload/v1638390252/IMG_3228.jpg"
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="mt-auto p-3"
            style={{
              background: `linear-gradient(rgba(34,117,94,0.45), rgba(34,117,94,0.45))`,
            }}
          >
            <div className="d-center">
              <img
                src="https://res.cloudinary.com/codeleaf/image/upload/v1638394059/KWASU_Logo_New.png"
                style={{ height: "25px" }}
                className="kwasu-logo"
                alt=""
              />
              <div className="ms-2">
                <p
                  className="mb-0 raleway fw-bold"
                  style={{ fontSize: ".75rem" }}
                >
                  KWARA STATE <br />
                  UNIVERSITY
                </p>
              </div>
            </div>
            <p
              className="text-center my-1 raleway"
              style={{ fontSize: "1.125rem" }}
            >
              {state.name || "Adio Olanrewaju Mojeed"}
            </p>
            <p
              className="text-center mb-1 brush"
              style={{ fontSize: "1.325rem" }}
            >
              {state.department || "Electrical and Computer Engineering"}
            </p>
            <p
              className="text-center mb-0 ubuntu"
              style={{ fontSize: ".875rem", textDecoration: "underline" }}
            >
              CLASS OF 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
