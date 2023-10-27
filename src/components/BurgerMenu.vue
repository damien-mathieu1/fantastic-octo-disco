<template>
  <nav role="navigation">
    <div class="gravityButton">
      <div id="spanBurger">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li @click="scrollToAnchor('pres')">
            <a>{{ $t("presTitle") }}</a>
          </li>
          <li @click="scrollToAnchor('skills')">
            <a> {{ $t("skills") }}</a>
          </li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <a href="https://erikterwan.com/" target="_blank">Show me more</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};

onMounted(() => {
  document.querySelectorAll(".gravityButton").forEach((btn) => {
    console.log(btn);
    btn.addEventListener("mousemove", (e) => {
      //@ts-ignore
      const target = e.target.localName;
      const desactivateListenner = ["a", "li", "ul"];
      const iterator = desactivateListenner.values();
      for (const value of iterator) {
        if (value === target) {
          return;
        }
      }

      const rect = btn.getBoundingClientRect();
      const h = rect.width / 2;
      //@ts-ignore
      const x = e.clientX - rect.left - h;
      //@ts-ignore
      const y = e.clientY - rect.top - h;

      const r1 = Math.sqrt(x * x + y * y);
      const r2 = (1 - r1 / h) * r1;

      const angle = Math.atan2(y, x);
      const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
      const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

      const op = r2 / r1 + 0.25;

      //@ts-ignore
      btn.style.setProperty("--tx", `${tx}px`);
      //@ts-ignore
      btn.style.setProperty("--ty", `${ty}px`);
      //@ts-ignore
      btn.style.setProperty("--opacity", `${op}`);
    });

    btn.addEventListener("mouseleave", (e) => {
      //@ts-ignore
      btn.style.setProperty("--tx", "0px");
      //@ts-ignore
      btn.style.setProperty("--ty", "0px");
      //@ts-ignore
      btn.style.setProperty("--opacity", `${0.25}`);
    });
  });
});
</script>
<style lang="scss" scoped>
.gravityButton {
  display: grid;
  place-items: center;
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  // border: 1px dashed #fff2;*
  position: absolute;

  & > div {
    font: inherit;
    aspect-ratio: 1;
    background: none;
    transform: translate(var(--tx, 0), var(--ty, 0));
    cursor: pointer;
    transition: all 0.2s ease-out;

    &:hover,
    &:focus-visible {
      --_fill: var(--color, #fff);
    }

    &:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 2px;
      opacity: 1;
    }
  }
}


#spanBurger input {
  display: block;
  width: 38px;
  height: 30px;
  left: 50%;
  top: 50%;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
  transform: translateX(-17px) translateY(-13px);
}

/*
         * Just a quick hamburger
         */
#spanBurger span {
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

#spanBurger span:first-child {
  transform-origin: 0% 0%;
}

#spanBurger span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/*
         * Transform all the slices of hamburger
         * into a crossmark.
         */
#spanBurger input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
         * But let's hide the middle one.
         */
#spanBurger input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
         * Ohyeah and the last one should go the other direction
         */
#spanBurger input:checked ~ span:nth-last-child(2) {
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
#spanBurger input:checked ~ ul {
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
}

</style>
