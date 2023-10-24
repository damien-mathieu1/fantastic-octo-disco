<script setup lang="ts">
import { onMounted } from 'vue'

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName)
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  const cursor = document.querySelector('.cursor')
  document.addEventListener('mousemove', (e) => {
  if (cursor) {
    cursor.setAttribute(
      'style',
      'top: ' + (e.pageY - scrollY) + 'px; left: ' + (e.pageX - scrollX) + 'px; transition: 0.2s ease-out;',
    )
  }  
})
})

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
          <li><a href="#">Home</a></li>
          <li class="">
            <div tabindex="0" class="onclick-menu">
              About
              <ul class="onclick-menu-content">
                <li><a href="#">Sub-1</a></li>
                <li><a href="#">Sub-2</a></li>
                <li><a href="#">Sub-3</a></li>
              </ul>
            </div>
          </li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="https://erikterwan.com/" target="_blank">Show me more</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="title">
    <spline-viewer url="https://prod.spline.design/re3Gt8cmnnM08TUA/scene.splinecode"></spline-viewer>
    <div class="chevron">
      <span>
        découvrir plus
      </span>
      <font-awesome-icon icon="angle-down" @click="scrollToAnchor('projet')" />
    </div>
  </div>

  

  <div class="presentation">
    <div class="custom-shape-divider-top-1698099913">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          class="shape-fill"></path>
      </svg>

    </div>
    <div id="projet">
      <p class="text">Hover over this text to change cursor</p>
      <div class="cursor"></div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.chevron {
  display: flex;
  flex-direction: column;
  color:white;
  justify-content: center;
  align-items: center;
  transform: translateY(-100px);
  z-index: 5;
  svg {
    height: 30px;
    color: white;
    transition: all 0.05s ease-in-out;
    &:hover {
      color: tomato;
      scale: 1.2;
      transform: translateY(10px);
    }
    &:hover ~ .cursor {
      transform: scale(6);
      box-shadow: 0 0 10px #fff;
      color: #000;
    }
  }
}
.custom-shape-divider-top-1698099913 {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-1698099913 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 218px;
}

.custom-shape-divider-top-1698099913 .shape-fill {
  fill: #020202;
}

.presentation {
  background-color: #161616;
  height: 100vh;
  width: 100%;
}

.title {
  min-height: 100vh;
  color: white;

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

a:hover {
  color: tomato;
}

#menuToggle {
  display: block;
  position: absolute;
  top: 20px;
  left: 20px;
  border: solid white 1px;
  padding: 20px;
  z-index: 1;

  -webkit-user-select: none;
  user-select: none;

  &:hover {
    background-color: #232323;
    border: solid white 1px;
    border-radius: 40px;
  }

  transition: all 0.7s ease-in-out;
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
