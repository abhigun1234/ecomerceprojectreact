import React, { Component } from "react";
import history from "./history";
import { createBrowserHistory } from "history";


export default class Login extends Component {
  constructor(props) {
    super(props);
    const history = createBrowserHistory();
    this.state = { email: "", password: "", message: "" };
  }

  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* Email starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/* Email ends */}

        {/* Password starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/* Password ends */}

        <div className="text-right">
          {this.state.message}

          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  } //end of render
//
  //Executes when the user clicks on Login
  onLoginClick =  () => {
    

   // if (body.length > 0) 
    {
     
      //call the AppComponent's updateIsLoggedInStatus method
      this.props.updateIsLoggedInStatus(true);

      //navigate to dashboard
      history.replace("/dashboard");
    } 
    //else 
    {
     
    }
  };
}
