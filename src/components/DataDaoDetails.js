import React,{useState, useEffect} from "react";
import "../styles/daodetails.css";
import Button from "@mui/material/Button";
import dataDaoFactory from '../contracts/artifacts/dataDaoFactory.json'
import { ContractFactory, ethers } from 'ethers';

const dataDaoFactoryContract = "0x0caC8C986452628Ed38483bcEE0D1cF85816946D"

function DataDaoDetails({ setDatadaos, setSingleDataDao }) {
  const [daoAddress, setDataDaoAddress] = useState("0xEF44eB47c898BF5Df98f420eE2fFEcb8dD7c3649");
  const [dataDaoInfo, setDataDaoInfo] = useState([]);

  const getContract = async () => {
    try {
      const { ethereum } = window;
      console.log("in");
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const { chainId } = await provider.getNetwork();
        console.log("switch case for this case is: " + chainId);
        if (chainId === 3141) {
          const contract = new ethers.Contract(dataDaoFactoryContract, dataDaoFactory.abi, signer);
          console.log(contract);
          return contract
        } else {
          alert("Please connect to the Mumbai Testnet Network!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getDataDaos = async () =>{
    const contract = await getContract();
    const dataDao = await contract.allDataDaos(daoAddress);
    setDataDaoInfo(dataDao);
    console.log(dataDao);

  }

  useEffect (() => {
    getDataDaos()
  }, []) 






  return (
    <>
      <div className="datadao-details-main-div">
        <div className="datadao-details-div">
          <div className="datadao-details-section1">
            <div className="button-flex">
              <h1 className="datadao-details-title padding-div">{dataDaoInfo.dataDaoName}</h1>
              <button
                className="datadao-details-btn-close"
                onClick={() => {
                  setDatadaos(true);
                  setSingleDataDao(false);
                }}
              >
                Go Back
              </button>
            </div>
            <p className="datadao-details-desc padding-div width-peragraph">
                  {dataDaoInfo.dataDaoDescription}
                </p>
            <div className="dao-details-flext">
              <table className="dao-details-table">
                <thead>
                  <tr>
                    <th>Token Name</th>
                    <th>No of Tokens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Something</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="datadao-details-button padding-div">
              <button className="datadao-details-btn-close">Buy Token</button>
            </div>
          </div>

          <div className="datadao-details-section2">
            <h1 className="datadao-details-dataset">Available Dataset</h1>
            <div className="dataset-main-flex">
              <table className="dataset-main-table">
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
                        <button className="datadao-details-extra-btn">
                          Update
                        </button>
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
                        <button className="datadao-details-extra-btn">
                          Put on Sell
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4 className="width-peragraph">23/10/2022</h4>
                    </td>
                    <td>
                      <div className="datadao-details-button datadao-details-btn-padding">
                        <button className="datadao-details-extra-btn">
                          Request Dataset
                        </button>
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
