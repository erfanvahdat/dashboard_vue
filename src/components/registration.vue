<template>
    <!-- component -->
    <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section class="flex w-[30rem] flex-col space-y-10">

            <div class="flex flex-row justify-between  space-x-5">



                <span class="text-center text-4xl font-medium">Sign Up</span>
                <login_icon @click='login_direction'></login_icon>

            </div>


            <!-- Email or Username input -->
            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input v-model="user" type="text" placeholder="Email or Username"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
            </div>

            <!-- Password input -->
            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input v-model="password" type="password" placeholder="Password"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
            </div>

            <!-- Register button -->
            <button @click="register"
                class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                Register
            </button>

            <!-- Response message -->
            <div v-if="responseMessage" class="text-center text-lg mt-4">
                <p>{{ responseMessage }} _ Status: {{ responseStatus }}</p>


                <!-- Show success message for status code 201 -->
                <div v-if="responseStatus === 201 && display_status_cont"
                    class="mt-2 bg-teal-500 text-sm text-white rounded-lg p-4" role="alert" tabindex="-1"
                    aria-labelledby="hs-solid-color-success-label">
                    <span id="hs-solid-color-success-label" class="font-bold ">Success</span>
                    <div class="font-serif">Registration Success </div>
                    Token Is: {{ token }}
                </div>

                <!-- Show error message for status code 400 -->
                <div v-if="responseStatus === 400 && display_status_cont"
                    class="mt-2 bg-red-500 text-sm text-white rounded-lg p-4" role="alert" tabindex="-1"
                    aria-labelledby="hs-solid-color-danger-label">
                    <span id="hs-solid-color-danger-label" class="font-bold font-serif underline">Danger</span>
                    user is Already exist or something else happend!

                </div>
            </div>

            <a href="#" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">
                FORGOT PASSWORD?</a>

            <!-- <p class="text-center text-lg">
                No account?
                <a href="#" class="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
            </p> -->
        </section>
    </main>
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

        };
    },
    methods: {


        login_direction() {
            this.$emit('reg_success');

        },
        async register() {
            try {
                const response = await axios.post('http://192.168.1.104:7000/api/v1/register/', {
                    username: this.user,
                    password: parseInt(this.password)  // Keep the password as string, no need to convert it into an integer
                });

                // Accessing the response body
                this.responseMessage = 'Registration successful: ' + response.data.username;
                // this.token = response.data.token;
                this.responseStatus = response.status;

                this.display_status_cont = true;

                // // Save token to local storage
                // localStorage.setItem('authToken', response.data.token);

                // Emit an event to redirect to login
                this.$emit('reg_success');

                console.log(this.responseStatus)
                console.log(this.responseMessage)


                setTimeout(() => {
                    this.display_status_cont = false;
                }, 2000);

            } catch (error) {
                if (error.response) {
                    this.responseMessage = 'Registration failed: ' + error.response.data.message;
                    this.responseStatus = error.response.status;
                } else {
                    this.responseMessage = 'Registration failed. Please try again.';
                }
            }
        }
    }

};
</script>
