<template>
<div class="app-wrapper">
    <div class="app">
        <Navigation v-if="!navigation" />
        <router-view />
        <My_Footer v-if="!navigation" />
    </div>
</div>
</template>

<script>
import Navigation from "./components/Navigation";
import My_Footer from "./components/Footer";
import firebase from "firebase/app";
import "firebase/auth";

export default {
    name: "app",
    components: {
        Navigation,
        My_Footer,
    },
    data() {
        return {
            navigation: null,
        };
    },
    created() {
        // var user is filled out with first and last name from the server
        firebase.auth().onAuthStateChanged((user) => {
            this.$store.commit("updateUser", user);
            if (user) {
                this.$store.dispatch("getCurrentUser");
                console.log("First name is " + this.$store.state.profileFirstName);
            }
        });

        this.checkRoute();
        console.log(firebase.auth().currentUser);
    },
    mounted() {},
    methods: {
        //disables navbar and footer for the following routes
        checkRoute() {
            if (
                this.$route.name === "Login" ||
                this.$route.name === "Register" ||
                this.$route.name === "ForgotPassword"
            ) {
                this.navigation = true;
                return;
            }
            this.navigation = false;
        },
    },
    watch: {
        $route() {
            this.checkRoute();
        },
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
}

.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}

.link {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
}

.link-light {
    color: #fff;
}

.arrow {
    margin-left: 8px;
    width: 12px;

    path {
        fill: #000;
    }
}

.arrow-light {
    margin-left: 8px;
    width: 12px;

    path {
        fill: #fff;
    }
}

button,
.router-button {
    transition: 500ms ease all;
    cursor: pointer;
    margin-top: 24px;
    padding: 12px 24px;
    background-color: #303030;
    color: #fff;
    border-radius: 20px;
    border: none;
    text-transform: uppercase;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: rgba(48, 48, 48, 0.8);
    }
}

.button-ghost {
    color: #000;
    padding: 0;
    border-radius: 0;
    margin-top: 50px;
    font-size: 15px;
    font-weight: 500;
    background-color: transparent;

    @media (min-width: 700px) {
        margin-top: 0;
        margin-left: auto;
    }

    i {
        margin-left: 8px;
    }
}

.button-light {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
}

.button-inactive {
    pointer-events: none !important;
    cursor: none !important;
    background-color: rgba(128, 128, 128, 0.5);
}

.error {
    text-align: center;
    font-size: 12px;
    color: red;
}

.blog-card-wrap {
    position: relative;
    padding: 80px 16px;
    background-color: #f2f2f2;

    @media (min-width: 500px) {
        padding: 100px 16px;
    }

    .blog-cards {
        display: grid;
        gap: 32px;
        grid-template-columns: 1fr;

        @media (min-width: 570px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (min-width: 1300px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}

.wrapper {
  .cus-div {
    width: 100%;
    position: relative;
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

  #skew2 {
        z-index: 9;

        h3 {
            color: #000;
            font-size: 28px;
        }
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
    padding: 200px 22%;
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
      line-height: 1.5;
      color: #000;
    }
  }
}


</style>
