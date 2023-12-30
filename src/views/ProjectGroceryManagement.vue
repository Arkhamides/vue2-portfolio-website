<template>
<div class="project">
    <div class="hero">
        <div class="hero-text">
            <h1>Grocery Management</h1>
            <h3>A mobile App</h3>
        </div>
    </div>

    <div class="container">
        <br />
        <h3>Overview:</h3>
        <p>
            The following project is a mobile application meant to help you manage
            your inventory, more specifically groceries.
        </p>
        <p>
            You are free to download the apk files. As well as the server side PHP
            scripts.
        </p>
        <p>Everything is availabe here:</p>
        <a href="https://www.github.com/arkhamides">github.com/arkhamides</a>

        <br />
        <br />

        <h3>Requirements:</h3>
        <ul>
            <li>XML - frontend</li>
            <li>Java - backend</li>
            <li>SQL - database</li>
            <li>PHP - server-side</li>
        </ul>
    </div>

    <div class="uml-container">
        <h2>Database Design</h2>
        <img :src="require(`../assets/MobileApp.png`)" alt="" />
    </div>

    <div class="container">
        <h3>Database Implementation and use:</h3>
        <p>Database is implemented with phpmyadmin through XAMPP.</p>
        <p>You can either insert it with SQL queries or by interface.</p>
        <p>
            To access it, I wrote PHP scripts that connect to my server's IP. These
            scripts are located in the htdocs created from XAMPP. you can find them
            here:
        </p>
        <a href="https://www.github.com/arkhamides/GroceryManagementApp_PHP">
            github.com/arkhamides/GroceryManagement_PHP</a>

        <br />
        <br />
    </div>

    <div class="wrapper">
        <div id="skew1" class="cus-div">
            <div class="content">
                <div>
                    <h2>Mobile App Design</h2>
                    <br />
                    <p>The rest of the app is done with Android Studio.</p>
                    <p>XML is used as frontend, and Java as backend.</p>
                    <p>PHP scripts are called out with a java function.</p>
                </div>
            </div>
        </div>
        <div id="skew2" class="cus-div">
            <div class="content">
                <h2>Results</h2>

                <div class="screenshots">
                    <div class="screenshot">
                        <img :src="require(`../assets/GroceryManagementApp/screenshot1.jpg`)" alt="" />
                    </div>
                    <div class="screenshot">
                        <img :src="require(`../assets/GroceryManagementApp/screenshot2.jpg`)" alt="" />
                    </div>
                    <div class="screenshot">
                        <img :src="require(`../assets/GroceryManagementApp/screenshot3.jpg`)" alt="" />
                    </div>
                    <div class="screenshot">
                        <img :src="require(`../assets/GroceryManagementApp/screenshot4.jpg`)" alt="" />
                    </div>
                </div>

                <p>Enjoy Registering your groceries on your phone.</p>
                <br />
                <p>
                    When you go to the supermarket, Don't forget to check the Grocery
                    List to see what items are missing from your inventory.
                </p>
            </div>
        </div>
        <div id="skew3" class="cus-div">
            <div class="content">
                <h2>Check my code out!</h2>
                <p>You can check out my mobile app following the link below</p>
                <br />
                <a href="https://www.github.com/arkhamides/GroceryManagement">
                    github.com/arkhamides/GroceryManagement</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
    margin-left: 42px;
    margin-top: 18px;
}

h3 {
    margin-bottom: 8px;
}

.hero {
    height: 500px;
    width: 100%;
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("../assets/Feather.png");
    background-position: center;

    .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;

        h1 {
            margin: 0;
            font-family: ui-monospace;
            font-size: 60px;
        }
    }
}

.uml-container {
    text-align: center;
    height: 460px;
    overflow: hidden;
}

.container {
    padding: 0 200px;

    a {
        font-family: monospace;
    }

    p,
    a,
    li {
        margin-left: 20px;
        list-style-type: none;
    }
}

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
