<script setup lang="ts">
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "vue3-styled-components";



const ProjectCard = styled.div`
  background: rgb(184, 97, 238);
  background: radial-gradient(
    circle,
    rgba(184, 97, 238, 1) 0%,
    rgba(2, 0, 36, 1) 96%
  );
  width: 100vh;
  height: 100vh;
  color: white;
`;
</script>

<template>
    <Splide
          :options="{
            autoplay: true,
            rewind: true,
            type: 'loop',
            direction: 'ttb',
            height: '10rem',
            interval: 1800,
            pauseOnHover: true,
          }"
        >
          <SplideSlide>
            <ProjectCard
              ><div style="display: flex">
                <div style="width: 50%; align-items: center; display: flex">
                  <h1
                    style="
                      font-size: 4rem;
                      font-weight: bold;
                      font-style: italic;
                      font-family: &quot;Roboto&quot;, sans-serif;
                    "
                  >
                    FakeX
                  </h1>
                </div>
                <div style="width: 50%; display: flex; flex-direction: column">
                  <p style="padding: 2rem; font-size: 1.2rem">
                    {{ $t("fakeX")  }}
                  </p>
                  <div
                    style="
                      padding-left: 2rem;
                      align-items: center;
                      display: flex;
                    "
                  >
                    <span style="margin-right: 10px; font-size: 1.1rem"
                      >{{ $t("technos") }}</span
                    >
                    <img src="../assets/php.svg" height="50" />
                    <span style="margin-left: 10px; font-size: 1.1rem"
                      >{{ $t("links") }}</span
                    >
                    <a href="https://github.com/damien-mathieu1/FakeX" target="_blank"
                      ><img src="../assets/github.svg" height="50"
                    /></a>
                  </div>
                </div>
              </div>
            </ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              ><div style="display: flex">
                <div style="width: 50%; align-items: center; display: flex">
                  <h1
                    style="
                      font-size: 4rem;
                      font-weight: bold;
                      font-style: italic;
                      font-family: &quot;Roboto&quot;, sans-serif;
                    "
                  >
                    eVote
                  </h1>
                </div>
                <div style="width: 50%; display: flex; flex-direction: column">
                  <p style="padding: 2rem 0rem 2rem 2rem; font-size: 1.2rem">
                    {{ $t("eVote") }}
                  </p>
                  <div
                    style="
                      padding-left: 2rem;
                      align-items: center;
                      display: flex;
                    "
                  >
                    <span style="margin-right: 10px; font-size: 1.1rem"
                      >{{ $t("technos") }}</span
                    >
                    <img src="../assets/java.svg" height="50" />
                    <span style="margin-left: 10px; font-size: 1.1rem"
                      >{{ $t("links") }}</span
                    >
                    <a href="https://github.com/damien-mathieu1/eVote" target="_blank"
                      ><img src="../assets/github.svg" height="50"
                    /></a>
                  </div>
                </div></div
            ></ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard>
              <div style="display: flex">
                <div style="width: 50%; align-items: center; display: flex">
                  <h1
                    style="
                      font-size: 4rem;
                      font-weight: bold;
                      font-style: italic;
                      font-family: &quot;Roboto&quot;, sans-serif;
                    "
                  >
                    PortfolioV2
                  </h1>
                </div>
                <div style="width: 50%; display: flex; flex-direction: column">
                  <p style="padding: 2rem; font-size: 1.2rem">
                    {{ $t("portfolioV2") }}
                  </p>
                  <div
                    style="
                      padding-left: 2rem;
                      align-items: center;
                      display: flex;
                    "
                  >
                    <span style="margin-right: 10px; font-size: 1.1rem"
                      >{{ $t("technos") }}</span
                    >
                    <img src="../assets/vue.svg" height="50" />
                    <img src="../assets/typescript.svg" height="50" />
                    <img src="../assets/css.svg" height="50" />
                    <span style="margin-left: 10px; font-size: 1.1rem"
                      >{{ $t("links") }}</span
                    >
                    <a href="https://github.com/damien-mathieu1/fantastic-octo-disco" target="_blank"
                      ><img src="../assets/github.svg" height="50"
                    /></a>
                    <a href="https://damien-mathieu1.github.io/" target="_blank"
                      ><img src="../assets/link.svg" height="50" />
                    </a>
                  </div>
                </div>
              </div>
            </ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              v-on:click="
                () => {
                  console.log('test');
                }
              "
              ><div style="display: flex">
                <div style="width: 50%; align-items: center; display: flex">
                  <h1
                    style="
                      font-size: 4rem;
                      font-weight: bold;
                      font-style: italic;
                      font-family: &quot;Roboto&quot;, sans-serif;
                    "
                  >
                    Rickypedia
                  </h1>
                </div>
                <div style="width: 50%; display: flex; flex-direction: column">
                  <p
                    style="
                      padding-top: 2rem;
                      padding-left: 2rem;
                      font-size: 1.2rem;
                    "
                  >
                    {{ $t("rickypedia") }}
                  </p>
                  <div
                    style="
                      padding-left: 2rem;
                      align-items: center;
                      display: flex;
                    "
                  >
                    <span style="margin-right: 10px; font-size: 1.1rem"
                      >{{ $t("technos") }}</span
                    >
                    <img src="../assets/react.svg" height="50" />
                    <img src="../assets/graphql.svg" height="50" />
                    <span style="margin-left: 10px; font-size: 1.1rem"
                      >{{ $t("links") }}</span
                    >
                    <a href="https://github.com/damien-mathieu1/Rickypedia"
                      ><img src="../assets/github.svg" height="50"
                    /></a>
                    <a href="https://rickypedia.vercel.app/" target="_blank"
                      ><img src="../assets/link.svg" height="50"
                    /></a>
                  </div>
                </div>
              </div>
            </ProjectCard>
          </SplideSlide>
        </Splide>
</template>

<style lang="scss" scoped>
</style>