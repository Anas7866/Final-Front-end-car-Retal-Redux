import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "../shared/routes";
import { getAllVehicles, getVehicleDetail } from "../redux/vehicles/actions";
import "react-multi-carousel/lib/styles.css";
import "../Homepage/Homepage.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Catagorycards = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const vehicles = useSelector((state) => state.vehicleReducer.vehicles);

  const handleViewDetail = (id) => {
    dispatch(getVehicleDetail(id));
    history.push({ pathname: routes.PRODUCT_DETAIL });
  };

  useEffect(() => {
    dispatch(getAllVehicles());
  }, []);

  return (
    <div className="col-sm-12 mt-4 mb-4 p-0  text-center" id="mobile-responsivee">
      <Carousel responsive={responsive}>
        {vehicles.length <= 0 ? (
          <>There is no vehicle in the record</>
        ) : (
          vehicles && vehicles.map((item, index) => (
            <div key={index} className="col-sm-12 p-0 pb-2" id="mobile-responsivee">
              <div className="card m-3 mobile-responsive" >
                <img
                  className="img-fluid p-0"
                  src="images/carolla.png"
                  //src={item.image1}
                  alt="Card image cap"
                  style={{ position: "relative", zIndex: "50" }}
                />

                <div className="card-body" id="blur-bg">
                  <button
                    onClick={() => handleViewDetail(item.id)}
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.315)",
                      border: "2px solid #2B6777",
                      color: "#2B6777",
                      borderRadius: "10px",
                    }}
                  >
                   <b> Show Detail </b>
                  </button>
                  <h4 className="card-title pt-1">{item.vehicle_title}</h4>
                  <p className="card-text pt-2">{item.vehicle_overview}</p>
                 
                </div>
              </div>
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
};

export default Catagorycards;
