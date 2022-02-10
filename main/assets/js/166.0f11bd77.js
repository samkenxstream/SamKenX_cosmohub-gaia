(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{627:function(e,t,a){"use strict";a.r(t);var o=a(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"validator-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validator-faq"}},[e._v("#")]),e._v(" Validator FAQ")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Disclaimer")]),e._v(" "),a("p",[e._v("This is work in progress. Mechanisms and values are susceptible to change.")])]),e._v(" "),a("h2",{attrs:{id:"general-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-concepts"}},[e._v("#")]),e._v(" General Concepts")]),e._v(" "),a("h3",{attrs:{id:"what-is-a-cosmos-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-cosmos-validator"}},[e._v("#")]),e._v(" What is a Cosmos validator?")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/getting-started/what-is-gaia.html"}},[e._v("Cosmos Hub")]),e._v(" is based on "),a("a",{attrs:{href:"https://docs.tendermint.com/master/introduction/what-is-tendermint.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint"),a("OutboundLink")],1),e._v(" that relies on a set of validators to secure the network. The role of validators is to run a full node and participate in consensus by broadcasting votes that contain cryptographic signatures signed by the validator's private key. Validators commit new blocks in the blockchain and receive revenue in exchange for their work. Validators must also participate in governance by voting on proposals. Validators are weighted according to their total stake.")],1),e._v(" "),a("h3",{attrs:{id:"what-is-staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-staking"}},[e._v("#")]),e._v(" What is staking?")]),e._v(" "),a("p",[e._v("The Cosmos Hub is a public Proof-Of-Stake (PoS) blockchain, meaning that the weight of validators is determined by the amount of staking tokens (ATOM) bonded as collateral. These ATOM tokens can be self-delegated directly by the validator or delegated to the validator by other ATOM holders.")]),e._v(" "),a("p",[e._v("Any user in the system can declare their intention to become a validator by sending a "),a("code",[e._v("create-validator")]),e._v(" transaction to become validator candidates.")]),e._v(" "),a("p",[e._v("The weight (i.e. voting power) of a validator determines whether they are an active validator. The active validator set is limited to "),a("a",{attrs:{href:"https://www.mintscan.io/cosmos/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("an amount"),a("OutboundLink")],1),e._v(" that changes over time.")]),e._v(" "),a("h3",{attrs:{id:"what-is-a-full-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-full-node"}},[e._v("#")]),e._v(" What is a full node?")]),e._v(" "),a("p",[e._v("A full node is a server running a chain's "),a("em",[e._v("binary")]),e._v(" (its software) that fully validates transactions and blocks of a blockchain and keeps a full record of all historic activity. A full node is distinct from a pruned node that processes only block headers and a small subset of transactions. Running a full node requires more resources than a pruned node. Validators can decide to run either a full node or a pruned node, but they need to make sure they retain enough blocks to be able to validate new blocks.")]),e._v(" "),a("p",[e._v("Of course, it is possible and encouraged for users to run full nodes even if they do not plan to be validators.")]),e._v(" "),a("p",[e._v("You can find more details about the requirements in the "),a("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[e._v("Joining Mainnet Tutorial")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"what-is-a-delegator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-delegator"}},[e._v("#")]),e._v(" What is a delegator?")]),e._v(" "),a("p",[e._v("Delegators are ATOM holders who cannot, or do not want to, run a validator themselves. ATOM holders can delegate ATOM to a validator and obtain a part of their revenue in exchange. For details on how revenue is distributed, see "),a("a",{attrs:{href:"#what-is-the-incentive-to-stake?"}},[e._v("What is the incentive to stake?")]),e._v(" and "),a("a",{attrs:{href:"#what-are-validators-commission?"}},[e._v("What are validators commission?")]),e._v(" in this document.")]),e._v(" "),a("p",[e._v("Because delegators share revenue with their validators, they also share risks. If a validator misbehaves, each of their delegators are partially slashed in proportion to their delegated stake. This penalty is one of the reasons why delegators must perform due diligence on validators before delegating. Spreading their stake over multiple validators is another layer of protection.")]),e._v(" "),a("p",[e._v("Delegators play a critical role in the system, as they are responsible for choosing validators. Being a delegator is not a passive role. Delegators must actively monitor the actions of their validators and participate in governance. For details on being a delegator, read the "),a("a",{attrs:{href:"https://hub.cosmos.network/main/delegators/delegator-faq.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delegator FAQ"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"becoming-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#becoming-a-validator"}},[e._v("#")]),e._v(" Becoming a Validator")]),e._v(" "),a("h3",{attrs:{id:"how-to-become-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-become-a-validator"}},[e._v("#")]),e._v(" How to become a validator?")]),e._v(" "),a("p",[e._v("Any participant in the network can signal that they want to become a validator by sending a "),a("code",[e._v("create-validator")]),e._v(" transaction, where they must fill out the following parameters:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Validator's "),a("code",[e._v("PubKey")]),e._v(":")]),e._v(" The private key associated with this Tendermint "),a("code",[e._v("PubKey")]),e._v(" is used to sign "),a("em",[e._v("prevotes")]),e._v(" and "),a("em",[e._v("precommits")]),e._v(".")]),e._v(" "),a("li",[a("strong",[e._v("Validator's Address:")]),e._v(" Application level address that is used to publicly identify your validator. The private key associated with this address is used to delegate, unbond, claim rewards, and participate in governance.")]),e._v(" "),a("li",[a("strong",[e._v("Validator's name (moniker)")])]),e._v(" "),a("li",[a("strong",[e._v("Validator's website (Optional)")])]),e._v(" "),a("li",[a("strong",[e._v("Validator's description (Optional)")])]),e._v(" "),a("li",[a("strong",[e._v("Initial commission rate")]),e._v(": The commission rate on block rewards and fees charged to delegators.")]),e._v(" "),a("li",[a("strong",[e._v("Maximum commission:")]),e._v(" The maximum commission rate that this validator can charge. This parameter is fixed and cannot be changed after the "),a("code",[e._v("create-validator")]),e._v(" transaction is processed.")]),e._v(" "),a("li",[a("strong",[e._v("Commission max change rate:")]),e._v(" The maximum daily increase of the validator commission. This parameter is fixed cannot be changed after the "),a("code",[e._v("create-validator")]),e._v(" transaction is processed.")]),e._v(" "),a("li",[a("strong",[e._v("Minimum self-delegation:")]),e._v(" Minimum amount of ATOM the validator requires to have bonded at all time. If the validator's self-delegated stake falls below this limit, their entire staking pool is unbonded.")])]),e._v(" "),a("p",[e._v("After a validator is created, ATOM holders can delegate ATOM to them, effectively adding stake to the validator's pool. The total stake of an address is the combination of ATOM bonded by delegators and ATOM self-bonded by the validator.")]),e._v(" "),a("p",[e._v("From all validator candidates that signaled themselves, the 150 validators with the most total stake are the designated "),a("strong",[e._v("validators")]),e._v(". If a validator's total stake falls below the top 150, then that validator loses its validator privileges. The validator cannot participate in consensus or generate rewards until the stake is high enough to be in the top 150. Over time, the maximum number of validators may be increased via on-chain governance proposal.")]),e._v(" "),a("h2",{attrs:{id:"testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testnet"}},[e._v("#")]),e._v(" Testnet")]),e._v(" "),a("h3",{attrs:{id:"how-can-i-join-the-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-join-the-testnet"}},[e._v("#")]),e._v(" How can I join the testnet?")]),e._v(" "),a("p",[e._v("The testnet is a great environment to test your validator setup before launch.")]),e._v(" "),a("p",[e._v("Testnet participation is a great way to signal to the community that you are ready and able to operate a validator. For details, see "),a("RouterLink",{attrs:{to:"/hub-tutorials/join-testnet.html"}},[e._v("Join the Public Testnet")]),e._v(" documentation.")],1),e._v(" "),a("h2",{attrs:{id:"additional-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-concepts"}},[e._v("#")]),e._v(" Additional Concepts")]),e._v(" "),a("h3",{attrs:{id:"what-are-the-different-types-of-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-different-types-of-keys"}},[e._v("#")]),e._v(" What are the different types of keys?")]),e._v(" "),a("p",[e._v("There are two types of keys:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Tendermint key")]),e._v(": A unique key that is used to sign consensus votes.\n"),a("ul",[a("li",[e._v("It is associated with a public key "),a("code",[e._v("cosmosvalconspub")]),e._v(" (To get this value, run "),a("code",[e._v("gaiad tendermint show-validator")]),e._v(")")]),e._v(" "),a("li",[e._v("It is generated when the node is created with "),a("code",[e._v("gaiad init")]),e._v(".")])])]),e._v(" "),a("li",[a("strong",[e._v("Application key")]),e._v(": This key is created from the "),a("code",[e._v("gaiad")]),e._v(" binary and is used to sign transactions. Application keys are associated with a public key that is prefixed by "),a("code",[e._v("cosmospub")]),e._v(" and an address that is prefixed by "),a("code",[e._v("cosmos")]),e._v(".")])]),e._v(" "),a("p",[e._v("The Tendermint key and the application key are derived from account keys that are generated by the "),a("code",[e._v("gaiad keys add")]),e._v(" command.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" A validator's operator key is directly tied to an application key and uses the "),a("code",[e._v("cosmosvaloper")]),e._v(" and "),a("code",[e._v("cosmosvaloperpub")]),e._v(" prefixes that are reserved solely for this purpose.")]),e._v(" "),a("h3",{attrs:{id:"what-are-the-different-states-a-validator-can-be-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-different-states-a-validator-can-be-in"}},[e._v("#")]),e._v(" What are the different states a validator can be in?")]),e._v(" "),a("p",[e._v("After a validator is created with a "),a("code",[e._v("create-validator")]),e._v(" transaction, the validator is in one of three states:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("in validator set")]),e._v(": Validator is in the active set and participates in consensus. The validator is earning rewards and can be slashed for misbehavior.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("jailed")]),e._v(": Validator misbehaved and is in jail, i.e. outside of the validator set.")]),e._v(" "),a("ul",[a("li",[e._v("If the jailing is due to being offline for too long (i.e. having missed more than "),a("code",[e._v("95%")]),e._v(" out of the last "),a("code",[e._v("10,000")]),e._v(" blocks), the validator can send an "),a("code",[e._v("unjail")]),e._v(" transaction in order to re-enter the validator set.")]),e._v(" "),a("li",[e._v("If the jailing is due to double signing, the validator cannot unjail.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("unbonded")]),e._v(": Validator is not in the active set, and therefore not signing blocs. The validator cannot be slashed and does not earn any reward. It is still possible to delegate ATOM to an unbonded validator. Undelegating from an "),a("code",[e._v("unbonded")]),e._v(" validator is immediate, meaning that the tokens are not subject to the unbonding period.")])])]),e._v(" "),a("h3",{attrs:{id:"what-is-self-delegation-how-can-i-increase-my-self-delegation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-self-delegation-how-can-i-increase-my-self-delegation"}},[e._v("#")]),e._v(" What is self-delegation? How can I increase my self-delegation?")]),e._v(" "),a("p",[e._v("Self-delegation is a delegation of ATOM from a validator to themselves. The delegated amount can be increased by sending a "),a("code",[e._v("delegate")]),e._v(" transaction from your validator's "),a("code",[e._v("application")]),e._v(" application key.")]),e._v(" "),a("h3",{attrs:{id:"is-there-a-minimum-amount-of-atom-that-must-be-delegated-to-be-an-active-bonded-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-there-a-minimum-amount-of-atom-that-must-be-delegated-to-be-an-active-bonded-validator"}},[e._v("#")]),e._v(" Is there a minimum amount of ATOM that must be delegated to be an active (bonded) validator?")]),e._v(" "),a("p",[e._v("The minimum is 1 ATOM. But the network is currently secured by much higher values. You can check the minimum required ATOM to become part of the active validator set on the "),a("a",{attrs:{href:"https://www.mintscan.io/cosmos/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mintscan validator page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"how-do-delegators-choose-their-validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-delegators-choose-their-validators"}},[e._v("#")]),e._v(" How do delegators choose their validators?")]),e._v(" "),a("p",[e._v("Delegators are free to choose validators according to their own subjective criteria. Selection criteria includes:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Amount of self-delegated ATOM:")]),e._v(" Number of ATOM a validator self-delegated to themselves. A validator with a higher amount of self-delegated ATOM indicates that the validator is sharing the risk and experienced consequences for their actions.")]),e._v(" "),a("li",[a("strong",[e._v("Amount of delegated ATOM:")]),e._v(" Total number of ATOM delegated to a validator. A high voting power shows that the community trusts this validator. Larger validators also decrease the decentralization of the network, so delegators are suggested to consider delegating to smaller validators.")]),e._v(" "),a("li",[a("strong",[e._v("Commission rate:")]),e._v(" Commission applied on revenue by validators before the revenue is distributed to their delegators.")]),e._v(" "),a("li",[a("strong",[e._v("Track record:")]),e._v(" Delegators review the track record of the validators they plan to delegate to. This track record includes past votes on proposals and historical average uptime.")]),e._v(" "),a("li",[a("strong",[e._v("Community contributions:")]),e._v(" Another (more subjective) criteria is the work that validators have contributed to the community, such as educational content, participation in the community channels, contributions to open source software, etc.")])]),e._v(" "),a("p",[e._v("Apart from these criteria, validators send a "),a("code",[e._v("create-validator")]),e._v(" transaction to signal a website address to complete their resume. Validators must build reputation one way or another to attract delegators. For example, a good practice for validators is to have a third party audit their setup. Note though, that the Tendermint team does not approve or conduct any audits themselves. For more information on due diligence, see the "),a("a",{attrs:{href:"https://medium.com/@interchain_io/3d0faf10ce6f",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Delegator’s Guide to Staking"),a("OutboundLink")],1),e._v(" blog post.")]),e._v(" "),a("h2",{attrs:{id:"responsibilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responsibilities"}},[e._v("#")]),e._v(" Responsibilities")]),e._v(" "),a("h3",{attrs:{id:"do-validators-need-to-be-publicly-identified"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#do-validators-need-to-be-publicly-identified"}},[e._v("#")]),e._v(" Do validators need to be publicly identified?")]),e._v(" "),a("p",[e._v("No, they do not. Each delegator can value validators based on their own criteria. Validators are able to register a website address when they nominate themselves so that they can advertise their operation as they see fit. Some delegators prefer a website that clearly displays the team operating the validator and their resume, while other validators might prefer to be anonymous validators with positive track records.")]),e._v(" "),a("h3",{attrs:{id:"what-are-the-responsibilities-of-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-responsibilities-of-a-validator"}},[e._v("#")]),e._v(" What are the responsibilities of a validator?")]),e._v(" "),a("p",[e._v("Validators have two main responsibilities:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Be able to constantly run a correct version of the software:")]),e._v(" Validators must ensure that their servers are always online and their private keys are not compromised.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Actively participate in governance:")]),e._v(" Validators are required to vote on every proposal.")])])]),e._v(" "),a("p",[e._v("Additionally, validators are expected to be active members of the community. Validators must always be up-to-date with the current state of the ecosystem so that they can easily adapt to any change.")]),e._v(" "),a("h3",{attrs:{id:"what-does-participate-in-governance-entail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-participate-in-governance-entail"}},[e._v("#")]),e._v(" What does 'participate in governance' entail?")]),e._v(" "),a("p",[e._v("Validators and delegators on the Cosmos Hub can vote on proposals to change operational parameters (such as the block gas limit), coordinate upgrades, or make a decision on any given matter.")]),e._v(" "),a("p",[e._v("Validators play a special role in the governance system. As pillars of the system, validators are required to vote on every proposal. It is especially important since delegators who do not vote inherit the vote of their validator.")]),e._v(" "),a("h3",{attrs:{id:"what-does-staking-imply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-does-staking-imply"}},[e._v("#")]),e._v(" What does staking imply?")]),e._v(" "),a("p",[e._v("Staking ATOM can be thought of as a safety deposit on validation activities. When a validator or a delegator wants to retrieve part or all of their deposit, they send an "),a("code",[e._v("unbonding")]),e._v(" transaction. Then, ATOM undergoes a "),a("strong",[e._v("3-week unbonding period")]),e._v(" during which they are liable to being slashed for potential misbehaviors committed by the validator before the unbonding process started.")]),e._v(" "),a("p",[e._v("Validators, and by association delegators, receive block rewards, fees, and have the right to participate in governance. If a validator misbehaves, a certain portion of their total stake is slashed. This means that every delegator that bonded ATOM to this validator gets penalized in proportion to their bonded stake. Delegators are therefore incentivized to delegate to validators that they anticipate will function safely.")]),e._v(" "),a("h3",{attrs:{id:"can-a-validator-run-away-with-their-delegators-atom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-a-validator-run-away-with-their-delegators-atom"}},[e._v("#")]),e._v(" Can a validator run away with their delegators' ATOM?")]),e._v(" "),a("p",[e._v("By delegating to a validator, a user delegates voting power. The more voting power a validator have, the more weight they have in the consensus and governance processes. This does not mean that the validator has custody of their delegators' ATOM. "),a("strong",[e._v("A validator cannot run away with its delegator's funds")]),e._v(".")]),e._v(" "),a("p",[e._v("Even though delegated funds cannot be stolen by their validators, delegators' tokens can still be slashed by a small percentage if their validator suffers a "),a("a",{attrs:{href:"#what-are-the-slashing-conditions"}},[e._v("slashing event")]),e._v(", which is why we encourage due diligence when "),a("a",{attrs:{href:"#how-do-delegators-choose-their-validators"}},[e._v("selecting a validator")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"how-often-is-a-validator-chosen-to-propose-the-next-block-does-frequency-increase-with-the-quantity-of-bonded-atom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-often-is-a-validator-chosen-to-propose-the-next-block-does-frequency-increase-with-the-quantity-of-bonded-atom"}},[e._v("#")]),e._v(" How often is a validator chosen to propose the next block? Does frequency increase with the quantity of bonded ATOM?")]),e._v(" "),a("p",[e._v("The validator that is selected to propose the next block is called the proposer. Each proposer is selected deterministically. The frequency of being chosen is proportional to the voting power (i.e. amount of bonded ATOM) of the validator. For example, if the total bonded stake across all validators is 100 ATOM and a validator's total stake is 10 ATOM, then this validator is the proposer ~10% of the blocks.")]),e._v(" "),a("h3",{attrs:{id:"are-validators-of-the-cosmos-hub-required-to-validate-other-zones-in-the-cosmos-ecosystem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#are-validators-of-the-cosmos-hub-required-to-validate-other-zones-in-the-cosmos-ecosystem"}},[e._v("#")]),e._v(" Are validators of the Cosmos Hub required to validate other zones in the Cosmos ecosystem?")]),e._v(" "),a("p",[e._v("This depends, currently no validators are required to validate other blockchains. But when the first version of "),a("a",{attrs:{href:"https://blog.cosmos.network/interchain-security-is-coming-to-the-cosmos-hub-f144c45fb035",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Security"),a("OutboundLink")],1),e._v(" is launched on the Cosmos Hub, delegators can vote to have certain blockchains secured via Interchain Security. In those cases, validators are required to validate on these chains as well.")]),e._v(" "),a("h2",{attrs:{id:"incentives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incentives"}},[e._v("#")]),e._v(" Incentives")]),e._v(" "),a("h3",{attrs:{id:"what-is-the-incentive-to-stake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-incentive-to-stake"}},[e._v("#")]),e._v(" What is the incentive to stake?")]),e._v(" "),a("p",[e._v("Each member of a validator's staking pool earns different types of revenue:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Block rewards:")]),e._v(" Native tokens of applications (e.g. ATOM on the Cosmos Hub) run by validators are inflated to produce block provisions. These provisions exist to incentivize ATOM holders to bond their stake. Non-bonded ATOM are diluted over time.")]),e._v(" "),a("li",[a("strong",[e._v("Transaction fees:")]),e._v(" The Cosmos Hub maintains an allow list of tokens that are accepted as fee payment. The initial fee token is the "),a("code",[e._v("atom")]),e._v(".")])]),e._v(" "),a("p",[e._v("This total revenue is divided among validators' staking pools according to each validator's weight. Then, within each validator's staking pool the revenue is divided among delegators in proportion to each delegator's stake. A commission on delegators' revenue is applied by the validator before it is distributed.")]),e._v(" "),a("h3",{attrs:{id:"what-is-a-validator-commission"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-validator-commission"}},[e._v("#")]),e._v(" What is a validator commission?")]),e._v(" "),a("p",[e._v("Revenue received by a validator's pool is split between the validator and their delegators. The validator can apply a commission on the part of the revenue that goes to their delegators. This commission is set as a percentage. Each validator is free to set their initial commission, maximum daily commission change rate, and maximum commission. The Cosmos Hub enforces the parameter that each validator sets. The maximum commission rate is fixed and cannot be changed. However, the commission rate itself can be changed after the validator is created as long as it does not exceed the maximum commission.")]),e._v(" "),a("h3",{attrs:{id:"what-is-the-incentive-to-run-a-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-incentive-to-run-a-validator"}},[e._v("#")]),e._v(" What is the incentive to run a validator?")]),e._v(" "),a("p",[e._v("Validators earn proportionally more revenue than their delegators because of the commission they take on the staking rewards from their delegators.")]),e._v(" "),a("p",[e._v("Validators also play a major role in governance. If a delegator does not vote, they inherit the vote from their validator. This voting inheritance gives validators a major responsibility in the ecosystem.")]),e._v(" "),a("h3",{attrs:{id:"how-are-block-rewards-distributed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-are-block-rewards-distributed"}},[e._v("#")]),e._v(" How are block rewards distributed?")]),e._v(" "),a("p",[e._v("Block rewards are distributed proportionally to all validators relative to their voting power. This means that even though each validator gains ATOM with each reward, all validators maintain equal weight over time.")]),e._v(" "),a("p",[e._v("For example, 10 validators have equal voting power and a commission rate of 1%. For this example, the reward for a block is 1000 ATOM and each validator has 20% of self-bonded ATOM. These tokens do not go directly to the proposer. Instead, the tokens are evenly spread among validators. So now each validator's pool has 100 ATOM. These 100 ATOM are distributed according to each participant's stake:")]),e._v(" "),a("ul",[a("li",[e._v("Commission: "),a("code",[e._v("100*80%*1% = 0.8 ATOM")])]),e._v(" "),a("li",[e._v("Validator gets: "),a("code",[e._v("100\\*20% + Commission = 20.8 ATOM")])]),e._v(" "),a("li",[e._v("All delegators get: "),a("code",[e._v("100\\*80% - Commission = 79.2 ATOM")])])]),e._v(" "),a("p",[e._v("Then, each delegator can claim their part of the 79.2 ATOM in proportion to their stake in the validator's staking pool.")]),e._v(" "),a("h3",{attrs:{id:"how-are-fees-distributed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-are-fees-distributed"}},[e._v("#")]),e._v(" How are fees distributed?")]),e._v(" "),a("p",[e._v("Fees are similarly distributed with the exception that the block proposer can get a bonus on the fees of the block they propose if the proposer includes more than the strict minimum of required precommits.")]),e._v(" "),a("p",[e._v("When a validator is selected to propose the next block, the validator must include at least 2/3 precommits of the previous block. However, an incentive to include more than 2/3 precommits is a bonus. The bonus is linear: it ranges from 1% if the proposer includes 2/3rd precommits (minimum for the block to be valid) to 5% if the proposer includes 100% precommits. Of course the proposer must not wait too long or other validators may timeout and move on to the next proposer. As such, validators have to find a balance between wait-time to get the most signatures and risk of losing out on proposing the next block. This mechanism aims to incentivize non-empty block proposals, better networking between validators, and mitigates censorship.")]),e._v(" "),a("p",[e._v("For a concrete example to illustrate the aforementioned concept, there are 10 validators with equal stake. Each validator applies a 1% commission rate and has 20% of self-delegated ATOM. Now comes a successful block that collects a total of 1025.51020408 ATOM in fees.")]),e._v(" "),a("p",[e._v("First, a 2% tax is applied. The corresponding ATOM go to the reserve pool. The reserve pool's funds can be allocated through governance to fund bounties and upgrades.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("2% * 1025.51020408 = 20.51020408")]),e._v(" ATOM go to the reserve pool.")])]),e._v(" "),a("p",[e._v("1005 ATOM now remain. For this example, the proposer included 100% of the signatures in its block so the proposer obtains the full bonus of 5%.")]),e._v(" "),a("p",[e._v("To solve this simple equation to find the reward R for each validator:")]),e._v(" "),a("p",[a("code",[e._v("9*R + R + R*5% = 1005 ⇔ R = 1005/10.05 = 100")])]),e._v(" "),a("ul",[a("li",[e._v("For the proposer validator:\n"),a("ul",[a("li",[e._v("The pool obtains "),a("code",[e._v("R + R * 5%")]),e._v(": 105 ATOM")]),e._v(" "),a("li",[e._v("Commission: "),a("code",[e._v("105 * 80% * 1%")]),e._v(" = 0.84 ATOM")]),e._v(" "),a("li",[e._v("Validator's reward: "),a("code",[e._v("105 * 20% + Commission")]),e._v(" = 21.84 ATOM")]),e._v(" "),a("li",[e._v("Delegators' rewards: "),a("code",[e._v("105 * 80% - Commission")]),e._v(" = 83.16 ATOM (each delegator is able to claim its portion of these rewards in proportion to their stake)")])])]),e._v(" "),a("li",[e._v("For each non-proposer validator:\n"),a("ul",[a("li",[e._v("The pool obtains R: 100 ATOM")]),e._v(" "),a("li",[e._v("Commission: "),a("code",[e._v("100 * 80% * 1%")]),e._v(" = 0.8 ATOM")]),e._v(" "),a("li",[e._v("Validator's reward: "),a("code",[e._v("100 * 20% + Commission")]),e._v(" = 20.8 ATOM")]),e._v(" "),a("li",[e._v("Delegators' rewards: "),a("code",[e._v("100 * 80% - Commission")]),e._v(" = 79.2 ATOM (each delegator is able to claim their portion of these rewards in proportion to their stake)")])])])]),e._v(" "),a("h3",{attrs:{id:"what-are-the-slashing-conditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-slashing-conditions"}},[e._v("#")]),e._v(" What are the slashing conditions?")]),e._v(" "),a("p",[e._v("If a validator misbehaves, their delegated stake is partially slashed. Two faults can result in slashing of funds for a validator and their delegators:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Double signing:")]),e._v(" If someone reports on chain A that a validator signed two blocks at the same height on chain A and chain B, and if chain A and chain B share a common ancestor, then this validator gets slashed by 5% on chain A.")]),e._v(" "),a("li",[a("strong",[e._v("Downtime:")]),e._v(" If a validator misses more than "),a("code",[e._v("95%")]),e._v(" of the last "),a("code",[e._v("10,000")]),e._v(" blocks (roughly ~19 hours), they are slashed by 0.01%.")])]),e._v(" "),a("h3",{attrs:{id:"are-validators-required-to-self-delegate-atom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#are-validators-required-to-self-delegate-atom"}},[e._v("#")]),e._v(" Are validators required to self-delegate ATOM?")]),e._v(" "),a("p",[e._v("Yes, they do need to self-delegate at least "),a("code",[e._v("1 atom")]),e._v(". Even though there is no obligation for validators to self-delegate more than "),a("code",[e._v("1 atom")]),e._v(", delegators want their validator to have more self-delegated ATOM in their staking pool. In other words, validators share the risk.")]),e._v(" "),a("p",[e._v("In order for delegators to have some guarantee about how much shared risk their validator has, the validator can signal a minimum amount of self-delegated ATOM. If a validator's self-delegation goes below the limit that it predefined, this validator and all of its delegators are unbonded.")]),e._v(" "),a("p",[e._v("Note however that it's possible that some validators decide to self-delegate via a different address for security reasons.")]),e._v(" "),a("h3",{attrs:{id:"how-to-prevent-concentration-of-stake-in-the-hands-of-a-few-top-validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-prevent-concentration-of-stake-in-the-hands-of-a-few-top-validators"}},[e._v("#")]),e._v(" How to prevent concentration of stake in the hands of a few top validators?")]),e._v(" "),a("p",[e._v("The community is expected to behave in a smart and self-preserving way. When a mining pool in Bitcoin gets too much mining power the community usually stops contributing to that pool. The Cosmos Hub relies on the same effect. Additionally, when delegaters switch to another validator, they are not subject to the unbonding period, which removes any barrier to quickly redelegating tokens in service of improving decentralization.")]),e._v(" "),a("h2",{attrs:{id:"technical-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-requirements"}},[e._v("#")]),e._v(" Technical Requirements")]),e._v(" "),a("h3",{attrs:{id:"what-are-hardware-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-hardware-requirements"}},[e._v("#")]),e._v(" What are hardware requirements?")]),e._v(" "),a("p",[e._v("A modest level of hardware specifications is initially required and rises as network use increases. Participating in the testnet is the best way to learn more. You can find the current hardware recommendations in the "),a("RouterLink",{attrs:{to:"/hub-tutorials/join-mainnet.html"}},[e._v("Joining Mainnet documentation")]),e._v(".")],1),e._v(" "),a("p",[e._v("Validators are recommended to set up "),a("a",{attrs:{href:"https://docs.tendermint.com/master/nodes/validators.html#setting-up-a-validator",target:"_blank",rel:"noopener noreferrer"}},[e._v("sentry nodes"),a("OutboundLink")],1),e._v(" to protect your validator node from DDoS attacks.")]),e._v(" "),a("h3",{attrs:{id:"what-are-software-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-software-requirements"}},[e._v("#")]),e._v(" What are software requirements?")]),e._v(" "),a("p",[e._v("In addition to running a Cosmos Hub node, validators are expected to implement monitoring, alerting, and management solutions. There are "),a("a",{attrs:{href:"https://medium.com/solar-labs-team/cosmos-how-to-monitoring-your-validator-892a46298722",target:"_blank",rel:"noopener noreferrer"}},[e._v("several tools"),a("OutboundLink")],1),e._v(" that you can use.")]),e._v(" "),a("h3",{attrs:{id:"what-are-bandwidth-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-bandwidth-requirements"}},[e._v("#")]),e._v(" What are bandwidth requirements?")]),e._v(" "),a("p",[e._v("The Cosmos network has the capacity for very high throughput relative to chains like Ethereum or Bitcoin.")]),e._v(" "),a("p",[e._v("We recommend that the data center nodes connect only to trusted full nodes in the cloud or other validators that know each other socially. This connection strategy relieves the data center node from the burden of mitigating denial-of-service attacks.")]),e._v(" "),a("p",[e._v("Ultimately, as the network becomes more heavily used, multigigabyte per day bandwidth is very realistic.")]),e._v(" "),a("h3",{attrs:{id:"how-to-handle-key-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-handle-key-management"}},[e._v("#")]),e._v(" How to handle key management?")]),e._v(" "),a("p",[e._v("Validators are expected to run an HSM that supports ed25519 keys. Here are potential options:")]),e._v(" "),a("ul",[a("li",[e._v("YubiHSM 2")]),e._v(" "),a("li",[e._v("Ledger Nano S")]),e._v(" "),a("li",[e._v("Ledger BOLOS SGX enclave")]),e._v(" "),a("li",[e._v("Thales nShield support")])]),e._v(" "),a("p",[e._v("The Interchain Foundation does not recommend one solution above the other. The community is encouraged to bolster the effort to improve HSMs and the security of key management.")]),e._v(" "),a("h3",{attrs:{id:"what-can-validators-expect-in-terms-of-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-can-validators-expect-in-terms-of-operations"}},[e._v("#")]),e._v(" What can validators expect in terms of operations?")]),e._v(" "),a("p",[e._v("Running an effective operation is key to avoiding unexpected unbonding or slashing. Operations must be able to respond to attacks and outages, as well as maintain security and isolation in the data center.")]),e._v(" "),a("h3",{attrs:{id:"what-are-the-maintenance-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-maintenance-requirements"}},[e._v("#")]),e._v(" What are the maintenance requirements?")]),e._v(" "),a("p",[e._v("Validators are expected to perform regular software updates to accommodate chain upgrades and bug fixes. It is suggested to consider using "),a("a",{attrs:{href:"https://docs.cosmos.network/master/run-node/cosmovisor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmovisor"),a("OutboundLink")],1),e._v(" to partially automate this process.")]),e._v(" "),a("p",[e._v("During an chain upgrade, progress is discussed in a private channel in the "),a("a",{attrs:{href:"https://discord.gg/cosmosnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Developer Discord"),a("OutboundLink")],1),e._v(". If your validator is in the active set we encourage you to request access to that channel by contacting a moderator.")]),e._v(" "),a("h3",{attrs:{id:"how-can-validators-protect-themselves-from-denial-of-service-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-can-validators-protect-themselves-from-denial-of-service-attacks"}},[e._v("#")]),e._v(" How can validators protect themselves from denial-of-service attacks?")]),e._v(" "),a("p",[e._v("Denial-of-service attacks occur when an attacker sends a flood of internet traffic to an IP address to prevent the server at the IP address from connecting to the internet.")]),e._v(" "),a("p",[e._v("An attacker scans the network, tries to learn the IP address of various validator nodes, and disconnects them from communication by flooding them with traffic.")]),e._v(" "),a("p",[e._v("One recommended way to mitigate these risks is for validators to carefully structure their network topology using a sentry node architecture.")]),e._v(" "),a("p",[e._v("Validator nodes are expected to connect only to full nodes they trust because they operate the full nodes themselves or the trust full nodes are run by other validators they know socially. A validator node is typically run in a data center. Most data centers provide direct links to the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This mitigation shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and can require that new sentry nodes are spun up or activated to mitigate attacks on existing ones.")]),e._v(" "),a("p",[e._v("Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet-based attack cannot disturb them directly. This strategy ensures that validator block proposals and votes have a much higher change to make it to the rest of the network.")]),e._v(" "),a("p",[e._v("For more sentry node details, see the "),a("a",{attrs:{href:"https://docs.tendermint.com/master/nodes/validators.html#setting-up-a-validator",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Documentation"),a("OutboundLink")],1),e._v(" or the "),a("a",{attrs:{href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sentry Node Architecture Overview"),a("OutboundLink")],1),e._v(" on the forum.")])])}),[],!1,null,null,null);t.default=i.exports}}]);