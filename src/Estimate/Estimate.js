import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { estimateVehicle } from '../redux/vehicles/actions';
import Navbarr from '../Navbar/Navbarr';
import '../Productdetails/Productdetails.css';

function Estimate() {
  const dispatch = useDispatch();
  const [vehicle, setVehicle] = useState({
    name: '',
    model: '',
    year: '',
    ownr_name: '',
    capacity: '',
    type: '',
    price: '',
    contact: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    let newVehicle = { ...vehicle };
    newVehicle[name] = value;
    setVehicle(newVehicle);
  };

  const handleSubmit = () => {
    if (
      vehicle.name === '' ||
      vehicle.model === '' ||
      vehicle.year === '' ||
      vehicle.ownr_name === '' ||
      vehicle.capacity === '' ||
      vehicle.type === '' ||
      vehicle.price === '' ||
      vehicle.contact === ''
    ) {
      toast.error('Please fill all fields');
      return;
    }
    dispatch(estimateVehicle(vehicle));
  };
  return (
    <div className="col-sm-12 p-0 background-gradiant-booking">
      <Navbarr />
      <div className="col-sm-12 pt-5 pb-5">
        <div
          className="container "
          style={{ backgroundColor: 'white', borderRadius: '30px' }}
        >
          <div className="col-sm-12 text-center ">
            <h3 className="pt-4 ">Want To Know Your Car's Worth?</h3>
          </div>
          <div className="col-sm-12 text-center">
            <img src="images/line.png" className="img-fluid" />
          </div>
          <div className="container">
            <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Name</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={vehicle.name}
                    name="name"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Model</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={vehicle.model}
                    name="model"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Year</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={vehicle.year}
                    name="year"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Owner Name</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={vehicle.ownr_name}
                    name="ownr_name"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Capacity</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={vehicle.capacity}
                    name="capacity"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Type</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={vehicle.type}
                    name="type"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Price</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value={vehicle.price}
                    name="price"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Contact</b>
                  </label>
                  <input
                    className="form-control"
                    type="mail"
                    value={vehicle.contact}
                    name="contact"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="col-sm-12 ">
                  <button
                    className="btn btn-primary mt-2 pl-4 pr-4 pt-2 pb-2"
                    style={{
                      borderRadius: '20px',
                      backgroundColor: '#2B6777',
                      borderColor: '#2B6777',
                    }}
                    onClick={handleSubmit}
                  >
                    Know Worth!
                  </button>
                </div>
              </div>
              <div className="col-sm-6">
                <img
                  src="images/vec.png"
                  className="img-fluid"
                  alt="image crashed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
