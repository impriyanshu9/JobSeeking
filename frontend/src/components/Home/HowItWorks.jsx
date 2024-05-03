import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Job Portal Works</h3>
          <div className="banner">
            <div className="card">
            
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                "To access this site, you need to create an account to unlock all features and services. To create an account, you must complete 'withCredentials'."
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Job Seeker find their jobs and they can apply with this Portal and Recuirter post their job.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Apply for the job through this portal and to find the suitable Candidates for their company by the Recuirter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
