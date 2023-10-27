<script setup lang="ts">
import TopShapeDivider from "@/components/utilities/TopShapeDivider.vue";
import BottomShapeDivider from "@/components/utilities/BottomShapeDivider.vue";
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import styled from "vue3-styled-components";

const Section = styled.div`
  background-color: #272829;
  width: 100%;
  z-index: 2;
  margin-bottom: 25%;
`;

const TitleSection = styled.div`
  display: flex;
  padding: 5rem;
  flex-direction: column;
`;
</script>

<template>
  <Header />
  <Title />
  <Section id="pres">   
    <TopShapeDivider />
    <TitleSection>
      <h1
        style="
          font-size: 5rem;
          color: rgb(255, 255, 255);
          font-family: &quot;Mea Culpa&quot;, cursive;
          font-weight: 600;
          margin-bottom: 7%;
        "
      >
        {{ $t("presTitle") }}
      </h1>
      <div style="display: flex; justify-content: space-around">
        <div style="border: solid white 1px; max-width: 40%">
          <p style="color: white">{{ $t("loremIpsum") }}</p>
        </div>
        <div style="max-width: 40%; border: solid white 1px">
          <img src="../assets/icon-pres.svg" height="300" />
        </div>
      </div>
    </TitleSection>
    <BottomShapeDivider />
  </Section>

  <Section id="skills">
    <TopShapeDivider />
    <TitleSection>
      <h1
        style="
          font-size: 5rem;
          color: rgb(255, 255, 255);
          font-family: &quot;Mea Culpa&quot;, cursive;
          font-weight: 600;
          margin-bottom: 7%;
        "
      >
        {{ $t("skills") }}
      </h1>
    </TitleSection>
    <BottomShapeDivider />
  </Section>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap");
.section {
  background-color: #272829;
  width: 100%;
  z-index: 2;
  margin-bottom: 25%;
}
</style>
