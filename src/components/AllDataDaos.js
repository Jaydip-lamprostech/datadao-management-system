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
                              {" "}
                              <h3 className="datadao-address">
                                0X2b5603....d0f
                              </h3>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                  setSingleDataDao(true);
                                  setDatadaos(false);
                                }}
                              >
                                More...
                              </Button>
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
                              {" "}
                              <h3 className="datadao-address">
                                0X2b5603....d0f
                              </h3>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                  setSingleDataDao(true);
                                  setDatadaos(false);
                                }}
                              >
                                More...
                              </Button>
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
                              {" "}
                              <h3 className="datadao-address">
                                0X2b5603....d0f
                              </h3>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                  setSingleDataDao(true);
                                  setDatadaos(false);
                                }}
                              >
                                More...
                              </Button>
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
                              {" "}
                              <h3 className="datadao-address">
                                0X2b5603....d0f
                              </h3>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                  setSingleDataDao(true);
                                  setDatadaos(false);
                                }}
                              >
                                More...
                              </Button>
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
