<script setup lang="ts">
import { onMounted } from "vue";
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import { loadLocaleMessages, setI18nLanguage } from "../i18n";
import { i18n } from "../main";

loadLocaleMessages(i18n, "fr");



onMounted(() => {
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.setAttribute(
        "style",
        "top: " +
        (e.pageY - scrollY - 7) +
        "px; left: " +
        (e.pageX - scrollX - 5) +
        "px; transition: 0.1s ease-out;"
      );
    }
  });
});
</script>

<template>
  <Header />
  <Title />
  

  <div class="section" id="pres">
    <div class="custom-shape-divider-top-1698269483">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"></path>
      </svg>
    </div>
    <div  style="display: flex; padding: 5rem; flex-direction: column; ">
      <h1 style="font-size: 5rem; color: rgb(255, 255, 255); font-family: 'Mea Culpa', cursive; font-weight: 600; margin-bottom: 7%;">{{ $t("presTitle") }}</h1>
      <div style="display: flex; justify-content: space-around;">
        <div style="border: solid white 1px; max-width: 40%;">
          <p style="color:white;">{{ $t("loremIpsum") }}</p>
          
        </div>
        <div style="max-width: 40%; border: solid white 1px;">
          <img 
           src="./assets/icon-pres.svg"
           height="300"
           />
        </div>
      </div>
    </div>
    <div class="custom-shape-divider-bottom-1698269654">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"></path>
      </svg>
    </div>

  </div>

  <div class="section" id="skills">
    <div class="custom-shape-divider-top-1698269483">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"></path>
      </svg>
    </div>
    <div  style="display: flex; padding: 5rem; flex-direction: column;">
      <h1 style="font-size: 5rem; color: rgb(255, 255, 255); font-family: 'Mea Culpa', cursive; font-weight: 600; margin-bottom: 7%;">{{ $t("skills") }}</h1>
    </div>
    <div class="custom-shape-divider-bottom-1698269654">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"></path>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap');
.custom-shape-divider-bottom-1698269654 {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1698269654 svg {
  position: relative;
  display: block;
  width: calc(111% + 1.3px);
  height: 229px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1698269654 .shape-fill {
  fill: #000000;
}

.custom-shape-divider-top-1698269483 {
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1698269483 svg {
  position: relative;
  display: block;
  width: calc(111% + 1.3px);
  height: 229px;
}

.custom-shape-divider-top-1698269483 .shape-fill {
  fill: #000000;
}


.section {
  background-color: #272829;
  width: 100%;
  z-index: 2;
  margin-bottom: 25%;
}



</style>
