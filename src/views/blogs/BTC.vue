<script>
export default {
    name: "btc",
};
</script>

<template>
<div class="root">
    <div class="overview"></div>

    <div class="wrapper">
        <div id="skew1" class="cus-div">
            <div class="content">
                <h1 class="h1">BTC</h1>
            </div>
        </div>

        <div id="skew2" class="cus-div">
            <div class="content">
                <h3>Bitcoin: A Peer-to-Peer Electronic Cash System</h3>

                <h4>Introduction</h4>
                <p>Bitcoin is a decentralized digital currency, which aims to enable peer-to-peer transactions without the need for intermediaries,such as a central bank or financial institution.
                    It introduces a novel solution to the double-spending problem that has plagued previous digital currency systems.
                    Double spending is the risk that a cryptocurrency can be used twice or more
                </p>
                <h4>Problem that crypto is trying to solve</h4>
                <p>
                    Traditional financial systems have proven to have limitations, BTC tries to solve that problem with the need for a digital currency system that removes the reliance on centralized authorities.
                </p>
                <h4>Bitcoin’s Blockchain</h4>
                <p>
                    Bitcoin is described as a chain of digital signatures, where transactions are broadcasted to the network and verified by network nodes through cryptography. The transactions are recorded on a public ledger called the blockchain.
                    Bitcoin introduces the concept of proof-of-work (PoW) to validate transactions and secure the network. Miners compete to solve computationally-intensive puzzles to add new blocks to the blockchain, thus providing security against malicious attacks.
                    Bitcoin incentivizes participants by providing newly minted bitcoins to miners who successfully mine new blocks. This process also creates a controlled supply of bitcoins, with a diminishing block reward over time. (Bitcoin Halving)
                </p>

                <h4>Getting technical</h4>
                <p>
                    To prevent double-spending, Bitcoin uses a timestamp server that adds a time-stamp to each transaction, allowing the network to verify the order of transactions.
                    The peer-to-peer nature of the Bitcoin network: Nodes connect to propagate transactions and blocks. Nodes can join and leave the network without affecting its operation.
                </p>
                <p>
                    Reclaiming Disk Space: The whitepaper explains a method to prune and
                    compress the blockchain data to reduce storage requirements without
                    compromising the security of the system.
                </p>
                <p>
                    Simplified Payment Verification
                    (SPV): It introduces the concept of SPV, allowing lightweight clients to
                    verify transactions without downloading the entire blockchain, making
                    Bitcoin more accessible for users with limited resources. Combining and
                </p>
                <p>
                    Splitting Value: The paper explains how Bitcoin can handle transactions
                    involving multiple inputs and outputs, allowing users to combine and split
                    the value in various ways.
                </p>
                <h4>Privacy</h4>
                <p>
                    While the whitepaper acknowledges that
                    Bitcoin transactions are not inherently private, it suggests that
                    pseudonyms can be used to protect user identities. It also mentions the
                    potential for additional privacy enhancements.
                </p>
                <h4>Conclusion</h4>
                <p>
                    The key features of Bitcoin strive to
                    revolutionize the financial system by providing an open, decentralized,
                    and censorship-resistant digital currency.</p>
            </div>
        </div>

        <div id="skew3" class="cus-div"></div>
    </div>

</div>
</template>

<style lang="scss" scoped>
.wrapper {

    #skew1 {
        background: linear-gradient(90deg, #00d4ff, #090979);
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
    #skew3 {
        height: 100px;
    }

    .content {
        p {
            text-align: left;
        }
    }

}
</style>
