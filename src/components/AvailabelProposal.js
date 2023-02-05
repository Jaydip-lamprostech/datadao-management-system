import React, { useRef, useState } from "react";
import "../styles/availabelproposal.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Modal, TextField } from "@mui/material";
import "../styles/createproposal.css";
import uploadfile from "../assets/upload.png";

function AvailabelProposal() {
  const inputRef = useRef();
  const inputRefEnd = useRef();
  const inputRef1 = useRef();
  const inputRef3 = useRef();
  const fileInputRef = useRef();
  const [age, setAge] = useState("");
  const [showCreateProposal, setCreateProposal] = useState(false);

  const handleOpen2 = () => setCreateProposal(true);
  const handleClose2 = () => setCreateProposal(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,

    boxShadow: 24,
    p: 4,
  };

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="availabel-proposal-main-div">
        <div className="availabel-proposal">
          <div className="availabel-proposal-section1">
            <div className="A-proposal-title">Proposals</div>
            <div className="create-proposal-parent">
              <button className="create-proposal-btn" onClick={handleOpen2}>
                Create Proposal
              </button>
            </div>
          </div>
          <div className="availabel-proposal-section2">
            <div>
              <FormControl
                sx={{ m: 1, minWidth: 70 }}
                size="small"
                id="dropdown-formcontrol"
                className="select-parent"
              >
                <InputLabel id="select-label-status">Status</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Status"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Open</MenuItem>
                  <MenuItem value={30}>Closed</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{ m: 1, minWidth: 70 }}
                size="small"
                id="dropdown-formcontrol"
                className="select-parent"
              >
                <InputLabel id="select-label-status">Outcomes</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Outcomes"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Passed</MenuItem>
                  <MenuItem value={30}>Rejected</MenuItem>
                  <MenuItem value={30}>Pending</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                sx={{ m: 1, minWidth: 70 }}
                size="small"
                id="dropdown-formcontrol"
                className="select-parent"
              >
                <InputLabel id="select-label-status">App</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="App"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>Voting</MenuItem>
                  <MenuItem value={30}>Tokens</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <input
                type="text"
                className="proposal-date"
                placeholder="Start-Date"
                ref={inputRef1}
                onChange={(e) => console.log(e.target.value)}
                onFocus={() => (inputRef1.current.type = "date")}
                onBlur={() => (inputRef1.current.type = "text")}
              />
            </div>
            <div>
              <input
                type="text"
                className="proposal-date"
                placeholder="End-Date"
                ref={inputRef3}
                onChange={(e) => console.log(e.target.value)}
                onFocus={() => (inputRef3.current.type = "date")}
                onBlur={() => (inputRef3.current.type = "text")}
              />
            </div>
          </div>
          <div className="availabel-proposal-section3">
            <div className="A-proposal-title A-proposal-title2">
              Active Proposals
            </div>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  {" "}
                  <div className="proposal-details">
                    <table>
                      <thead>
                        <tr>
                          <th colSpan={2}>Proposal Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {" "}
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button className="uploadfile">
                              {" "}
                              View Uploaded file
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="date-flex">
                              <span>Start-Date</span>
                              <span>End-Date</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button className="vote-btn">VOTE</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <div className="proposal-details">
                    <table>
                      <thead>
                        <tr>
                          <th colSpan={2}>Proposal Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {" "}
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button className="uploadfile">
                              {" "}
                              View Uploaded file
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="date-flex">
                              <span>Start-Date</span>
                              <span>End-Date</span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button className="vote-btn">VOTE</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
        <Modal
          open={showCreateProposal}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="create-proposal-parent-div">
            <div className="create-proposal-main-div">
              <div>
                <h1 className="create-proposal-title">New Proposal</h1>
                <p className="create-proposal-desc">
                  Enter the details of a new proposal and submit them.
                </p>

                <div className="create-proposal-div">
                  <label className="create-proposal-label">Title</label>
                  <div className="textfields-width">
                    <input type="text" />{" "}
                  </div>
                  <label className="create-proposal-label">Description</label>
                  <div className="textfields-width">
                    <textarea rows="70" type="text" className="desc-height" />
                  </div>{" "}
                  <label className="create-proposal-label">Upload File</label>
                  <div
                    className="proposal-margin-div"
                    onClick={() => fileInputRef.current.click()}
                  >
                    {/* <div>
                      <label className="create-proposal-label">
                        Upload File/Folder
                      </label>
                    </div> */}
                    <img src={uploadfile} alt="upload" />
                    <input type="file" hidden ref={fileInputRef} />
                  </div>
                  <label className="create-proposal-label">Proposal Date</label>
                  <div className="start-end-div">
                    <input
                      type="text"
                      className="proposal-date"
                      placeholder="Start-Date"
                      ref={inputRef}
                      onChange={(e) => console.log(e.target.value)}
                      onFocus={() => (inputRef.current.type = "date")}
                      onBlur={() => (inputRef.current.type = "text")}
                    />
                    <input
                      type="text"
                      className="proposal-date  proposal-date1"
                      placeholder="End-Date"
                      ref={inputRefEnd}
                      onChange={(e) => console.log(e.target.value)}
                      onFocus={() => (inputRefEnd.current.type = "date")}
                      onBlur={() => (inputRefEnd.current.type = "text")}
                    />
                  </div>
                  <div className="uploadfile textfields-width">
                    <button className="create-proposal-btn-popup">
                      Create Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default AvailabelProposal;
