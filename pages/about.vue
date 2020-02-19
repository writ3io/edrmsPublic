<template>
<div class="about">
    <h1>About</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis dolore recusandae fugiat iusto a, suscipit omnis unde nesciunt quasi voluptatem inventore perferendis voluptatibus officia nam ipsa, cumque numquam sunt.</p>
            <ul>
            <li v-for="task in tasks" :key="task.id">
                <h4>{{task.title}}</h4>
                <p>{{task.body}}</p>
                <p>{{task.dueDate}}</p>
                <div class="actions">
                    <button @click="editTask">Edit</button>
                    <button @click="deleteTask">delete</button>
                </div>
            </li>
        </ul>
</div>
    </template>

<script>
import store from '~/store/store'
export default {
    data: ()=>{
        return {
        }
    },
    computed: {
        tasks: function(){
            return store.state.tasks
        }
    },
    methods: {
        editTask: ()=>{
            
        },
        deleteTask: ()=>{

        }
    },
    created(){
        console.log('store', store.state.tasks)
    }
}
</script>