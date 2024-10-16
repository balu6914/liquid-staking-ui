Liquid Staking DApp
Overview
This project implements a Liquid Staking DApp on the Ethereum testnet (Polygon Amoy). Users can deposit ETH, which is staked on the network, and they receive liquid staking tokens (ERC-20) representing their share of the staked ETH. Users can redeem their staked ETH by burning the liquid staking tokens.

The DApp provides a simple front-end interface for interacting with the staking contract. It allows users to easily stake, view their balance, and redeem their ETH.

Features
Deposit ETH: Stake ETH and receive liquid staking tokens.
Staking Rewards: Rewards are calculated and distributed periodically to staking token holders.
Redeem ETH: Redeem staked ETH by burning the liquid staking tokens.
Tech Stack
Solidity: Smart contract development.
Ethers.js: Blockchain interaction with Ethereum.
React.js: Front-end framework for building the user interface.
Hardhat: Ethereum development and testing environment.
Vercel: For hosting the front-end of the DApp.
Contract Addresses
Staking Contract: 0xYourStakingContractAddress
Liquid Staking Token Contract: 0xYourTokenContractAddress
Deployed Frontend: https://liquid-staking-ui-vert.vercel.app/
Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v14.x or later)
npm (Node package manager)
Hardhat (Ethereum development framework)
Metamask (Browser wallet)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/liquid-staking-dapp.git
cd liquid-staking-dapp
Install the dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

env
Copy code
REACT_APP_STAKING_CONTRACT_ADDRESS=0xYourStakingContractAddress
REACT_APP_TOKEN_CONTRACT_ADDRESS=0xYourTokenContractAddress
REACT_APP_POLYGON_AMOY_RPC_URL=https://rpc-amoy.polygon.technology/
Replace the contract addresses with your deployed contract addresses.

Running Locally
To start the front-end development server:

bash
Copy code
npm start
This will run the app on http://localhost:3000.

To interact with the smart contracts, make sure your browser is connected to the Polygon Amoy testnet via Metamask.

Deploying Contracts
To deploy the staking and token contracts on the testnet, run:

bash
Copy code
npx hardhat run scripts/deploy.js --network polygon_amoy
After deployment, update the .env file with the new contract addresses.

Testing Smart Contracts
Unit tests for the smart contracts are written using Hardhat. You can run the tests by executing:

bash
Copy code
npx hardhat test
This will run all the tests and validate the staking, redeeming, and rewards distribution functionalities.

Project Structure
bash
Copy code
liquid-staking-dapp/
├── contracts/            # Smart contracts
│   ├── LiquidStakingToken.sol
│   └── Staking.sol
├── scripts/              # Deployment scripts
│   └── deploy.js
├── src/                  # Front-end source code (React)
│   ├── App.js
│   ├── utils/
│   │   ├── contracts.js  # Contract interaction logic
│   │   ├── ethers.js     # Provider and signer logic
├── test/                 # Test scripts for smart contracts
│   └── Staking.test.js
├── .env                  # Environment variables
├── hardhat.config.js      # Hardhat configuration file
├── package.json          # Project dependencies
└── README.md             # Project documentation
Usage
Interacting with the DApp
Deposit ETH: Enter the amount of ETH you wish to deposit and click the "Deposit ETH" button.
Redeem ETH: Enter the amount of liquid staking tokens to redeem and click the "Redeem ETH" button.
View Staked Balance: Your staked balance is displayed in real-time after connecting your wallet.
Front-End Deployment (Vercel)
The front-end of the DApp is deployed on Vercel at the following URL:

https://liquid-staking-ui-vert.vercel.app/

To deploy the front-end yourself:

Push the repository to GitHub.
Sign in to Vercel, create a new project, and link it to your GitHub repository.
Configure the environment variables in Vercel's settings, then deploy.
License
This project is licensed under the MIT License.
