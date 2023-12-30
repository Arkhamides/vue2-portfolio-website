<template>
<div class="blog-wrapper no-user" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="blog-content">
        <div>
            <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
            <h2 v-else>{{ post.title }}</h2>
            <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
            <p v-else class="content-preview">{{ post.blogHTML }}</p>
            <router-link class="link link-light" v-if="post.welcomeScreen" :to="{ name: 'About' }">
                More About Me<Arrow class="arrow arrow-light"></Arrow>
            </router-link>
            <router-link class="link" v-else :to="post.linkView">
                View More<Arrow class="arrow"></Arrow>
            </router-link>
        </div>
    </div>

    <div class="blog-photo">
        <!-- Welcome Screen Blog -->
        <div v-if="post.welcomeScreen">
            <div style="background:black">
                <img :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="" />
            </div>
        </div>
        <!-- Sublevel Blog -->
        <div v-else-if="post.SubLevel" alt="" class="sublevel-menu" :class="{ active: hover }">
            <img class="title" :src="require(`../assets/blogPhotos/spr_Title.png`)" alt="" />
            <img class="planet dark-planet" :src="require(`../assets/blogPhotos/spr_planet_dark.png`)" alt="" />
            <img class="planet guilt-planet" :src="require(`../assets/blogPhotos/spr_planet_guilt.png`)" alt="" />
            <img class="planet ice-planet" :src="require(`../assets/blogPhotos/spr_planet_ice_water_fire.png`)" alt="" />
            <div class="smoke" />
            <img class="background" :src="require(`../assets/blogPhotos/spr_space.png`)" alt="" />
        </div>
        <!-- Other Blog -->
        <div v-else :class="post.blogCoverPhoto">
            <img :src="
            require(`../assets/blogPhotos/${post.blogCoverPhoto}.${post.photoExtension}`)
          " alt="" />
        </div>
    </div>
</div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";

export default {
    name: "blogPost",
    props: ["post"],
    components: {
        Arrow,
    },

    data() {
        return {
            planetsView: false,
            hover: false,
        };
    },

    methods: {
        togglePlanetsView() {
            this.planetsView = !this.planetsView;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (min-width: 700px) {
        min-height: 650px;
        max-height: 650px;
        flex-direction: row;
    }

    .blog-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;

        @media (min-width: 700px) {
            order: 1;
        }

        @media (min-width: 800px) {
            flex: 3;
        }

        div {
            max-width: 375px;
            padding: 72px 24px;

            @media (min-width: 700px) {
                padding: 0 24px;
            }

            h2 {
                font-weight: 300;
                font-size: 32px;
                text-transform: uppercase;
                margin-bottom: 24px;

                @media (min-width: 700px) {
                    font-size: 40px;
                }
            }

            p {
                font-size: 15px;
                font-weight: 300;
                line-height: 1.7;
            }

            .content-preview {
                font-size: 13px;
                max-height: 24px;
                width: 250px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .link {
                display: inline-flex;
                align-items: center;
                margin-top: 32px;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;
                transition: 0.5s ease-in all;

                &:hover {
                    border-bottom-color: #303030;
                }
            }

            .link-light {
                &:hover {
                    border-bottom-color: #fff;
                }
            }
        }
    }

    .blog-photo {
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        text-align: center;
        display: block;

        @media (min-width: 700px) {
            order: 2;
        }

        @media (min-width: 800px) {
            flex: 4;
        }

        div {
            height: 100%;
            width: 100%;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .Arabic-World {
            background-image: linear-gradient(110deg, #ffd281, #f2b5fa);
            text-align: center;
            display: flex;
            justify-content: center;

            img {
                display: block;
                margin: auto;
                width: 55%;
                height: 55%;
            }
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .sublevel-menu {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;

            .title {
                position: absolute;
                margin: 23vh 30%;
                z-index: 3;
                width: 190px;
                height: 100px;

                @media (min-width: 700px) {
                    margin: 10% 10%;
                }

                @media (min-width: 800px) {
                    margin: 14% 14%;
                    width: 380px;
                    height: 200px;
                }
            }

            .planet {
                opacity: 0;
                position: absolute;
                display: block;
                width: 50px;
                height: 50px;
                margin: 120px 20px;
                z-index: 2;

                @media (min-width: 800px) {
                    width: 100px;
                    height: 100px;
                    margin: 420px;
                    margin-left: 120px;
                }
            }

            .ice-planet {
                padding-top: 10px;
            }

            .smoke {
                width: inherit;
                height: 200px;
                z-index: 1;
                position: absolute;
                background: transparent url("../assets/blogPhotos/Smoke.png");
                opacity: 0.2;
                animation: move-clouds-back 200s linear infinite;
                overflow: hidden;

                @media (min-width: 750px) {
                    width: 50%;
                    height: inherit;
                }

                @media (min-width: 800px) {
                    width: 57%;
                    height: 600px;
                }
            }

            @keyframes move-clouds-back {
                from {
                    background-position: 0 -200px;
                }

                to {
                    background-position: 10000px -200px;
                }
            }
        }
    }

    &:nth-child(even) {
        .blog-content {
            order: 2;
        }

        .blog-photo {
            order: 1;
        }
    }
}

.blog-wrapper:hover {
    .blog-photo {
        .sublevel-menu {
            .planet {
                opacity: 1;
            }

            .title {
                transition: all 3s ease-in-out;
                transform: scale(1.2);
            }

            .planet {
                animation: fadeIn 5s;
                transition: all 3s ease;
            }

            .dark-planet {
                animation: none;
                transform: translate(0px, 0);
            }

            .ice-planet {
                transform: translateX(150px);
            }

            .guilt-planet {
                transform: translateX(300px);
            }

            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }
        }
    }
}

.no-user:first-child {
    .blog-content {
        background-color: #070504;
        color: #fff;
    }
}

.blog-wrapper:first-child {
    img {
        @media (min-width: 1000px) {
            width: 950px;
        }
    }
}
</style>
