import { useState } from "react";
import { apiConstrant } from "../Home/Home";
import "./index.css";

function Form() {
  const [userData, setData] = useState({
    username: "",
    password: "",
    age: "",
    name: "",
    gender: "male",
  });

  const handler = (e) => {
    setData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };

  const [apis, SetApis] = useState({
    api: apiConstrant.initial,
    error: false,
    errorMsg: "",
    color: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    SetApis((prev) => ({
      ...prev,
      api: apiConstrant.loading,
    }));
    const url = "https://emerald-lamb-tux.cyclic.app/signup";

    const option = {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await fetch(url, option);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        SetApis((prev) => ({
          ...prev,
          api: apiConstrant.success,
          error: true,
          errorMsg: `User Create Success ${data.username}`,
          color: "text-primary",
        }));
      } else {
        const dat = await res.json();
        SetApis((prev) => ({
          ...prev,
          api: apiConstrant.failure,
          error: true,
          errorMsg: dat.type,
          color: "text-danger",
        }));
      }
    } catch (e) {
      SetApis((prev) => ({
        ...prev,
        api: apiConstrant.failure,
        error: true,
        errorMsg: e.message,
        color: "text-danger",
      }));
    }
  };

  return (
    <div className="m-5">
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="name">Enter Name</label>
          <input
            onChange={handler}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Email address</label>
          <input
            onChange={handler}
            type="email"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handler}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            onChange={handler}
            type="text"
            className="form-control"
            id="age"
          />
        </div>
        <label htmlFor="male">Male</label>
        <input
          name="gender"
          value="male"
          onChange={handler}
          type="radio"
          id="male"
        />
        <label htmlFor="female">Female</label>
        <input
          onChange={handler}
          value="female"
          name="gender"
          type="radio"
          id="female"
        />
        <label htmlFor="other">Other</label>
        <input
          onChange={handler}
          value="other"
          name="gender"
          type="radio"
          id="other"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {apis.error && (
          <p className={`font-weight-bold ${apis.color}`}>* {apis.errorMsg}</p>
        )}
      </form>
    </div>
  );
}

export default Form;
