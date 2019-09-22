<template>
    <div class="add container">
        <h1 class="page-header">
            添加用户
        </h1>
        <form action="" v-on:submit="addCustomer">
            <div class="well">
                <h4>用户信息</h4>
                <div class="form-group">
                    <label for="">姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label for="">电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label for="">邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label for="">年龄</label>
                    <input type="text" class="form-control" placeholder="age" v-model="customer.age">
                </div>
                <div class="form-group">
                    <label for="">公司id</label>
                    <input type="text" class="form-control" placeholder="companyId" v-model="customer.companyId">
                </div>

                <div class="form-group">
                    <label for="">个人简介</label>
<!--                    <input type="text" class="form-control" placeholder="profile" v-model="customer.profile">-->
                    <textarea rows="10" class="form-control"  v-model="customer.profile"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">添加</button>

            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "add",
        data(){
            return{
                customer:{
                }
            }
        },
        methods:{
            addCustomer(e){
                if(!this.customer.name||!this.customer.phone||!this.customer.email){
                    console.log("请填写必要数据")
                    console.log(!this.customer.name)
                    console.log(!this.customer.phone)
                    console.log(!this.customer.email)

                }else {
                    let newCustomer = {
                        name:this.customer.name,
                        phone:this.customer.phone,
                        email:this.customer.email,
                        age:this.customer.age,
                        companyId:this.customer.companyId,
                        profile:this.customer.profile,

                    }
                    //添加到数据库当中
                    axios.post('http://localhost:3000/users',newCustomer)
                        .then((response)=>{
                            console.log((response))
                            this.$router.push({path:"/",query:{alert:"用户信息添加成功"}})
                        })
                }

                e.preventDefault()
            }
        }

    }
</script>

<style scoped>

</style>