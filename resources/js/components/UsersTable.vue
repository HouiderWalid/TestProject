<template>
    <div class="container users-table">
        <button type="button" class="btn btn-success add-btn" data-toggle="modal" data-target="#add-user" @click="addUser">
            <span>add</span>ajouter
        </button>
        <UserModal @created="refresh" :mode="modalMode"></UserModal>
        <table class="table">
            <thead>
            <tr>
                <th v-for="header in tableHeader" scope="col">{{ header }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users.data">
                <td>{{ user.id }}1</td>
                <td><img :src="user.avatar" width="50" height="50" alt=""></td>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <div class="btn btn-warning edit-btn" @click="editUser(user)" data-toggle="modal" data-target="#edit-user"><span>create</span>edit</div>
                    <div class="btn btn-danger delete-btn" @click="deleteUser(user.id)"><span>delete</span>delete</div>
                </td>
            </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li v-for="link in users.links" class="page-item"
                    :class="[{ 'active': link.active }, link.url === null ? 'disabled' : '']"
                    @click="fetchUsers(link.url)"><a class="page-link" href="#">{{ link.label }}</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Axios from 'axios'

const Axios_instance = Axios.create({
    baseURL: "http://localhost/api/",
    responseType: 'json',
    headers: {
        'content-type': 'multipart/form-data',
        'X-CSRF-TOKEN': document.querySelector("meta[name='csrf-token']").content
    },
});
export default {
    components: {
        UserModal: () => import('./AddUserModal')
    },
    data() {
        return {
            tableHeader: ['id', 'avatar', 'first-name', 'last-name', 'email', 'actions'],
            users: {},
            modalMode: { mode: 'add', user: null }
        }
    },
    computed:{

    },
    methods: {
        async fetchUsers(url = "user") {
            let response = await Axios_instance.get(url)
            if (response && response.data) {
                if (response.data.code === 200) {
                    this.users = response.data.data
                }
            } else console.log('api error')
        },
        async editUser(entity) {
            this.modalMode = { mode: 'edit', user: entity }
        },
        async addUser() {
            this.modalMode = { mode: 'add', user: {} }
        },
        async deleteUser(id) {
            let response = await Axios_instance.delete('user/'+id)
            console.log(response.data)
            if (response && response.data) {
                if (response.data.code === 200) {
                    this.users = response.data.data
                }
            } else console.log('api error')
        },
        refresh(data){
            this.users = data
        }
    },
    created() {
        this.fetchUsers()
    },
    mounted() {
        console.log('Component mounted.')
        document.title = 'Users'
    }
}
</script>

<style lang="scss">
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    #app {
        flex-grow: 1;

        .add-btn span, .edit-btn span, .delete-btn span {
            font-family: 'Material Icons';
            padding: .5em;
            vertical-align: bottom;
        }

        .users-table {
            display: flex;
            flex-direction: column;
            align-items: end;
        }
    }
}
</style>
