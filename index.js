import { abi, contractAddress } from "./constants.js"
import { ethers } from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")

connectButton.onclick = connect
fundButton.onclick = fund

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" })
    } catch (error) {
      console.log(error)
    }
    connectButton.textContent = "Connected"
    const accounts = await ethereum.request({ method: "eth_accounts" })
    console.log(accounts)
  } else {
    connectButton.textContent = "Install MetaMask"
  }
}

async function fund(ethAmount) {
  ethAmount = "10"
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner() // Will return whatever wallet is connected from the provider
    const contract = new ethers.Contract(contractAddress, abi, signer) // Needs to be in this order
    const transactionResponse = await contract.fund({
      value: ethers.utils.parseEther(ethAmount),
    })
  }
}
