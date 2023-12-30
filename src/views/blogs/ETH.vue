<script>
export default {
    name: "eth",
};
</script>

<template>
<div class="root">
    <div class="overview"></div>

    <div class="wrapper">
        <div id="skew1" class="cus-div">
            <div class="content">
                <h1 class="h1">ETH</h1>
            </div>
        </div>
        <div id="skew2" class="cus-div">
            <div class="content">
                <h3>Ethereum: A next generation smart contract & decentralized apllication platform</h3>

                <h4>Introduction</h4>
                <p>Ethereum is presented as a blockchain-based platform that extends the capabilities of Bitcoin by allowing the execution of programmable, self-executing contracts.
                    The motivation is to create a decentralized platform for building decentralized applications (DApps) with a broader scope than Bitcoin.
                </p>
                <p>
                    The motivation is to create a decentralized platform for building decentralized applications (DApps) with a broader scope than Bitcoin.
                </p>
                <h4>Smart Contracts</h4>
                <p>
                    Ethereum introduces the concept of "smart contracts," which are self-executing contracts with the terms of the agreement directly written into code.
                    Smart contracts facilitate trustless and automated transactions without the need for intermediaries.
                </p>
                <h4>Decentralized Autonomous Organizations (DAOs)</h4>
                <p>
                    Ethereum enables the creation of decentralized autonomous organizations (DAOs), which are entities governed by smart contracts and code rather than traditional hierarchical structures.
                </p>
                <h4>Ether (ETH) and Gas</h4>
                <p>
                    The native cryptocurrency of Ethereum is called Ether (ETH), used for various purposes, including compensating participants who perform computations and validate transactions (miners).
                    "Gas" refers to the unit for measuring the computational effort required to execute operations on the Ethereum network.
                </p>
                <h4>Blockchain Structure</h4>
                <p>
                    Ethereum's blockchain structure is similar to Bitcoin but with some key differences, such as a faster block time and a different consensus algorithm (transitioning from proof-of-work to proof-of-stake in Ethereum 2.0).

                </p>
                <h4>Network Security</h4>
                <p>

                    The whitepaper discusses the security aspects of the Ethereum network and the potential vulnerabilities and attack vectors.

                </p>
                <h4>Applications and Use Cases</h4>
                <p>

                    Ethereum is designed to be a versatile platform for various applications beyond cryptocurrency, including decentralized finance (DeFi), gaming, identity verification, supply chain management, and more.

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
