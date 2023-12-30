<script>
export default {
    name: "website",
};
</script>

<template>
<div class="root">
    <div class="overview"></div>

    <div class="wrapper">
        <div id="skew1" class="cus-div">
            <div class="content">
                <div>
                    <h2>ArkFarm</h2>
                    <br />
                    <p>A Blockchain web app.</p>
                </div>
            </div>
        </div>

        <div id="skew3" class="cus-div">
            <div class="content">
                <img src="../assets/Staking_app.png"/>
            </div>
        </div>

        <div id="skew3" class="cus-div">
            <div class="content">
                <h2>Check my code out!</h2>
                <p>You can check out my mobile app following the link below</p>
                <br />
                <a href="https://www.github.com/arkhamides/ArkToken-Farm">
                    github.com/arkhamides/ArkToken-Farm</a>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.wrapper {
    .cus-div {
        width: 100%;
        position: relative;
    }

    #skew1 {
        background: linear-gradient(35deg, #14d3f5, #1171ef);
        background-size: cover;
        background-position: center center;
        z-index: 10;
    }

    #skew2 {
        background: #fff;
        z-index: 9;

        h2 {
            color: #000;
        }

        .screenshots {
            display: flex;
            align-items: center;
            grid-template-columns: repeat(4, 1fr);
            display: grid;
            margin: 12px 0;

            .screenshot {
                background: #dddddd69;
                position: relative;
                display: flex;
                flex-direction: column;
                padding-left: 50px;
                padding-top: 25px;
                padding-bottom: 25px;

                img {
                    height: 80%;
                    width: 80%;
                }
            }
        }
    }

    #skew3 {
        background: #c2c2c2;
        z-index: 9;
    }

    .cus-div:after {
        position: absolute;
        width: 100%;
        height: 100%;
        background: inherit;
        z-index: -1;
        bottom: 0;
        content: "";
    }

    #skew1:after,
    #skew2:after,
    #skew4:after {
        transform-origin: left bottom;
        transform: skewY(3deg);
    }

    #skew3:after {
        transform-origin: right bottom;
        transform: skewY(3deg);
    }

    .content {
        font-weight: bold;
        text-align: center;
        padding: 200px 50px;
        overflow: hidden;
        display: block;
        height: auto;

        h2 {
            margin: 0;
            color: #fff;
            font-size: 60px;
        }

        a {
            text-decoration: none;
            color: #fff;
            background: #000;
            display: inline-block;
            font-size: 16px;
            padding: 10px 2px;
            border-radius: 15px 15px;
            padding-left: 18px;
            padding-right: 18px;
            font-family: Arial, sans-serif;
        }

        p {
            padding: 0 300px;
            line-height: 1.5;
            color: #000;
        }
    }
}
</style>
