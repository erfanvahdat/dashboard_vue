<template>


    <div class="flex min-h-screen items-center justify-center bg-gray-700">

        <div class="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
            <div class="flex flex-col justify-center items-center space-y-2">
                <h2 class="text-2xl font-medium text-slate-700">Login</h2>
                <p class="text-slate-500">Enter details below.</p>
            </div>
            <form class="w-full mt-4 space-y-3">
                <div>
                    <input v-model='user'
                        class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                        placeholder="Username" id="username" name="username" type="text" />
                </div>
                <div>
                    <input v-model='password'
                        class="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                        placeholder="Password" id="password" name="password" type="password" />
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input class="mr-2 w-4 h-4" id="remember" name="remember" type="checkbox" />
                        <span class="text-slate-500">Remember me </span>
                    </div>

                </div>


                <button type="button" class="btn btn-primary" @click='login'>Login</button>


                <span class='text-black' v-if="response_error">
                    - Something went wrong please try again
                </span>


                <p class="flex justify-center space-x-1">
                    <span class="text-slate-700"> Have an account? </span>
                    <span class="text-blue-500 hover:underline" @click="Signup">Sign Up</span>
                </p>
            </form>
        </div>
    </div>



</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            display_status_cont: false,
            user: '',
            password: '',
            responseMessage: '',
            responseStatus: '',
            token: '',
            refresh: '',
            response_error: false,

        };
    },
    methods: {
        Signup() {
            this.$emit('sign_up');

        },
        async login() {
            try {

                const response = await axios.post('http://localhost:7000/api/v1/login/', {
                    username: this.user,
                    password: this.password // Do not convert the password to an integer, keep it as a string
                });


                // Accessing the response body
                this.responseMessage = 'Login successful: ' + response.data.username;

                this.token = response.data.access;
                this.refresh = response.data.refresh;

                this.responseStatus = response.status;

                console.log(this.responseStatus);
                console.log(this.responseMessage);



                // Save token to local storage
                localStorage.setItem('access', this.token);
                localStorage.setItem('refresh', this.refresh);


                console.log("access is : "+  localStorage.getItem('access'));

                // Emit login success event
                this.$emit('login_success');


            } catch (error) {

                console.log(error.response);


                this.response_error = true;

                setTimeout(() => {
                    this.response_error = false;
                }, 2000);

                // if (error.response && error.response.data && error.response.data.username) {
                // Show specific error message from the response
                //     this.responseMessage = 'Login failed: ' + error.response.data.username;
                // } else {
                //     // Fallback error message
                //     this.responseMessage = 'Login failed. Please try again.';
                // }
                // console.error('Error response:', error.response);
            }
        }
    }


};
</script>
