---
slug: "/blockchain-day-1"
title: "Blockchain: day 1"
short: "Vim setup, new book, start Etherium course"
date: "2021-11-18"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["etherium", "blockchain", "solidity", "hundred-days-of"]
focus: "fundamentals"
---

## LunarVim as a Solidity IDE (Ethereum Development in Neovim)

[[youtube: MOaws1ozqNw]]

- Install Tabnine for completion, as completion is not part the lsp
- Install `Plug 'ChristianChiarulli/vim-solidity'` for syntax highlighing
- Install Solang lsp for minimal lsp support

## How to Become a Blockchain Engineer

[[youtube: e1N4aWIJMN0]]

**Plan to be successful**

- Set specific outcomes
- Understand why
- Make a plan
- Take massive action towards that plan
- Periodically reflect

**Make a plan (to be a blockchain develop)**

- Understand why you want to be a blockchain dev
- Learn some blockchain tech, dont get stuck in tutorial hell
- Join a community, do a hackathon
- Go deeper, get a job
- Keep learning

## Solidity course

[[youtube: M576WGiDBdQ]]

**[Code](https://github.com/smartcontractkit/full-blockchain-solidity-course-py)**

**start: 0min**

**stop: 29min**

**Notes**

- Look to network with other blockchain engineers

### Welcome to blockchain

- Powered by cryptography
- Etherium added smart contracts
- Smart contracts allow for agreements without centralised intermediaries
- Smart contracts are self executing sets of intructions without 3rd parties
- Smart contracts are writen in code
- Smart contracts come with a flaw - The Oracle problem
- Blockchains are deterministics, meaning they are closed off (a walled garden), everything happens on the smart contract.
- The needs someway of getting external (to the blockchain) data.
- **Blockchain oracles** bring data into the blockachain or execute external computation
- The problem is that centralised oracles are a point of failure
- **Hybrid smart contracts** combine off-chain data with on-chain smart contracts. Most DeFi are hybrid smart contracts
- [Chainlink](https://chain.link/) is a decentralized oracle network and is blockchain protocol agnostic
- What makes a blockchain
- **Decentralized**
  - No central controlling source
- **Transparency and flexibility**
  - Everything done on the blockchain is visible to everyone
  - Every plays by the same rules
  - Its sudo anonymous
- **Speed and efficiency**
  - Because blockchain is verified, withdrawals are super fast
- **Remove the conflict of interest**
  - e.g an insurance company is in the market of marking money. Having to payout is a conflict of interest
    they. They dont want to payout if they dont want have to
- **Security and immutability**
  - Cant be tampered with
  - Huge security benefits
  - As long a one node stays up you data is safe
- **Trustless and trust minimised agreements**

  - Move from brnad bsaed to math based agreements
  - There is no trust involved

- This all adds up to freedom and trustless
- **DAOs** - Decentralised Autonymous Organisations
  - all governance is done on chain

**Metamask is a wallet**

- Use a spearate account for dev and live
