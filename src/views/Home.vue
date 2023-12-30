<template>
<div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
        <div class="container">
            <h3>Featured Blogs</h3>
            <div class="blog-cards">
                <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
            </div>
        </div>
    </div>

    <div class="updates">
        <div class="container">
            <h2>Never Miss a Post, Register</h2>
            <router-link class="router-button" :to="{ name: 'Register' }">
                Create an Account
                <Arrow class="arrow arrow-light" />
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
    name: "Home",
    components: {
        BlogPost,
        BlogCard,
        Arrow,
    },
    data() {
        return {
            welcomeScreen: {
                title: "Welcome!",
                blogPost: "My name is Joe Archondis, I'm a software developer. ",
                photo: "coding",
                welcomeScreen: true,
            },
            sampleBlogPost: [{
                    title: "Ark Farm",
                    blogHTML: "Staking application and NFT minting.",
                    blogCoverPhoto: "eth-blockchain",
                    photoExtension: "jpg",
                    linkView: "ArkFarm",
                },
                {
                    title: "Android Studio App",
                    blogHTML: "An inventory mobile application",
                    blogCoverPhoto: "Arabic-World",
                    photoExtension: "png",
                    linkView: "ProjectGroceryManagement",
                },
                {
                    title: "Project SubLevel",
                    blogHTML: "A PC game project",
                    blogCoverPhoto: "SpaceSubLevel",
                    photoExtension: "jpg",
                    SubLevel: true,
                    linkView: "ProjectSublevel",
                },
            ],
        };
    },
    computed: {
        sampleBlogCards() {
            return this.$store.state.sampleBlogCards;
        },
    },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
    h3 {
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}

.updates {
    .container {
        padding: 100px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 800px) {
            padding: 125px 25px;
            flex-direction: row;
        }

        .router-button {
            display: flex;
            font-size: 14px;
            text-decoration: none;

            @media (min-width: 800px) {
                margin-left: auto;
            }
        }

        h2 {
            font-weight: 300;
            font-size: 32px;
            max-width: 425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;

            @media (min-width: 800px) {
                text-align: initial;
                font-size: 40px;
            }
        }
    }
}
</style>
