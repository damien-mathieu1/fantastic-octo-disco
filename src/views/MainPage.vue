<script setup lang="ts">
import TopShapeDivider from "@/components/utilities/TopShapeDivider.vue";
import BottomShapeDivider from "@/components/utilities/BottomShapeDivider.vue";
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import styled from "vue3-styled-components";

const Section = styled.section`
  background-color: #272829;
  width: 100%;
  z-index: 2;
  margin-bottom: 25%;
`;

const SectionInner = styled.div`
  display: flex;
  padding: 5rem;
  flex-direction: column;
`;

const TextWrapper = styled.p`
  color: white;
  line-height: 2em;
  font-size: 1.3em;
`
</script>

<template>
  <Header />
  <Title />
  <Section id="pres">
    <TopShapeDivider />
    <SectionInner>
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
      <div style="display: flex" data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200">
        <div style="border: solid white 1px; max-width: 40%" >
          <TextWrapper style="color: white; line-height: 2em;">{{ $t("presentation.myself") }}</TextWrapper>
        </div>
        <div style="max-width: 40%; border: solid white 1px">
          <img src="../assets/takumi-chilling.gif" height="300" />
        </div>
      </div>

      <div style="display: flex" data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200">
        <div style="max-width: 40%; border: solid white 1px">
          <img src="../assets/cowboy_500.gif" height="300" />
        </div>
        <div style="border: solid white 1px; max-width: 40%" >
          <TextWrapper style="color: white; line-height: 2em;">{{ $t("presentation.moreAbtMe") }}</TextWrapper>
        </div>
      </div>
      
    </SectionInner>
    <BottomShapeDivider />
  </Section>

  <Section id="skills">
    <TopShapeDivider />
    <SectionInner>
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
      <div style="display: flex" data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200">
        <div style="border: solid white 1px; max-width: 40%">
          <p style="color: white">{{ $t("loremIpsum") }}</p>
        </div>
        <div style="max-width: 40%; border: solid white 1px">
          <img src="../assets/icon-pres.svg" height="300" />
        </div>
      </div>
    </SectionInner>
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
