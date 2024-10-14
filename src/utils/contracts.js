import { ethers } from "ethers";
import StakingAbi from "./Staking.json"; // Replace with the path to your Staking contract ABI
import TokenAbi from "./LiquidStakingToken.json"; // Replace with the path to your Token contract ABI

const stakingAddress = process.env.REACT_APP_STAKING_CONTRACT_ADDRESS;
const tokenAddress = process.env.REACT_APP_TOKEN_CONTRACT_ADDRESS;

export const getStakingContract = (signerOrProvider) => {
  return new ethers.Contract(stakingAddress, StakingAbi.abi, signerOrProvider);
};

export const getTokenContract = (signerOrProvider) => {
  return new ethers.Contract(tokenAddress, TokenAbi.abi, signerOrProvider);
};
