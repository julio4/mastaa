import React, { useState } from "react";
import { ethers } from "ethers";
import contractArtifact from "./contracts/Storage.json";
import Layout from "../../components/Layout/layout";
import { Button, Box } from "@chakra-ui/react";

export default function Home() {
const contractByteCode = "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100a1565b60405180910390f35b610073600480360381019061006e91906100ed565b61007e565b005b60008054905090565b8060008190555050565b6000819050919050565b61009b81610088565b82525050565b60006020820190506100b66000830184610092565b92915050565b600080fd5b6100ca81610088565b81146100d557600080fd5b50565b6000813590506100e7816100c1565b92915050565b600060208284031215610103576101026100bc565b5b6000610111848285016100d8565b9150509291505056fea26469706673582212207bbff281ae8c9b6ea56e4da77beab4556e6bc57e474bf6d5e5b2e37fbc6f003364736f6c63430008110033";

  const [signer, setSigner] = useState(null);
  
  const factory = signer
    ? new ethers.ContractFactory(
        contractArtifact.abi,
        contractByteCode,
        signer
      )
    : null;

  async function connectMetamask() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      setSigner(provider.getSigner());
    } else {
      alert("Please install MetaMask to use this feature");
    }
  }

  async function deployContract() {
    if (factory) {
      const contract = await factory.deploy();
      console.log(`Contract deployed at address: ${contract.address}`);
    }
  }

  return (
    <Layout>
      <Box className="page">
        <h1>Next.js / Prisma - User Boilerplate</h1>
        {!signer && <Button onClick={connectMetamask}>Connect MetaMask</Button>}
        {signer && <Button onClick={deployContract}>Deploy Contract</Button>}
      </Box>
    </Layout>
  );
}