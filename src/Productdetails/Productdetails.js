import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbarr from '../Navbar/Navbarr';
import '../Productdetails/Productdetails.css';

function Productdetails() {
  const vehicle = useSelector((state) => state.vehicleReducer.vehicle);

  return (
    <div className="col-sm-12 p-0 background-gradiant-product">
      <Navbarr />
      <div className="col-sm-12 pt-5 pb-5">
        <div
          className="container "
          style={{ backgroundColor: 'white', borderRadius: '30px' }}
        >
          <div className="col-sm-12 text-center ">
            <h3 className="pt-4 ">{vehicle.vehicle_title}</h3>
          </div>
          <div className="col-sm-12 text-center">
            <img src="images/line.png" className="img-fluid" />
          </div>
          <div className="col-sm-12 pb-3 pt-3 text-center">
            <img
              src="images/35b1df4b7efca7f6a42c1a0fa19d83a1.png"
              className="img-fluid width-product-image"
            />
          </div>
          <div className="col-sm-12 text-center pb-3 ">
            <p style={{ paddingLeft: '25%', paddingRight: '25%' }}>
              {vehicle.vehicle_overview}
            </p>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">
                <div className="col-sm-12">
                  <table class="table table-bordered text-center">
                    <thead class="thead-light">
                      <tr>
                        <th
                          colSpan={2}
                          className="col-sm-12 text-center"
                          style={{ backgroundColor: '#163235', color: 'white' }}
                        >
                          Rates
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Price</b>
                        </td>
                        <td>
                          <b>Rent/hr</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Amount</b>
                        </td>
                        <td>{vehicle.price} rs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="col-sm-12">
                  <table class="table table-bordered text-center">
                    <thead class="thead-light">
                      <tr>
                        <th
                          colSpan={2}
                          className="col-sm-12 text-center"
                          style={{ backgroundColor: '#163235', color: 'white' }}
                        >
                          Vehicle Detail
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>Name</b>
                        </td>
                        <td>
                          <b>{vehicle.vehicle_title}</b>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Fuel Type</b>
                        </td>
                        <td>{vehicle.fule_type}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Model</b>
                        </td>
                        <td>{vehicle.model_year}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Capacity</b>
                        </td>
                        <td>{vehicle.capacity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 text-center pt-3 pb-4">
            <h5 style={{ color: 'gray' }}>Want to book?</h5>
            <Link to="/booking-form">
              {' '}
              <button
                className="btn btn-primary mt-2 pl-4 pr-4 pt-2 pb-2"
                style={{
                  borderRadius: '20px',
                  backgroundColor: '#2B6777',
                  borderColor: '#2B6777',
                }}
              >
                Booking this car
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
