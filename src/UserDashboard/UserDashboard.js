import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleResetPassword,
  handleLogout,
  handleAddReview,
} from '../redux/users/actions';

function UserDashboard() {
  const history = useHistory();
  const userDetail = useSelector((state) => state.user.userDetail);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    password: '',
  });

  const [review, setReview] = useState({
    title: '',
    description: '',
  });

  const handleChangeReview = (event) => {
    const { value, name } = event.target;
    let newReview = { ...review };
    newReview[name] = value;
    setReview(newReview);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    let newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
  };

  const handleSubmitReview = () => {
    if (review.title === '' || review.description === '') {
      toast.error('please fill all fields');
      return;
    }
    dispatch(handleAddReview(review));
  };

  const handleSubmit = () => {
    if (user.password === '') {
      toast.error('please fill all fields');
      return;
    }
    dispatch(handleResetPassword(user));
  };

  if (!userDetail.token) {
    toast.error('Please login First');
    history.push('/login');

    window.location.reload();
    return;
  }
  return (
    <div className="col-sm-12 ">
      <div
        className="col-sm-12 mt-2 pt-2 pb-2 shadow-lg"
        style={{
          backgroundColor: '#2b6777',
          color: 'white',
          borderRadius: '20px',
        }}
      >
        <h1>Hitach Hikers User Profile</h1>
      </div>

      <div className="col-sm-12 pt-5 " style={{ color: 'grey' }}>
        <h3>Welcome, {userDetail.successData?.name}</h3>
      </div>

      <div className="col-sm-12 shadow-lg " style={{ borderRadius: '20px' }}>
        <div className="col-sm-12 mt-4 pt-5 pb-5">
          <div className="col-sm-12">
            <h3>Add Feedback</h3>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <div className="col-sm-12">
                <label>
                  <b>Title</b>
                </label>
                <input
                  type="text"
                  className="form-control field-background shadow-none focus-1"
                  placeholder="title"
                  aria-describedby="basic-addon1"
                  value={review.title}
                  name="title"
                  onChange={(event) => {
                    handleChangeReview(event);
                  }}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="col-sm-12">
                <label>
                  <b>Description</b>
                </label>
                <input
                  type="text"
                  className="form-control field-background shadow-none focus-1"
                  placeholder="description"
                  aria-describedby="basic-addon1"
                  value={review.description}
                  name="description"
                  onChange={(event) => {
                    handleChangeReview(event);
                  }}
                />
              </div>
            </div>

            <div className="col-sm-6 mt-5 pl-4">
              <button
                onClick={handleSubmitReview}
                className="btn btn-success"
                style={{ width: '100%', backgroundColor: '#2b6777', borderRadius:"20px" }}
              >
                Add Review
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-sm-12 shadow-lg " style={{ borderRadius: '20px' }}>
        <div className="col-sm-12 mt-4 pt-5 pb-5">
          <div className="col-sm-12">
            <h3>Reset Password</h3>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6">
              <div className="col-sm-12">
                <label>
                  <b>Email</b>
                </label>
                <input
                  type="text"
                  disabled
                  className="form-control field-background shadow-none focus-1"
                  placeholder="Email"
                  aria-describedby="basic-addon1"
                  value={userDetail.successData?.email}
                  name="email"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                />
              </div>
            </div>
           
            <div className="col-sm-6 mt-3">
              <div className="col-sm-12">
                <label>
                  <b>Password</b>
                </label>
                <input
                  type="text"
                  className="form-control field-background shadow-none focus-1"
                  placeholder="password"
                  aria-describedby="basic-addon1"
                  value={user.password}
                  name="password"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                />
              </div>
            </div>
            <div className="col-sm-6 mt-5 pl-4">
              <button
                onClick={handleSubmit}
                className="btn btn-success"
                style={{ width: '100%', backgroundColor: '#2b6777', borderRadius:"20px" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="col-sm-12  " style={{ borderRadius: '20px' }}>
        <div className="col-sm-12 pt-5 pb-5">
          <div className="row mt-3">
            <div className="col-sm-6 ">
              <Link to="/">
                <button
                  onClick={() => dispatch(handleLogout())}
                  className="btn btn-success"
                  style={{ width: '100%', backgroundColor: '#2b6777', borderRadius:"20px" }}
                >
                  Logout
                </button>{' '}
              </Link>
            </div>
            <div className="col-sm-6  pl-4">
            <Link to="/">
                <button
                  
                  className="btn btn-success"
                  style={{ width: '100%', backgroundColor: '#2b6777', borderRadius:"20px" }}
                >
                  Go to rent Vehicles
                </button>{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
