---
slug: "/blockchain-day-3"
title: "Blockchain: day 3"
short: "Etherium course, what the fuck is mining"
date: "2021-11-19"
featuredImage: "../../images/posts/plan-2020/2020-plan.jpg"
tags: ["etherium", "blockchain", "solidity", "hundred-days-of"]
focus: "fundamentals"
---

## Solidity course

[[youtube: M576WGiDBdQ]]

**[Code](https://github.com/smartcontractkit/full-blockchain-solidity-course-py)**

**start: 1hr 1min**

**stop: 1hr 31min**

**Notes**

### Welcome to blockchain

**Signing transactions and private keys**

- **Private key** is only known to the holder, its used to sign transactions
- Transactions can be verified with the public key
- Your acount address is derived from a hash of your public key
- Often when the prviate key is needed it will be required in hexidecimal format. Just prepend `0x` to the start of it

- Traditional apps are run on a centralised system, even if they are run on multiple servers, those servers are owned by the same people.
- A blockchain is run on lots of independant nodes
- A "node" is a single instance in a decentralized network
- Anyone can join the network

- Blockchain is resiliant. They are run by the network of nodes not a single entity.

**Consensus**

- **Consensus** is mechanism used to agree on the state of the blockchain.
- **proof-of-work** alogrythm (mining) is a _sybil resistance mechanism_. This is a mechanism to protect against someone making a load of fake nodes to game the system
- **proof-of-work** and **proof-of-stake** are both Sybil resistance mechanisms
- Blocktime (time between blocks being published) can be changed by changing how difficult the problem is
- Proof of work needs to be combined with a chain selection rule.
- Chain selection algorithm helps to choose which is the correct/real chain to choose.
- The "Nakomoto consensus". Basically this is the longest chain
- Proof of work is a **piece** of the **consensus protocol** that bitcoin and etherium v1 use
- Who gets paid?
- In proof of work they are called **miners**
- In proof of stake they are called **validators**
- Proof of works uses lots of energy
- Nodes compete against each other to complete the riddles so that they get the reward
- Gas fees are paid by the user making the transaction

**Attacks**

**Sybil attack**

- bad actor creates loads of sudo anonymous accoutns to try and influence the blockchain
- This is really trick

**51% attack**

- **Proof of stack** nodes put up some collateral as a sybil resistance mechanism.
- If they misbehve they loose there money
- Nodes are randomly chosen to validate the transaction. This means there is no race and so it uses less electricity.
- **Layer 1**: BAse layer blockchain implementation
- **Layer 2**: Anything built on a layer 1
- Shading and roll ups are solutions to scalability on the blockchain
