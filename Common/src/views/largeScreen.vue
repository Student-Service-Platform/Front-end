<template>
    <div class="dashboard">
        <LargeScreenVisualizationPieChart />
        <LargeScreenVisualizationButton />
        <FanKuiRankBar />
        <FankuiMonthBar />
    </div>
</template>

<script>
import LargeScreenVisualizationPieChart from '@/components/LargeScreenVisualizationPieChart.vue';
import LargeScreenVisualizationButton from '@/components/LargeScreenVisualizationButton.vue';
import FanKuiRankBar from '@/components/FanKuiRankBar.vue';
import FankuiMonthBar from '@/components/FankuiMonthBar.vue';

export default {
    components: {
        LargeScreenVisualizationPieChart,
        LargeScreenVisualizationButton,
        FanKuiRankBar,
        FankuiMonthBar,
    },
};
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column; /* 或根据需要设置为 row */
    gap: 20px; /* 设置组件间距 */
}
</style>
