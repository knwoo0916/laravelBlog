<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header">
                    <h3>일정 등록</h3>
                </div>
                <div class="card-body">
                    <div class="input-group mb-3">
                        <input type="date" class="form-control" v-model="date">
                        <input type="text" class="form-control" @keydown.enter="register" placeholder="일정이름 입력" v-model="name">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" @click="register">입력</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterComponent",
        data(){
            return {
                date:"",
                name:"",
            }
        },
        methods:{
            register(){
                if(this.date == "" || this.name == ""){
                    alert("값을 입력하세요");
                    return;
                }
                this.$root.addTodo(this.name, this.date);
            }
        }
    }
</script>

<style scoped>

</style>
