<script setup lang="ts">
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const send = () => {
  const mail = document.getElementById("mail") as HTMLInputElement;
  const message = document.getElementById("message") as HTMLInputElement;

  if (!mail.value) return;
  if (!message.value) return;

  if (!emailRegex.test(mail.value)) {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    return;
  }

  fetch(`${window.location.protocol}//${window.location.host}/api/kontakt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message.value,
      mail: mail.value,
    }),
  });

  alert(
    "Ihre Nachricht wurde gesendet.\nWir werden uns so schnell wie möglich bei Ihnen melden."
  );

  setTimeout(() => {
    mail.value = "";
    message.value = "";
  }, 5000);
};
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-3xl font-bold mt-10 mb-5">Kontaktieren Sie uns</h1>
    <form
      class="w-full md:w-1/2 lg:w-1/3 px-5 py-3 rounded-lg shadow-md bg-white"
    >
      <input
        type="text"
        placeholder="E-Mail"
        required="true"
        class="w-full py-2 px-3 mb-3 text-sm text-gray-400 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        id="mail"
      />
      <br />
      <textarea
        type="text"
        placeholder="Ihre Nachricht"
        required="true"
        class="w-full py-2 px-3 mb-3 text-sm text-gray-400 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent h-80"
        id="message"
      ></textarea>
      <br />
      <button
        class="w-full py-2 px-3 bg-primary-500 hover:bg-primary-600 font-bold rounded-lg shadow-md transition-all duration-300"
        @click="() => send()"
      >
        Absenden
      </button>
    </form>
  </div>
</template>
