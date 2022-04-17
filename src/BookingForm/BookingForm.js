import React from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navbarr from '../Navbar/Navbarr';
import { bookVehicle } from '../redux/vehicles/actions';

import '../Productdetails/Productdetails.css';

function BookingForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.user.userDetail);
  const vehicle = useSelector((state) => state.vehicleReducer.vehicle);
  //const [message, setMessage] = React.useState('');
  const [data, setData] = React.useState({
    message: '',
    form_date: '',
    to_date: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    let newUser = { ...data };
    newUser[name] = value;
    setData(newUser);
  };
  if (!userDetail.token) {
    history.push('/login');

    window.location.reload();
    toast.error('Please login First');
    return;
  }
  const handleFormSubmit = () => {
    if (data.message === '' || data.form_date === '' || data.to_date === '') {
      toast.error('Please fill all fields');
      return;
    }
    const newData = {
      name: userDetail.successData.name,
      vehicle: vehicle.vehicle_title,
      form_date: data.form_date,
      to_date: data.to_date,
      message: data.message,
    };
    dispatch(bookVehicle(newData));
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
            <h3 className="pt-4 ">Booking Form</h3>
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
                    disabled
                    value={userDetail.successData.name}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    className="form-control"
                    type="mail"
                    disabled
                    value={userDetail.successData.email}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Phone or Mobile</b>
                  </label>
                  <input
                    className="form-control"
                    type="phone"
                    disabled
                    value={userDetail.successData.contact}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Address</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    disabled
                    value={userDetail.successData.address}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              {/* <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Cnic no.</b>
                  </label>
                  <input
                    className="form-control"
                    type="phone"
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div> */}
              <div className="col-sm-12">
                <div className="container">
                  <label>
                    <b>Pick City</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    disabled
                    value={userDetail.successData.city}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            {/* <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Time Out</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Date Out</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Time In</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Date In</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div> */}
            <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Vehicle Type</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    disabled
                    value={vehicle.fule_type}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Vehicle Name</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    disabled
                    value={vehicle.vehicle_title}
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
                    disabled
                    value={vehicle.capacity}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>Vehicle Name</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    disabled
                    value={vehicle.vehicle_title}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-sm-6">
                <div className="container">
                  <label>
                    <b>From Date</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="form_date"
                    value={data.form_date}
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
                    <b>To Date</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="to_date"
                    value={data.to_date}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                    style={{ backgroundColor: 'lightgrey' }}
                  />
                </div>
              </div>
            </div>
            <div className="row pb-4 pt-4">
              <div className="col-sm-12">
                <div className="container">
                  <label>
                    <b>Message</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="message"
                    value={data.message}
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
                    onClick={handleFormSubmit}
                    className="btn btn-primary mt-2 pl-4 pr-4 pt-2 pb-2"
                    style={{
                      borderRadius: '20px',
                      backgroundColor: '#2B6777',
                      borderColor: '#2B6777',
                    }}
                  >
                    Booking this car
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

export default BookingForm;
