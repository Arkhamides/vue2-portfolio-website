<script>
export default {
    name: "ada",
};
</script>

<template>
<div class="root">
    <div class="wrapper">
        <div id="skew1" class="cus-div">
            <div class="content">
                <h1 class="h1">ADA</h1>
            </div>
        </div>
        <div id="skew2" class="cus-div">
            <div class="content">
                <h3>ADA: a more balanced and sustainable ecosystem </h3>
                <h4>Introduction</h4>
                <p> Cardano (ADA) is a decentralized proof of stake (PoS) blockchain designed to be a more efficient alternative to proof of work (PoW) networks </p>
                <h4>Layered Architecture</h4>
                <p> Cardano employs a layered architecture that separates the ledger (where accounts and balances are stored) from the computation layer (where smart contracts are executed). This separation enhances flexibility, security, and sustainability.
                </p>
                <h4>Consensus Algorithm</h4>
                <p>Cardano uses the Ouroboros proof-of-stake consensus algorithm, which aims to be secure, scalable, and environmentally friendly. It divides time into epochs and slots, ensuring efficient block creation and transaction validation.
                </p>
                <h4>Sustainability</h4>
                <p>Cardano emphasizes long-term sustainability by incorporating a treasury system. A portion of transaction fees goes into a treasury, and the community can propose and vote on protocol upgrades, ensuring a self-sustaining ecosystem.
                </p>
                <h4>Interoperability</h4>
                <p>Cardano aims to provide seamless interoperability between different blockchains, allowing for the transfer of value and information across multiple networks.
                </p>
                <h4>Formal Verification</h4>
                <p>The platform places a strong emphasis on formal methods for code verification, enhancing security by mathematically proving the correctness of smart contracts.
                </p>
                <h4>Scalability</h4>
                <p>Cardano seeks to achieve scalability through the implementation of sidechains and off-chain scaling solutions, allowing the network to handle a large number of transactions efficiently.
                </p>

            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.wrapper {
    #skew1 {
        background: linear-gradient(35deg, #090979, #00d4ff);
        background-size: cover;
        background-position: center center;
        z-index: 10;
    }

    #skew2 {
        h3 {
            margin-bottom: 2em;
        }

        h4 {
            margin-top: 1em;
            margin-bottom: 0.5em;
            text-align: left;
            font-size: 22px;
        }
    }

    .content {
        p {
            text-align: left;
        }
    }

}
</style>
