require('./bootstrap');

window.Vue = require('vue');

import RegisterComponent from "./components/RegisterComponent";
import MainApp from "./components/MainApp";
import ItemComponent from "./components/ItemComponent";

Vue.component ('register-compo', RegisterComponent);
Vue.component ('main-app', MainApp);
Vue.component ('item-compo', ItemComponent);

const app = new Vue({
    el: '#app',
    data:{
        list: [
            {id: 1, name: "빨래하기", date: new Date('2019-08-07'), complete: 0},
            {id: 2, name: "집에가기", date: new Date('2019-09-01'), complete: 0},
            {id: 3, name: "공부하기", date: new Date('2019-09-10'), complete: 1},
        ],
        id:4
    },
    methods:{
        addTodo(name, date){
            this.list.push({id:this.id++, name:name, date: new Date(date), complete: 0});
        },
        delTodo(id){
            console.log(id);
            let idx = this.list.findIndex(x => x.id == id);
            this.list.splice(idx, 1);
        },
        comTodo(id) {
            let idx = this.list.findIndex(x => x.id == id);
            this.list[idx].complete = 1;
        }
    },
    computed:{
        sortList(){
            return this.list.sort((a, b) => {
                if(a.date == b.date) return 0;
                return a.date < b.date ? -1 : 1;
            });
        }
    }
});
