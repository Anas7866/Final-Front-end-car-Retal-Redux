import React from 'react';
import Tilt from 'react-tilt';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/users/actions';
import '../Login/Login.css';

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    let newUser = { ...user };
    newUser[name] = value;
    setUser(newUser);
  };

  const handleSubmit = () => {
    if (user.email === '' || user.password === '') {
      toast.error('Please fill all fields');
      return;
    }
    dispatch(loginUser(user));
  };

  return (
    <div
      className="col-sm-12 background-gradiant p-5"
      style={{ overflowX: 'hidden' }}
    >
      <div className="col-sm-12 background-learner ">
        <div className="row background-chnge ">
          <div className="col-sm-6  m-auto">
         
            <Tilt className="Tilt" options={{ max: 45 }}>
            <Link to="/">
              <div className="col-sm-12 text-center ">
                <img
                  src="images/surface1.png"
                  className="img-fluid image-size"
                />
              </div>
              </Link>
            </Tilt>
           
          </div>
          <div className="col-sm-6 login-section ">
            <div className="col-sm-12 text-center">
              <h2>
                <b>Welcome Back</b>
              </h2>
            </div>
            {/* <div className="col-sm-12">
                        <input type="text" className="form-control field-background"  />
                    </div> */}
            <div className="row pt-3">
              <div className="col-sm-2"></div>
              <div className="col-sm-8 text-center">
                <div className="input-group field-size text-center">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-pirmary button-color"
                      type="button"
                    >
                      <i style={{ color: 'gray' }} class="far fa-envelope"></i>
                    </button>
                  </div>
                  {/* <input
                    type="text"
                    className="form-control field-background shadow-none focus-1"
                    id="effect-11"
                    placeholder="Email"
                    aria-label
                    aria-describedby="basic-addon1"
                  /> */}
                  <input
                    type="text"
                    className="form-control field-background shadow-none focus-1"
                    placeholder="email"
                    aria-describedby="basic-addon1"
                    value={user.email}
                    name="email"
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  />
                </div>

                <div className="col-sm-2"></div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-sm-2"></div>
              <div className="col-sm-8 text-center">
                <div className="input-group field-size text-center">
                  <div className="input-group-prepend">
                    <button
                      className="btn btn-primary button-color"
                      type="button"
                    >
                      <i style={{ color: 'gray' }} class="fas fa-lock"></i>
                    </button>
                  </div>
                  <input
                    type="password"
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
                <div className="col-sm-2"></div>
              </div>
            </div>

            <div className="col-sm-12 text-center pt-4">
              <button
                className="btn btn-primary button-padding "
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>

            <div
              className="col-sm-12 text-center "
              style={{ cursor: 'pointer' }}
            >
              <Link
                to="/forget-password"
                style={{ textDecoration: 'none', color: 'gray' }}
              >
                {' '}
                <p className="pt-2 m-0 text-hover">
                  Forgot Username / Password?
                </p>
              </Link>
              <Link
                to="/signup"
                style={{ textDecoration: 'none', color: 'gray' }}
              >
                {' '}
                <p className="p-0 m-0 text-hover">Create Account</p>{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
