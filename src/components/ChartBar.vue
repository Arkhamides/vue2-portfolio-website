<template>
<div>
    <div>
        <apexchart type="bar" width="500" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</div>
</template>

<script>
export default {
    name: "bar-chart-vue",

    data: function () {
        return {
            chartOptions: {
                chart: {
                    type: "bar",
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: [
                        "VS Code ",
                        "Android Studio",
                        "Visual Studio",
                        "Unity3D",
                        "IntelliJ",
                        "Eclipse",
                        "GMS 2",
                    ],
                },
            },
            series: [{
                name: "Mastery",
                data: [95, 90, 80, 85, 85, 80, 75],
            }, ],
        };
    },
};
</script>

<style lang="scss"></style>
