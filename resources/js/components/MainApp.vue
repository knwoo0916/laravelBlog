<template>
    <div>
        <div class="date">asdasddsa</div>
        <div class="row">
            <div class="col">
                <div class="logo text-center d-flex justify-content-center align-items-center my-2">
                    <img src="/image/logo.png" alt="" width="80" height="80">
                    <h1>Gondr's Todo Application</h1>
                </div>
                <register-compo></register-compo>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2>Todo List</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <transition-group name="glist" tag="div">
                    <item-compo class="my-3" v-for="item in uncomList" :key="item.id" :item="item"></item-compo>
                </transition-group>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2>Complete List</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <transition-group name="glist" tag="div">
                    <item-compo class="my-3" v-for="item in comList" :key="item.id" :item="item"></item-compo>
                </transition-group>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "MainApp",
        props: ['list'],
        data(){
            return {

            }
        },
        computed:{
            uncomList(){
                return this.list.filter(x => x.complete == 0);
            },
            comList(){
                return this.list.filter(x => x.complete == 1);
            }
        }
    }
</script>

<style scoped>
    .glist-enter, .glist-leave-to {
        opacity: 0;
        transform:translateX(-300px);
    }

    .glist-leave-active {
        position:absolute;
    }

</style>
