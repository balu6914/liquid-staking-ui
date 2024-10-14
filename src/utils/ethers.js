import { ethers } from "ethers";

export const getProvider = () => {
  return new ethers.providers.JsonRpcProvider(process.env.REACT_APP_POLYGON_AMOY_RPC_URL);
};

export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return provider.getSigner();
};
