<template>
<div class="root">
    <div class="overview">
        <h2>About this Website:</h2>
        <h4>
            This Website is a Portfolio for me to post about my Skills &amp;
            Projects, as well as improve my Web Development Skills.
        </h4>
        <h4>
            These are some components I'm currently working on
            improving/implementing.
        </h4>
    </div>

    <div class="blog-card-wrap">
        <div class="blog-cards container">
            <div class="toggle-edit">
                <span>Toggle Editing Post</span>
                <input type="checkbox" v-model="editPost" />
            </div>
            <div class="title">
                <h2>Blog Cards</h2>
            </div>
            <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
    </div>
</div>
</template>

<script>
import BlogCard from "../components/BlogCard";
export default {
    name: "website",
    components: {
        BlogCard
    },
    computed: {
        sampleBlogCards() {
            return this.$store.state.sampleBlogCards;
        },
        editPost: {
            get() {
                return this.$store.state.editPost;
            },
            set(payload) {
                this.$store.commit("toggleEditPost", payload);
            },
        },
    },
    beforeDestroy() {
        this.$store.commit("toggleEditPost", false);
    },
};
</script>

<style lang="scss" scoped>
.blog-cards {
    position: relative;

    .toggle-edit {
        display: flex;
        align-items: center;
        position: absolute;
        top: -70px;
        right: 0;

        span {
            margin-right: 16px;
        }

        input[type="checkbox"] {
            position: relative;
            border: none;
            -webkit-appearance: none;
            background: #fff;
            outline: none;
            width: 80px;
            height: 30px;
            border-radius: 20px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        input[type="checkbox"]:before {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 20px;
            top: 0;
            left: 0;
            background: #303030;
            transform: scale(1.1);
            transition: 750ms ease all;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        input:checked[type="checkbox"]:before {
            background: #fff;
            left: 52px;
        }
    }

    .title {
        display: flex;
        align-items: center;
        position: absolute;
        top: -70px;
        left: 0;
    }
}

.overview {
    margin: 20px 15%;
}
</style>
