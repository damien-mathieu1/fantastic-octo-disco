<script setup lang="ts">
import { onMounted } from "vue";
import { loadLocaleMessages, setI18nLanguage } from "./i18n";
import { i18n } from "./main";

loadLocaleMessages(i18n, "fr");

const changeLocale = async (locale: string) => {
  await loadLocaleMessages(i18n, locale);
  // set i18n language
  setI18nLanguage(i18n, locale);
};

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};

onMounted(() => {
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.setAttribute(
        "style",
        "top: " +
        (e.pageY - scrollY) +
        "px; left: " +
        (e.pageX - scrollX) +
        "px; transition: 0.1s ease-out;"
      );
    }
  });
});
</script>

<template>
  <header>
    <nav role="navigation">
      <div id="menuToggle">
        <!--
        A fake / hidden checkbox is used as click reciever,
        so you can use the :checked selector on it.
        -->
        <input type="checkbox" />

        <!--
        Some spans to act as a hamburger.

        They are acting like a real hamburger,
        not that McDonalds stuff.
        -->
        <span></span>
        <span></span>
        <span></span>

        <!--
        Too bad the menu has to be inside of the button
        but hey, it's pure CSS magic.
        -->
        <ul id="menu">
          <li @click="scrollToAnchor('pres')">
            <p>{{ $t("presTitle") }}</p>
          </li>
          <li @click="scrollToAnchor('skills')">
            <p> {{ $t("skills") }}</p>
          </li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <a href="https://erikterwan.com/" target="_blank">Show me more</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="locales">
      <a @click=" changeLocale('en')">🇬🇧</a>
      <a @click="changeLocale('ja')">🇯🇵</a>
      <a @click="changeLocale('fr')">🇫🇷</a>
    </div>
  </header>
  <div class="title">
    <spline-viewer url="https://prod.spline.design/re3Gt8cmnnM08TUA/scene.splinecode"></spline-viewer>

    <div class="chevron" @click="scrollToAnchor('pres')">
      <span>{{ $t("discoverMore") }}</span>
      <font-awesome-icon icon="angle-down" />
    </div>
  </div>

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

.locales {
  top: 0;
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;

  a {
    margin: 0.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      scale: 1.2;
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
  z-index: 5;

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

.section {
  background-color: #272829;
  width: 100%;
  z-index: 2;
  margin-bottom: 25%;
}

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

header {
  display: flex;
  width: 100%;
  height: 100%;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
  z-index: 4;
  position: sticky;
  top: 0;
}

a,
div {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}


#menuToggle {
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 20px;
  z-index: 1;
  transition: all 0.2s ease-in-out;
}

#menuToggle input {
  display: block;
  width: 73px;
  height: 69px;
  left: 0;
  top: 0;
  position: absolute;

  cursor: none;

  opacity: 0;
  /* hide this */
  z-index: 2;
  /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
         * Just a quick hamburger
         */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition:
    transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/*
         * Transform all the slices of hamburger
         * into a crossmark.
         */
#menuToggle input:checked~span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
         * But let's hide the middle one.
         */
#menuToggle input:checked~span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
         * Ohyeah and the last one should go the other direction
         */
#menuToggle input:checked~span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
         * Make this absolute positioned
         * at the top left of the screen
         */
#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;

  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

/*
         * And let's slide it in from the left
         */
#menuToggle input:checked~ul {
  transform: none;
}

.onclick-menu:focus {
  /* clicking on label should toggle the menu */
  pointer-events: none;
}

.onclick-menu:focus .onclick-menu-content {
  /*  opacity is 1 in opened state (see below) */
  opacity: 1;
  visibility: visible;
  display: inherit;
  /* don't let pointer-events affect descendant elements */
  pointer-events: auto;
}

.onclick-menu-content {
  /* use opacity to fake immediate toggle */
  display: none;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0.5s;
}

.onclick-menu-content li {
  list-style: none;
}</style>
