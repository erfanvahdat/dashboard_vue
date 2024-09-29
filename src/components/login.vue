<template>
  <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section class="flex w-[30rem] flex-col space-y-10">
      <div class="flex flex-row justify-between space-x-5">
        <span class="w-full text-center justify-center text-4xl font-medium">Login</span>
        <!-- <login_icon @click="Signup"></login_icon> -->
      </div>

      <!-- Username input -->
      <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input
          v-model="user"
          type="text"
          placeholder="Username"
          @keyup.enter="login" 
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        />
      </div>

      <!-- Password input -->
      <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          @keyup.enter="login" 
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
        />
      </div>

      <!-- Login button -->
      <button
        @click="login"
        class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 rounded-2"
      >
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
        <!-- <span class="text-slate-700"> Have an account? </span> -->
        <button class="text-blue-500 hover:underline" @click="Signup">Sign Up</button>
      </p>
    </section>
  </main>
</template>

<script>
import axios from "axios";

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
    async login() {
      // Show spinner while the login request is in progress
      this.spin_loader = true;
      try {
        const response = await axios.post(`${import.meta.env.VITE_LOGIN}`, {
          username: this.user,
          password: this.password,
        });

        // Handle login success
        this.responseMessage = "Login successful: " + response.data.username;
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);

        console.log(response.data.access);

        // Hide the loading spinner after 2 seconds
        setTimeout(() => {
          this.spin_loader = false;
          this.$emit("login_success");
        }, 2000);
      } catch (error) {
        // Handle login failure
        this.spin_loader = false;
        this.response_error = true;
        setTimeout(() => {
          this.response_error = false;
        }, 2000);
      }
    },
  },
};
</script>
