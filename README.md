<img src="assets/reclaimus-logo.png" width="30%"/>

# Reclaimus

**Reclaimus** is a JavaScript-based tool designed to help users **recover airdrop tokens** from **hacked or compromised wallets**, by securely transferring eligible tokens to a new wallet address.

> ⚠️ Use responsibly. This tool is meant for legitimate recovery only. Misuse may violate legal or ethical boundaries.

---

## ❓ Why Reclaimus?

Unlike some recovery services that ask you to **send your private key to third parties**, **Reclaimus** puts **you** in control.

✅ **Runs Locally** – You execute everything on your own PC. Your private key never leaves your machine.  
✅ **No Backend Servers** – No centralized server, no data sharing, no shady API calls.  
✅ **Uses Your Own RPC** – You can plug in any Ethereum-compatible RPC (Infura, Alchemy, etc.) — no reliance on hardcoded or unknown nodes.  
✅ **Open Source** – Everything is transparent. Review, audit, or modify the code freely.  
✅ **Token-Agnostic** – Works with any standard ERC-20 token.

This makes **Reclaimus** ideal for:
- Privacy-conscious users
- Security professionals
- Crypto power users needing to recover lost airdrops after a wallet compromise

---

## 🔄 Purpose

Many crypto users lose access to their tokens due to hacked wallets, especially unclaimed airdrops. **Reclaimus** helps you:

- Scan for eligible airdrop tokens  
- Generate recovery transactions  
- Transfer tokens to a secure wallet  

---

## 📦 Version History

| Version | Description            |
|---------|------------------------|
| v1      | Initial release — basic token transfer functionality |
| v2      | Coming soon — airdop claim automation, UI, security upgrades |

---

## 🚀 Features (v1)

- Manual configuration of sender and receiver addresses  
- ERC-20 token transfer logic  
- Works with Ethers.js (Ethereum-compatible chains)  
- Work's with any EVM chain (Just change RPC according to the chain)

---

### Prerequisite: Install Node.js

Reclaimus requires **Node.js** to run.  
If you don't have Node.js installed, follow these steps:

- Go to [https://nodejs.org/](https://nodejs.org/)  
- Download the **LTS** version for your OS (recommended)  
- Run the installer and follow the instructions  
- After installation, verify by running in your terminal/cmd:  
  ```bash
  node -v
  npm -v
- You should see version numbers output.

## 🛠️ Usage

1. Clone the repo:
   ```bash
   git clone https://github.com/himaddrimutsuddi/reclaimus.git

2. Go to project directory
   ```bash
   cd reclaimus/v1

3. Install Dependencies:
   ```bash
   npm install ethers dotenv figlet chalk@4.1.2

4. Open the .env file in notepad(if you're on Windows) or nano(if you're in linux)
   ```bash
   notepad .env
   ```
   or(For linux user)
   ```bash
   nano .env
   ```
   Change it with your real PRIVATE_KEY, RPC_URL, TOKEN_ADDRESS, and FORWARD_TO
   PRIVATE_KEY = Your hacked wallet private key
   RPC_URL = Go to [Metamask Developer](https://developer.metamask.io/)-Infura RPC-Copy Sepolia Websockets RPC(Not HTTPS)
   TOKEN_ADDRESS = Token contract address
   FORWARD_TO = Your recovery wallet address(Not private key)

6. Run the script(After changing the details in notepad)
   ```bash
   node reclaimus.js

🧠 Note: Make sure you double-check everything before using a private key. Never share it publicly. You can use infura for RPC.
❗IMPORTANT NOTE: Make sure you use Web Socket Endpoint RPC(wss), not HTTPS.

## 📌 Roadmap: 

✅ Version 1 – Manual recovery

⏳ Version 2 – Automated scanning

🔒 Version 3 – Security enhancements, web UI

## 🤝 Contributing
Pull requests are welcome. If you find a bug or want to suggest a feature, feel free to open an issue.

## Contract
Reach out on [GitHub](https://github.com/himaddrimutsuddi) for collaborations.
[Twitter](https://x.com/himaddriorka)
[Telegram](https://t.me/orkam2)
