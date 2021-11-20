---
slug: "/blockchain-day-2"
title: "Blockchain: day 2"
short: "Etherium course"
date: "2021-11-19"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["etherium", "blockchain", "solidity", "hundred-days-of"]
focus: "fundamentals"
---

## Solidity course

[[youtube: M576WGiDBdQ]]

**[Code](https://github.com/smartcontractkit/full-blockchain-solidity-course-py)**

**start: 29min**

**stop: 1hr 1min**

**Notes**

### Welcome to blockchain

**Metamask**

- You have public and private keys.
- Public keys allow you to view your account on Etherscan
- The privte key allows people to take your coins
- Gives access to various networks, including test networks
- Testnet faucet gives us access to free (pretend) etherium, the [Rinkeby faucet](https://faucet.rinkeby.io/) does this with a tweet
- Etherscan is a block explorer, a block explorer allows us to view transactions on a blockchain

**Gas**

- Gas is a unit of computational neasure. The more computation a transaction uses the more gasd you have to pay for.
- Every transaction that happens on chain pays a gas fee to node operators.
- This is gonna change soon
- Any time you want to change the chain you have to pay
- The of amount of "gas" used and how much you pay depends on how "computationally expensive" your transaction is
- Send ETH to 1 address is cheaper that to 1000
- Gas prices are set in GWEI.
- You can set higher gas prices to incentivise the nodes to include your changes. Use [Eth gas station]() to figure out the gas price to set

  **Understanding blockchain technology**

- Ethereum used keccak256 for its hashing algo
- HAsh: Unique fixed length string to identify a piece of data
- 1 block consists of block number, nonse, previous (hash of the previous block) and the data
- The miners are looking to solve a problem. In Etherium based chains its to find 4 zeros at the start of a block. This is acheived by changing the nonse. Done by brute force.
- Genesis block is hte first block in a chain

  **Nonse**

  - A "number used once" to find the "solution" to the blockchain problem
  - Its also used to define the transaction number for an account/address
