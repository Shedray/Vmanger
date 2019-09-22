<template>
    <div class="details container">
        <router-link to="/" class="btn btn-default">返回</router-link>
        <h1 class="page-header">
            {{customer.name}}
            <span class="pull-right">
                <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">编辑</router-link>
                <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">删除</button>
            </span>

        </h1>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk">{{customer.phone}}</span>
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-asterisk">{{customer.email}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "customerDetail",
        data(){
            return{
                customer:""
            }
        },
        methods:{
            fetchCustomer(id){
                axios.get('http://localhost:3000/users/'+id)
                    .then((response)=>{
                        console.log(response)
                        this.customer=response.data
                    })
            },
            deleteCustomer(id){
                axios.delete('http://localhost:3000/users/'+id)
                    .then((response)=>{
                        console.log(response)
                        this.$router.push({path:"/",query:{alert:"用户删除成功"}})

                    })
            }

        },
        created() {
            this.fetchCustomer(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>