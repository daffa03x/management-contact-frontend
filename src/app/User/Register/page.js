"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterAPI, getToken } from "../../../../services/auth";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    const token = getToken();
    if (token) {
      router.push("/Dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await RegisterAPI({ name: name, username: username, password: password, setMessage: setMessage, setStatus: setStatus });
    if (response) {
      router.push("/User");
    }
  };

  return (
    <>
      {message && (
        <div role="alert" className={`alert ${status == "alert-success" ? status : status}`}>
          {status == "alert-success" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          <span>{message}</span>
        </div>
      )}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-nowrap">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="Username" className="input input-bordered" required value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
