<script setup lang="ts">
import bcrypt from "bcryptjs";
import Cookies from "js-cookie";
import { ref } from "vue";

const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const email = ref("");
const password = ref("");
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const login = async () => {
  if (!emailRegex.test(email.value)) {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    return;
  }

  const hashedPassword = hashPassword(password.value);
  const data = {
    email: email.value,
    password: hashedPassword,
  };
  (
    fetch(`${window.location.protocol}//${window.location.host}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data),
    }).then((res) => (res.status === 200 ? res.json() : {})) as Promise<{
      token?: string;
    }>
  ).then((d) => {
    if (!d.token) return alert("Einlogdaten sind falsch.");

    Cookies.set("token", d.token);

    window.location.href = `${window.location.href.replace(
      "login",
      "dashboard"
    )}`;
  });
};
</script>

<template>
  <div class="flex flex-col items-center mt-20">
    <h1 class="text-3xl font-bold mb-10">Admin Login</h1>
    <form class="w-full max-w-sm">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          required="true"
          autocomplete="username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Passwort
        </label>
        <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Passwort"
          required="true"
          autocomplete="current-password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          @click="() => login()"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>
