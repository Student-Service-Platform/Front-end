<!--
Author: 杨龙辉
Description: 基础列表组件
CreatedAt: 2024.9.29 21:39
Latest: 2024.9.29 21:39

Args:
    items:
        为列表，用以渲染选项列表
        对象结构{
            title: 列表头,
            select: 被选择时触发,
        }
    default:
        默认选中的项目下标
-->

<template>
    <div>
        <div class="ColTitle">
            <p style="font-weight: 400;">{{ content }}</p>
        </div>
        <div class="ColBody">
            <div class="ColItem" style="cursor: default;">
                <p>列表</p>
            </div>
            <div class="ColItem" v-for="(item, index) in items" :key="index" @click="select(index)" @selected="item.select" :class="selectIndex == index ? 'Selected' : ''">
                <p>{{ item.title }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        content: String,
        items: {
            type: Array<{
                title: String,
                select: Function,
            }>,
            required: true
        },
        default: Number
    },
    data () {
        return {
            selectIndex: this.default
        }
    },
    methods: {
        select (index:number) {
            this.selectIndex = index            
            this.$emit("selected")
        }
    }
}
</script>

<style scoped>
.ColTitle{
    left: 0;
    top: 62px;
    bottom: 0;
    position: fixed;
    width: 72px;
    background: rgb(255, 255, 255);
    border-color: #D8D8D9;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
}
.ColTitle>p{
    right: -24px;
    top: 30px;
    height: 24px;
    width: auto;
    position: absolute;
    transform: rotate(90.00deg);
    color: rgb(0, 0, 0);
    font-family: 思源黑体;
    font-size: 24px;
    white-space: nowrap;
    letter-spacing: 4px;
    text-align: left;
}
.ColBody{
    left: 72px;
    top: 62px;
    bottom: 0;
    position: fixed;
    width: 274px;
    background: rgb(255, 255, 255);
    padding: 0;
    cursor: pointer;
}
.ColBody>.ColItem{
    position: relative;
    margin: 0;
    width: 100%;
    height: 64px;
    border-color: #D8D8D9;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;

}
.ColBody>.ColItem>p{
    height: 42px;
    color: rgb(0, 0, 0);
    font-family: 思源黑体;
    font-size: 24px;
    font-weight: 300;
    line-height: 35px;
    letter-spacing: 4px;
    text-align: left;
    margin-left: 16px;
    margin-top: 15px;
}
.ColBody>.Selected>p{
    color: rgb(50, 152, 255);
    font-weight: 400;
}

</style>