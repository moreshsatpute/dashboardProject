import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserCheck, faLuggageCart, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Panels = () => {
  const panelData = [
    {
      icon: faUsers,
      title: "Visitors",
      value: "1,294",
      bgColor: "primary",
    },
    {
      icon: faUserCheck,
      title: "Subscribers",
      value: "1,303",
      bgColor: "info",
    },
    {
      icon: faLuggageCart,
      title: "Sales",
      value: "$ 1,345",
      bgColor: "success",
    },
    {
      icon: faCheckCircle,
      title: "Order",
      value: "576",
      bgColor: "secondary",
    },
  ];

  return (
    <div className="row">
      {panelData.map((panel, index) => (
        <div key={index} className="col-sm-6 col-md-3 mb-3">
          <div className={`card card-stats card-round shadow`}>
            <div className="card-body d-flex align-items-center">
              <div className="col-icon me-3 ">
                <div
                  className={`d-flex align-items-center justify-content-center `}
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: `var(--bs-${panel.bgColor})`,
                    color: "white",
                    padding: "10px",
                    borderRadius:"20%"
                  }}
                >
                  <FontAwesomeIcon
                    icon={panel.icon}
                    style={{ fontSize: "2rem" }}
                  />
                </div>
              </div>
              <div className="col">
                <p className="card-category mb-1 text-end">{panel.title}</p>
                <h4 className="card-title text-end">{panel.value}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panels;
