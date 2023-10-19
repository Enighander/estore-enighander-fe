import React from 'react';
import logo from '../../assets/brand.png'

const Login = () => {

  const pageStyles = {
    background: '#FAFAFA',
    minHeight: '100vh',
    transform: 'scale(0.9)', // Scale down to 70%
    transformOrigin: 'top', // Maintain the top as the reference point
  };

  return (
    <div className="container-fluid" style={pageStyles}>
      <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-lg-6 col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">LOG IN</h2>
              <h4 className="card-subtitle mb-4 text-muted">Welcome To Enighander Store</h4>
              <p className="card-text text-muted">Please enter your account details</p>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary" style={{ fontWeight: "bold", backgroundColor: "#009393" }}>Log In</button>
              </form>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between mt-4">
            <a href="#" className="text-muted">Terms Of Use</a>
            <a href="#" className="text-muted">Privacy Policy</a>
            <a href="#" className="text-muted">Cookie Policy</a>
            <a href="#" className="text-muted">Status Page</a>
            <a href="#" className="text-muted">Contact Us</a>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block order-lg-first">
          <img src={logo} className="img-fluid" alt="Placeholder" />
        </div>
      </div>
    </div>
  );
}

export default Login;