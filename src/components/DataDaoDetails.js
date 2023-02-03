import React from "react";
import "../styles/daodetails.css";
import Button from "@mui/material/Button";

function DataDaoDetails({ setDatadaos, setSingleDataDao }) {
  return (
    <>
      <div className="datadao-details-main-div">
        <div className="datadao-details-div">
          <div className="datadao-details-section1">
            <div className="button-flex">
              <h1 className="datadao-details-title padding-div">Name</h1>
              <Button
                variant="contained"
                size="large"
                className="datadao-details-btn-close"
                onClick={() => {
                  setDatadaos(true);
                  setSingleDataDao(false);
                }}
              >
                {" "}
                Back
              </Button>
            </div>
            <p className="datadao-details-desc padding-div width-peragraph">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="dao-details-flext">
              <h3 className="dao-details-token-name padding-div">Token Name</h3>
              <h3 className="dao-details-token-no padding-div">No of Tokens</h3>
            </div>
            <div className="datadao-details-button padding-div">
              <Button variant="contained" size="large">
                Buy Token
              </Button>
            </div>
          </div>

          <div className="datadao-details-section2">
            <h1 className="datadao-details-dataset">Available Dataset</h1>
            <div className="dataset-main-flex">
              <table>
                <thead>
                  <tr>
                    <div className="daodetails-proposal-name">
                      <th colSpan={2}>Name of Proposal</th>
                    </div>
                  </tr>
                </thead>
                <div className="padding-div">
                  <tr>
                    <td>
                      <p className=" width-peragraph">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </td>
                    <td className="datadao-width-btn">
                      {" "}
                      <div className="datadao-details-button ">
                        <Button
                          variant="contained"
                          size="large"
                          className="datadao-details-btn"
                        >
                          Update
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <h4 className=" width-peragraph">uploaded file</h4>
                    </td>
                    <td>
                      <div className="datadao-details-button datadao-details-btn-padding">
                        <Button
                          variant="contained"
                          size="large"
                          className="datadao-details-btn "
                        >
                          Put on Sell
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4 className="width-peragraph">23/10/2022</h4>
                    </td>
                    <td>
                      <div className="datadao-details-button datadao-details-btn-padding">
                        <Button
                          variant="contained"
                          size="large"
                          className="datadao-details-btn"
                        >
                          Request Dataset
                        </Button>
                      </div>
                    </td>
                  </tr>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DataDaoDetails;
