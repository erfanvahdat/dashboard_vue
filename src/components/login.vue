<template>
  <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section class="flex w-[30rem] flex-col space-y-10">
      <div class="flex flex-row justify-between space-x-5">
        <span class="w-full text-center justify-center text-4xl font-medium">Login</span>
      </div>

      <!-- Username input -->
      <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input v-model="user" type="text" placeholder="Username" @keyup.enter="handleLogin"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
      </div>

      <!-- Password input -->
      <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input v-model="password" type="password" placeholder="Password" @keyup.enter="handleLogin"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
      </div>

      <!-- Login button -->
      <button @click="handleLogin"
        class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 rounded-2">
        Login
      </button>

      <!-- Loading spinner -->
      <div v-if="spin_loader">
        <loading_spin></loading_spin>
      </div>

      <!-- Error message -->
      <span v-if="response_error" class="text-center text-red-500">
        Something went wrong. Please try again.
      </span>

      <p class="flex justify-center space-x-1">
        <button class="text-blue-500 hover:underline" @click="Signup">Sign Up</button>
      </p>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import chalk from 'chalk';
export default {
  data() {
    return {
      user: "",
      password: "",
      responseMessage: "",
      spin_loader: false,
      response_error: false,
    };
  },
  methods: {
    Signup() {
      this.$emit("sign_up");
    },
    async handleLogin() {
      this.spin_loader = true;
      
      // Wait 5 seconds before proceeding with login attempt
      setTimeout(async () => {
        this.spin_loader = false;

        // Uncomment and use the login functionality here
        try {
        //   const response = await axios.post(`${import.meta.env.VITE_LOGIN}`, {
        //     username: this.user,
        //     password: this.password,
        //   });

          // Handle login success
          // this.responseMessage = "Login successful: " + response.data.username;
          // localStorage.setItem("access", response.data.access);
          // localStorage.setItem("refresh", response.data.refresh);

          // Emit the success event
          this.$emit("login_success");
        } catch (error) {

          console.log(chalk.red('something goes wrong!'))
          // // Handle login failure
          // this.response_error = true;
          // setTimeout(() => {
          //   this.response_error = false;
          // }, 2000);
        }

      }, 1000);
    },
  },
};
</script>
