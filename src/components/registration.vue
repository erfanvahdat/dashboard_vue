<template>
    <!-- component -->
    <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section class="flex w-[30rem] flex-col space-y-10">

            <div class="flex flex-row justify-between  space-x-5">


                <span class="text-center text-4xl font-z">Sign Up</span>
                <login_icon @click='login_direction'>login</login_icon>


            </div>

            <!-- Email or Username input -->
            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input v-model="user" type="text" placeholder="Username" @keyup.enter="register"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none " />
            </div>

            <!-- Password input -->
            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input v-model="password" type="password" placeholder="Password" @keyup.enter="register"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
            </div>

            <!-- Register button -->
            <button @click="register"
                class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 rounded-2">
                Sign up
            </button>
            <div v-if="spin_loader">
                <loading_spin></loading_spin>
            </div>

            <!-- Response message -->
            <div v-if="responseMessage" class="text-center text-lg mt-4">

                <!-- <p>{{ responseMessage }} _ Status: {{ responseStatus }}</p> -->


                <!-- Show success message for status code 201 -->
                <div v-if="displayStatus == '200'" class="mt-2 bg-teal-500 text-sm text-white rounded-lg p-4"
                    role="alert" tabindex="-1" aria-labelledby="hs-solid-color-success-label">
                    <span id="hs-solid-color-success-label" class="font-bold ">Success</span>
                    <div class="font-serif">Registration Success</div>
                    Token Is: {{ token }}
                </div>

                <!-- Show error message for status code 400 -->
                <div v-if="responseStatus === '400' && displayStatus"
                    class="mt-2 bg-red-500 text-sm text-white rounded-lg p-4" role="alert" tabindex="-1"
                    aria-labelledby="hs-solid-color-danger-label">
                    <span id="hs-solid-color-danger-label" class="font-bold font-serif underline"></span>
                    <!-- user is already exist or something else happened! -->
                    {{ responseMessage }}
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
// const reg_api = process.env;

export default {
    data() {
        return {
            displayStatus: false,  // Controls visibility of status messages
            user: '',
            password: '',
            responseMessage: '',
            responseStatus: '',
            spin_loader: false,   // Controls loading spinner visibility
        };
    },
    methods: {
        login_direction() {
            this.$emit('go_login');
        },
        async register() {
            // Show the loading spinner while making the request
            this.spin_loader = true;

            try {
                // Sending the POST request
                const response = await axios.post(`${import.meta.env.VITE_REGIS}`, {
                    username: this.user,
                    password: this.password
                });

                // Success: registration successful
                this.responseMessage = response.data.status;
                this.responseStatus = '201';  // Set status to 201 (Success)

                // Hide the loading spinner after 2 seconds
                setTimeout(() => {
                    this.spin_loader = false;
                    this.displayStatus = true;  // Show the success message

                    this.$emit('reg_success');

                }, 500);


            } catch (error) {
                // Error: registration failed
                if (error.response && error.response.status === 400) {
                    // Extract error details
                    const errorMessage = error.response.data.error
                        ? error.response.data.error[0]
                        : 'Unknown error';

                    this.responseStatus = '400';  // Set status to 400 (Error)
                    this.responseMessage = `Registration failed: ${errorMessage}`;
                } else {
                    this.responseMessage = 'An error occurred. Please try again.';
                }

                // Stop the spinner and show error after a short delay
                setTimeout(() => {
                    this.spin_loader = false;  // Stop the loading spinner
                    this.displayStatus = true;  // Show the error message

                    // Hide the message after 2 seconds
                    setTimeout(() => {
                        this.displayStatus = false;
                    }, 3000);
                }, 500);
            }
        }
    }
};
</script>