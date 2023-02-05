import React from "react";
import "../styles/alldatadaos.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function AllDataDaos({ setSingleDataDao, setDatadaos }) {
  return (
    <>
      <div className="all-datadao-main-div">
        <div className="all-datadao-div">
          <div className="all-datadao-section1">
            <h1 className="all-datadao-title">All DataDAOs</h1>
            <p className="all-datadao-title">
              All the dataDAOs on the platform
            </p>
          </div>
          <div className="all-datadao-section2">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid container item spacing={3}>
                  <React.Fragment>
                    <Grid item xs={4}>
                      {" "}
                      <div className="proposal-details">
                        <table>
                          <thead>
                            <tr>
                              <th colSpan={2}>DataDAo Name</th>
                            </tr>
                          </thead>
                          <tr>
                            <td>
                              {" "}
                              <p>
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="datadao-address">
                                <h3>0X2b5603....d0f</h3>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  enable-background="new 0 0 24 24"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  width="18px"
                                  fill="#4c2ffd"
                                  style={{ margin: "0px 20px" }}
                                >
                                  <g>
                                    <rect fill="none" height="24" width="24" />
                                  </g>
                                  <g>
                                    <path d="M15,20H5V7c0-0.55-0.45-1-1-1h0C3.45,6,3,6.45,3,7v13c0,1.1,0.9,2,2,2h10c0.55,0,1-0.45,1-1v0C16,20.45,15.55,20,15,20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z" />
                                  </g>
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <button
                                className="view-more-all-dao"
                                onClick={() => {
                                  setSingleDataDao(true);
                                  setDatadaos(false);
                                }}
                              >
                                View More
                              </button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      {" "}
                      <div className="proposal-details">
                        <table>
                          <thead>
                            <tr>
                              <th colSpan={2}>DataDAo Name</th>
                            </tr>
                          </thead>
                          <tr>
                            <td>
                              {" "}
                              <p>
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="datadao-address">
                                <h3>0X2b5603....d0f</h3>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  enable-background="new 0 0 24 24"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  width="18px"
                                  fill="#4c2ffd"
                                  style={{ margin: "0px 20px" }}
                                >
                                  <g>
                                    <rect fill="none" height="24" width="24" />
                                  </g>
                                  <g>
                                    <path d="M15,20H5V7c0-0.55-0.45-1-1-1h0C3.45,6,3,6.45,3,7v13c0,1.1,0.9,2,2,2h10c0.55,0,1-0.45,1-1v0C16,20.45,15.55,20,15,20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z" />
                                  </g>
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <button
                                className="view-more-all-dao"
                                onClick={() => {
                                  setSingleDataDao(true);
                                  setDatadaos(false);
                                }}
                              >
                                View More
                              </button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      {" "}
                      <div className="proposal-details">
                        <table>
                          <thead>
                            <tr>
                              <th colSpan={2}>DataDAo Name</th>
                            </tr>
                          </thead>
                          <tr>
                            <td>
                              {" "}
                              <p>
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="datadao-address">
                                <h3>0X2b5603....d0f</h3>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  enable-background="new 0 0 24 24"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  width="18px"
                                  fill="#4c2ffd"
                                  style={{ margin: "0px 20px" }}
                                >
                                  <g>
                                    <rect fill="none" height="24" width="24" />
                                  </g>
                                  <g>
                                    <path d="M15,20H5V7c0-0.55-0.45-1-1-1h0C3.45,6,3,6.45,3,7v13c0,1.1,0.9,2,2,2h10c0.55,0,1-0.45,1-1v0C16,20.45,15.55,20,15,20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z" />
                                  </g>
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <button
                                className="view-more-all-dao"
                                onClick={() => {
                                  setSingleDataDao(true);
                                  setDatadaos(false);
                                }}
                              >
                                View More
                              </button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Grid>
                    <Grid item xs={4}>
                      {" "}
                      <div className="proposal-details">
                        <table>
                          <thead>
                            <tr>
                              <th colSpan={2}>DataDAo Name</th>
                            </tr>
                          </thead>
                          <tr>
                            <td>
                              {" "}
                              <p>
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="datadao-address">
                                <h3>0X2b5603....d0f</h3>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  enable-background="new 0 0 24 24"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  width="18px"
                                  fill="#4c2ffd"
                                  style={{ margin: "0px 20px" }}
                                >
                                  <g>
                                    <rect fill="none" height="24" width="24" />
                                  </g>
                                  <g>
                                    <path d="M15,20H5V7c0-0.55-0.45-1-1-1h0C3.45,6,3,6.45,3,7v13c0,1.1,0.9,2,2,2h10c0.55,0,1-0.45,1-1v0C16,20.45,15.55,20,15,20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z" />
                                  </g>
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              <button
                                className="view-more-all-dao"
                                onClick={() => {
                                  setSingleDataDao(true);
                                  setDatadaos(false);
                                }}
                              >
                                View More
                              </button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Grid>
                  </React.Fragment>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllDataDaos;
