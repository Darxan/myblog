<template>
    <v-container grid-list-md thema--black>
        <v-layout row wrap justify-space-between>
            <v-flex v-for="task in tasks" :key="task.id" xs12 sm10 md4 offset-sm-1>
                <task-item :task="task" ></task-item>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import TaskItem from './TaskListItem' 
    export default {
        data() {
            return {

            }
        },
        computed: {
            tasks() {
                return this.$store.getters.getTasks
            }
        },
        components: {
            TaskItem
        }
    }
</script>
<style>
    #instagram {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-self: center;
        align-items: center;
    }

    .it {
        margin: 0;
        padding: 0;
        text-align: center;
    }
</style>