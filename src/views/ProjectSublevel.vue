<template>
<div class="project">
    <div class="hero">
        <div class="overview">
            <div class="overview-text">
                <h2>Overview</h2>
                <h4>Project Sublevel is an action adventure 2D Game.</h4>
                <h4>It is currently being developed by a team of 2.</h4>
            </div>
        </div>
    </div>

    <div class="wrapper">
        <div id="skew1" class="cus-div">
            <div class="content">
                <div class="project-management">
                    <h2>Project Management</h2>
                </div>
            </div>
        </div>
        <div id="skew2" class="cus-div">
            <div class="content">
                <h3>Brainstorming Sessions</h3>

                <p>
                    After having scribbled and brainstormed on pieces of paper, the
                    project became clearer. Lore, rules and mechanics became evident and
                    more intricate, but in order to proceed, a plan of development was
                    to be created and put in motion.
                </p>
                <p>
                    We started by developing the game concept and slowly deploying our
                    designs in order to get a better image of our capabilities and the
                    scope of the project.
                </p>
                <br />

                <h3>Waterfall Planning</h3>
                <p>
                    Of course, a project this big cannot be done without some planning
                    ahead. Which is why we retain the waterfall approach. When it comes
                    to the big picture of how we want our game to grow and expand, We
                    need to take time and structure our task and divide into smaller
                    applications.
                </p>

                <br />

                <h3>Agile Environment</h3>
                <p>
                    All task were run on an agile environment, On a software called
                    Jira, from Atlassian&trade;. <br> 
                    An agile environment is useful when there's hard work needs to be
                    done quickly, while also maintaining efficiency.
                </p>
            </div>
        </div>
        <div id="skew3" class="cus-div">
            <div class="content">
                <h2>Game release</h2>
                <h3>For the moment, Project SubLevel has been put on pause.</h3>
                <h4>
                    I tend to experiment with new features in the Game every now and
                    then,
                </h4>
                <h4>but only for personal fun.</h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.uml-container {
    text-align: center;
}

.hero {
    height: 500px;
    width: 100%;
    position: relative;
    background-image: url("../assets/blogPhotos/spr_space.png");
    background-position: center;

    .overview {
        position: relative;
        height: 100%;
        width: 800px;
        background-image: url("../assets/blogPhotos/spr_Title.png");
        background-repeat: no-repeat;
        background-position: center;
        margin: auto;

        .overview-text {
            position: absolute;
            color: white;
            padding-top: 450px;
            z-index: 20;
            h2 {
                margin-bottom: 20px;
            }
        }
    }
}

.wrapper {
    h3 {
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .cus-div {
        width: 100%;
        position: relative;
    }

    #skew1 {
        background-image: url("../assets/blogPhotos/spr_space.png");
        background-position: center center;
        z-index: 10;

        .content {
            padding: 180px 20px;
        }
    }

    #skew2 {
        background: #fff;
        z-index: 9;

        h3 {
            color: #000;
            padding: 0 22%;
            text-align: left;
            font-size: 28px;
        }

        p {
            text-indent: 2em;
        }
    }

    #skew3 {
        background: #c2c2c2;
        z-index: 9;

        h2 {
            color: midnightblue;
        }
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
            padding: 0 22%;
            line-height: 1.5;
            color: #000;
            text-align: left;
        }
    }
}
</style>
