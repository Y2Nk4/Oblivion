<template>
    <div class="overview-card">
        <span class="card-title">{{ title }}</span>
        <div class="value-block">
            <span class="card-value" v-html="value"></span>
            <span class="extra-description" v-if="extraDescription">{{ extraDescription }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverviewCard',
    props: {
        title: String,
        value: String,
        extraDescription: String
    }
}
</script>

<style lang="less" scoped>
    .overview-card{
        color: #606060;
        background-color: #fff;
        border-radius: 15PX;
        padding: 25PX;
        box-shadow: 0 0 25PX #0000002b;

        span.card-title{
            display: block;
            font-size: 18PX;
            font-weight: 700;
            margin-bottom: 12PX;
        }
        div.value-block{
            .card-value{
                font-size: 25PX;
                font-weight: 700;
            }
            .extra-description{
                font-size: 16PX;
                font-weight: 700;
            }
        }
    }
</style>
