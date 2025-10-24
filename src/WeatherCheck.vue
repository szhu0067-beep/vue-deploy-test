<script setup>
import { ref } from "vue";

const city = ref("");
const weather = ref(null);
const error = ref("");

// ✅ 使用无密钥的测试天气API (wttr.in)
async function getWeather() {
  error.value = "";
  weather.value = null;

  try {
    const url = `https://wttr.in/${city.value}?format=j1`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();

    // 提取主要天气信息
    weather.value = {
      name: city.value,
      temp: data.current_condition[0].temp_C,
      desc: data.current_condition[0].weatherDesc[0].value,
    };
  } catch (err) {
    error.value = "City not found";
  }
}
</script>

<template>
  <div style="text-align:center; margin-top:50px;">
    <h1>🌦️ Get Weather</h1>
    <input v-model="city" placeholder="Enter city name" />
    <button @click="getWeather">Check</button>

    <div v-if="error" style="color:red; margin-top:10px;">{{ error }}</div>

    <div v-if="weather" style="margin-top:20px;">
      <h2>{{ weather.name }}</h2>
      <p>Temperature: {{ weather.temp }}°C</p>
      <p>Weather: {{ weather.desc }}</p>
    </div>
  </div>
</template>
