<template>
<div>
    <div>
        <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
</div>
</template>

<script>
export default {
    name: "column-chart-vue",
    props: ["data", "categories"],

    data: function () {
        return {
            chartOptions: {
                chart: {
                    id: "column-chart",
                },
                xaxis: {
                    categories: this.categories,
                },
            },
            series: [{
                name: "Skill Level",
                data: this.data,
            }, ],
        };
    },
};
</script>

<style lang="scss"></style>
