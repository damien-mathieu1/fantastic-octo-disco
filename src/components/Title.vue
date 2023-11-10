<template>
  <div class="title">
    <canvas
      width="100%"
      height="100%"
      style="position: relative"
      id="canvas3d"
      v-if="windowWidth > 1100"
    >
    </canvas>
    <span style="z-index:3; position: relative; height: 100vh; width: 100%;" v-else>
      <h1>{{ $t("title") }}</h1>
      <h2>{{ $t("subtitle") }}</h2>
    </span>
    <div class="chevron" @click="scrollToAnchor('pres')">
      <span>{{ $t("discoverMore") }}</span>
      <font-awesome-icon icon="angle-down" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Application } from "@splinetool/runtime";
import { onMounted, ref } from "vue";
import Loading from "./utilities/Loading.vue";

const windowWidth = ref(window.innerWidth);
const load = ref(false);

window.addEventListener("resize", () => {
  windowWidth.value = window.innerWidth;
});

onMounted(() => {
  //@ts-ignore
  const canvas: HTMLCanvasElement = document.getElementById("canvas3d");
  const app = new Application(canvas);
  app
    .load("https://prod.spline.design/re3Gt8cmnnM08TUA/scene.splinecode", {
      credentials: "include",
      mode: "no-cors",
    })
    .then(() => {
      setTimeout(() => {
        load.value = true;
      }, 1000);
    });
});

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  min-height: 100vh;
  color: white;
  width: 100%;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin: 0;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 0;
    }
  }
}

.chevron {
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  transform: translateY(-100px);
  @media (max-width: 1100px) {
    transform: translateY(-50px);
  }
  z-index: 5;
  cursor: pointer;

  &:hover {
    svg {
      scale: 1.2;
    }
  }

  svg {
    height: 30px;
    color: white;
    transition: all 0.2s ease-in-out;
  }
}
</style>
