<template>
    <div class="item d-flex justify-content-between align-items-center">
        <div class="line">

        </div>
        <div class="date">
            <div class="up">
                <span class="day">
                    {{item.date.getDate()}}
                </span>
            </div>
            <div class="down">
                <span class="month">{{this.monthList[item.date.getMonth()]}}</span>
                <span class="year">{{item.date.getFullYear()}}</span>
            </div>

        </div>
        <div class="name">
            {{item.name}}
        </div>
        <div class="button-set">
            <button class="btn btn-small btn-success" @click="com">완료</button>
            <button class="btn btn-small btn-danger" @click="del">삭제</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemComponent",
        props:['item'],
        data(){
            return {
                monthList:['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
            }
        },
        methods:{
            com(){
                this.$root.comTodo(this.item.id);
            },

            del(){
                this.$root.delTodo(this.item.id);
            }
        }
    }
</script>

<style scoped>
    .item {
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
        height:80px;
        width:100%;
        overflow: hidden;
        transition:all 1s;
    }
    .name {
        width:70%;
        font-size:21px;
    }
    .date {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }

    .date .day {
        font-size:30px;
        color:#444;
    }

    .day .down span {
        font-size:13px;
        color:#aaa;
    }

    .line {
        width:10px;
        background-color: #38c172;
        height:100%;
    }

    .button-set {
        padding:20px;
    }
</style>
