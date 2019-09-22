<template>
    <div class="cusromer">
        <div class="customer container">
            <Alert v-if="alert" v-bind:message="alert"></Alert>
            <h1 class="page-header">用户管理系统</h1>
            <table class="table-striped table">
                <thead>
                <tr>
                    <th>姓名</th>
                    <th>电话</th>
                    <th>邮箱</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="customer in customers">
                        <td>{{customer.name}}</td>
                        <td>{{customer.phone}}</td>
                        <td>{{customer.email}}</td>
                        <td><router-link class="btn btn-default" v-bind:to="'customer/'+customer.id">详情</router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Alert from "@/components/alert";
    import axios from 'axios'
    export default {
        name: "customer",
        data () {
            return{
                customers:[],
                alert:""
            }
        },
        methods:{
            fetchCustomers(){
                axios.get('http://localhost:3000/users')
                    .then((response)=>{
                        console.log(response)
                        this.customers = response.data
                    })
            }

        },
        created() {
            if(this.$route.query){
                this.alert=this.$route.query.alert
            }
            this.fetchCustomers();
        },
        // updated() {
        //     this.fetchCustomers();
        // },
        components:{
            Alert
        }
    }
</script>

<style scoped>

</style>