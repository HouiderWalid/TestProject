<template>
    <div class="add-user-modal">
        <div class="modal fade" :id="mode.mode + '-user'" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="first_name">First name</label>
                                <input type="text" class="form-control" placeholder="first name"
                                       :class="[ errors['first_name'] === undefined ? '' : 'is-invalid' ]"
                                       id="first_name" v-model="fields['first_name']">
                                <div v-if="errors['first_name']" :class="[ errors['first_name'] ? 'd-block' : 'd-none']"
                                     class="invalid-feedback">
                                    {{ errors['first_name'][0] }}
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="last_name">Last name</label>
                                <input type="text" class="form-control" placeholder="last name"
                                       :class="[ errors['last_name'] === undefined ? '' : 'is-invalid' ]"
                                       id="last_name" v-model="fields['last_name']">
                                <div v-if="errors['last_name']" :class="[ errors['last_name'] ? 'd-block' : 'd-none']"
                                     class="invalid-feedback">
                                    {{ errors['last_name'][0] }}
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="password">Password</label>
                                <input type="text" class="form-control" placeholder="password"
                                       :class="[ errors['password'] === undefined ? '' : 'is-invalid']"
                                       id="password"
                                       v-model="fields['password']">
                                <div v-if="errors['password']" :class="[ errors['password'] ? 'd-block' : 'd-none']"
                                     class="invalid-feedback">
                                    {{ errors['password'][0] }}
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="password_confirmation">Password Confirmation</label>
                                <input type="text" class="form-control" placeholder="password confirmation"
                                       :class="[ errors['password'] === undefined ? '' : 'is-invalid']"
                                       id="password_confirmation"
                                       v-model="fields['password_confirmation']">
                                <div v-if="errors['password']" :class="[ errors['password'] ? 'd-block' : 'd-none']"
                                     class="invalid-feedback">
                                    {{ errors['password'][0] }}
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" placeholder="email"
                                       :class="[ errors['email'] === undefined ? '' : 'is-invalid' ]"
                                       id="email" v-model="fields['email']">
                                <div v-if="errors['email']" :class="[ errors['email'] ? 'd-block' : 'd-none']"
                                     class="invalid-feedback">
                                    {{ errors['email'][0] }}
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div>Avatar</div>
                                <input type="file" class="custom-file-input" style="margin-bottom: 12px"
                                       :class="[ errors['avatar'] === undefined ? '' : 'is-invalid' ]"
                                       id="avatar" @change="showAvatar">
                                <label class="custom-file-label" for="avatar">Choose file...</label>
                                <div v-if="errors['avatar']" :class="[ errors['avatar'] ? 'd-block' : 'd-none']"
                                     class="invalid-feedback">{{ errors['avatar'][0] }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="avatar-uploaded-view p2">
                        <img id="avatar-img" :src="avatar_display" alt="">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="create">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
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
    name: "AddUserModal",
    props: {
        mode: {
            type: Object,
            default: function () {
                return {
                    mode: 'add',
                    user: null
                }
            }
        }
    },
    data() {
        return {
            avatar_display: '',
            errors: {},
            fields: {}
        }
    },
    methods: {
        showAvatar(event) {
            this.fields['avatar'] = event.target.files[0]
            let fileReader = new FileReader()
            fileReader.onload = e => this.avatar_display = e.target.result
            fileReader.readAsDataURL(event.target.files[0])
        },
        async create() {
            let formData = new FormData()
            Object.keys(this.fields).forEach(key => formData.append(key, this.fields[key]))
            let url = this.mode.mode === 'add' ? 'user' : 'user/' + this.mode.user.id
            let response = await Axios_instance.post(url, formData)
            console.log(response.data)
            if (response && response.data) {
                if (response.data.code === 200) {
                    this.$emit('created', response.data.data)
                } else if (response.data.code === 401) {
                    this.errors = response.data.errors
                    console.log(this.errors['first_name'] !== undefined)
                } else {
                    // code 500 todo
                }
            } else console.log('api error')
        }
    },
    updated() {
        console.log('updated')
        this.fields = this.mode.user
        if (!document.querySelector('.modal').classList.contains("show")){
            if (Object.keys(this.errors).length > 0) this.errors = {}
            if (this.avatar_display !== '') this.avatar_display = ''
        }
    }
}
</script>

<style lang="scss" scoped>
#avatar + label {
    margin-top: 1.8rem;
}

.avatar-uploaded-view {
    height: 150px;
    text-align: center;

    #avatar-img {
        height: 100%;
        object-fit: contain;
    }
}
</style>
