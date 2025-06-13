require('dotenv').config();
const figlet = require('figlet');
const { ethers } = require('ethers');
const chalk = require('chalk');

console.log('\n');

// Show program name first
figlet('Reclaimus', function (err, data) {
  if (err) {
    console.log('❌ Something went wrong with figlet...');
    console.dir(err);
    return;
  }

  console.log(chalk.cyanBright(data)); // Fancy cyan ASCII banner
  console.log(chalk.blueBright('🔧 Built by Himaddri\n')); // Green subtitle
  console.log(chalk.blueBright('🔧 X: https://x.com/himaddriorka\n'));
  // Load env variables
  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  const RPC_URL = process.env.RPC_URL;
  const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS;
  const FORWARD_TO = process.env.FORWARD_TO;

  // Setup provider and wallet
  const provider = new ethers.WebSocketProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const myAddress = wallet.address;

  // ERC-20 ABI (no balanceOf)
  const erc20ABI = [
    "event Transfer(address indexed from, address indexed to, uint amount)",
    "function transfer(address to, uint amount) returns (bool)"
  ];

  // Token contract
  const token = new ethers.Contract(TOKEN_ADDRESS, erc20ABI, wallet);

  console.log(`✅ Watching for token transfers to ${myAddress}...\n`);

  // Handle incoming transfer
  token.on("Transfer", async (from, to, amount) => {
    if (to.toLowerCase() === myAddress.toLowerCase()) {
      const readableAmount = ethers.formatUnits(amount, 18);
      console.log(`📥 Received ${readableAmount} tokens from ${from}`);

      try {
        const tx = await token.transfer(FORWARD_TO, amount);
        console.log(`🚀 Forwarding ${readableAmount} tokens... TX: ${tx.hash}`);
        const receipt = await tx.wait();
        console.log(`✅ Tokens forwarded in block ${receipt.blockNumber}`);
      } catch (err) {
        console.error("❌ Transfer failed:", err.message || err);
      }
    }
  });
});
