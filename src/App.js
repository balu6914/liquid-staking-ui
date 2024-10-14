import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils/ethers";
import { getStakingContract, getTokenContract } from "./utils/contracts";

function App() {
  const [stakingContract, setStakingContract] = useState(null);
  const [tokenContract, setTokenContract] = useState(null);
  const [ethAmount, setEthAmount] = useState("");
  const [stakedBalance, setStakedBalance] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => {
    const initContracts = async () => {
      try {
        const provider = getProvider();
        const signer = getSigner();
        const staking = getStakingContract(signer);
        const token = getTokenContract(signer);
        setStakingContract(staking);
        setTokenContract(token);

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);

        // Fetch user's staked balance
        const balance = await staking.stakedAmount(accounts[0]);
        setStakedBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("Error initializing contracts:", error);
      }
    };
    initContracts();
  }, []);

  const handleDeposit = async () => {
    try {
      if (!stakingContract || !ethAmount) return;
      const tx = await stakingContract.deposit({
        value: ethers.utils.parseEther(ethAmount),
      });
      await tx.wait();
      alert("Deposit successful!");
      setEthAmount(""); // Clear the input after successful deposit
    } catch (error) {
      console.error("Error during deposit:", error);
      alert("Deposit failed.");
    }
  };

  const handleRedeem = async () => {
    try {
      if (!stakingContract || !ethAmount) return;
      const tx = await stakingContract.redeem(ethers.utils.parseEther(ethAmount));
      await tx.wait();
      alert("Redeem successful!");
      setEthAmount(""); // Clear the input after successful redeem
    } catch (error) {
      console.error("Error during redeem:", error);
      alert("Redeem failed.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Liquid Staking DApp</h1>
      <p>Connected Account: {account}</p>
      <p>Your Staked Balance: {stakedBalance} ETH</p>
      <input
        type="text"
        value={ethAmount}
        onChange={(e) => setEthAmount(e.target.value)}
        placeholder="Amount in ETH"
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleDeposit} style={{ marginRight: "10px" }}>
        Deposit ETH
      </button>
      <button onClick={handleRedeem}>
        Redeem ETH
      </button>
    </div>
  );
}

export default App;
