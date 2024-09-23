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
                    <!-- <a class="text-blue-500 font-medium hover:underline" href="#">Forgot Password</a> -->
                </div>



                <!-- <button class="border-1 border-blue-500 text-black" @click="login">Login</button> -->

                <!-- <span class=" rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                    login
                </span> -->

                <button type="button" class="btn btn-primary"></button>


                <!-- <button
                class="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2">
                login
                </button> -->

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

        };
    },
    methods: {
        Signup() {
            this.$emit('sign_up');

        },
        async login() {
            try {
                const response = await axios.post('http://192.168.1.104:7000/api/v1/login/', {
                    username: this.user,
                    password: parseInt(this.password)
                });

                // Accessing the response body
                this.responseMessage = 'Login successful: ' + response.data.username;

                this.token = response.data.token;
                this.refresh = response.data.refresh;
                this.responseStatus = response.status;



                console.log(this.responseStatus)
                console.log(this.responseMessage)

                // Save token to local storage
                localStorage.setItem('Token', this.token);
                localStorage.setItem('Refresh', this.refresh);


                // Redirect to home page after successful login
                // this.$router.push({ name: 'home' });


            } catch (error) {
                if (error.response) {
                    // Show error if login fails
                    this.responseMessage = 'Login failed: ' + error.response.data.username;
                    this.responseStatus = error.response.status;
                } else {
                    this.responseMessage = 'Login failed. Please try again.';
                }
            }
        }
    }


};
</script>
