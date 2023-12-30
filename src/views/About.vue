<script>
import PieChart from "../components/PieChart";
import ChartColumn from "../components/ChartColumn";

export default {
    data: () => {
        return {
            /* Data for the pie chart, value is the percentage */
            pieData: [{
                    color: "#9D1F37",
                    value: 40
                },
                {
                    color: "#0B6487",
                    value: 35
                },
                {
                    color: "#F6931C",
                    value: 15
                },
                {
                    color: "#18aa18",
                    value: 10
                },
            ],
            columnData: [95, 90, 80, 85, 75 , 80, 75],
            columnCategories: [
                "C++",
                "Python",
                "Java",
                "JavaScript",
                "C#",
                "HTML",
                "css",
            ],
        };
    },
    components: {
        PieChart,
        ChartColumn,
    },
};
</script>

<template>
<div class="body">


    <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, world!</h1>
          <p>My name is Joe Archondis. I am a software developer.</p>
        </div>  
    </div>

    <div class="charts">
        <!-- Colum Chart -->
        <div class="chart">
            <h1>Programming Languages</h1>
            <div class="chart-body">
                <ChartColumn :data="columnData" :categories="columnCategories" />
            </div>
        </div>

        <!-- Pie Chart-->
        <div class="chart">
            <h1>Spoken Languages</h1>

            <div class="chart-body">
                <PieChart :pieData="pieData" />
                <div class="palettes">
                    <div class="palette palette1">
                        <div class="palette-text">15% Arabic</div>
                    </div>
                    <div class="palette palette2">
                        <div class="palette-text">40% English</div>
                    </div>
                    <div class="palette palette3">
                        <div class="palette-text">35% French</div>
                    </div>
                    <div class="palette palette4">
                        <div class="palette-text">10% Italian</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.charts {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    padding: 20px;

    @media (min-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        display: grid;
    }

    .chart {
        height: 100%;
        display: flex;
        flex-direction: column;

        h1 {
            display: flex;
            text-align: center;
            justify-content: center;
        }

        .chart-body {
            display: flex;
            flex-direction: row;
            margin: 20px auto;
        }
    }

    .chart:nth-child(n + 3) {
        h1 {
            margin-top: 50px;
        }
    }
}

.palettes {
    display: flex;
    flex-direction: column;

    .palette {
        width: 25px;
        height: 25px;
        position: relative;
        margin: 10px 5px;
        margin-left: 25px;
        text-align: center;

        .palette-text {
            margin-top: 2px;
            margin-left: 42px;
            width: max-content;
        }
    }

    .palette1 {
        background: #f6931c;
    }

    .palette2 {
        background: #9d1f37;
    }

    .palette3 {
        background: #0b6487;
    }

    .palette4 {
        background: #18aa18;
    }
}

.about-me {
    margin: 10px;
}


@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}

</style>
