import React from "react";
import StepsForm from "./StepsForm";
import "../../styles/CreateDao.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CreateDao() {
  return (
    <div className="create-dao-main">
      <div className="left-div">
        <div>
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={66} />
          </div>
        </div>
        <div>
          <StepsForm />
        </div>
      </div>
      <div className="right-div"></div>
    </div>
  );
}

export default CreateDao;
