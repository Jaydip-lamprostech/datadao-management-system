import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.scss";

function LandingPage() {
  const navigate = useNavigate();
  const openCreateDaoPage = () => {
    navigate("/create-data-dao/select-template");
  };
  const openExistingDaoPage = () => {
    navigate("/open-existing-data-dao");
  };
  return (
    <>
      <section className="hero">
        <h1>Welcome to the DataDao Management System</h1>
        <p>Create your own DataDao in few minutes with ease.</p>

        <div className="hero-btns">
          <button
            className="create-dao-btn"
            onClick={() => openCreateDaoPage()}
          >
            Create DataDao
          </button>
          <button
            className="existing-dao-btn"
            onClick={() => openExistingDaoPage()}
          >
            Open Existing DataDao
          </button>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
