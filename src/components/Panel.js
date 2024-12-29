import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Panels = () => {
  const panelData = [
    {
      icon: "fas fa-users",
      title: "Visitors",
      value: "1,294",
      bgColor: "primary",
    },
    {
      icon: "fas fa-user-check",
      title: "Subscribers",
      value: "1,303",
      bgColor: "info",
    },
    {
      icon: "fas fa-luggage-cart",
      title: "Sales",
      value: "$ 1,345",
      bgColor: "success",
    },
    {
      icon: "far fa-check-circle",
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
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-icon">
                  <div
                    className={`icon-big text-center icon-${panel.bgColor} bubble-shadow-small`}
                  >
                    <i className={panel.icon}></i>
                  </div>
                </div>
                <div className="col col-stats ms-3 ms-sm-0">
                  <div className="numbers">
                    <p className="card-category">{panel.title}</p>
                    <h4 className="card-title">{panel.value}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Panels;
