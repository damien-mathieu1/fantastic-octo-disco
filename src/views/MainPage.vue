<script setup lang="ts">
import TopShapeDivider from "@/components/utilities/TopShapeDivider.vue";
import BottomShapeDivider from "@/components/utilities/BottomShapeDivider.vue";
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import ProjectSlider from "@/components/ProjectSlider.vue";
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
  @media (max-width: 1100px) {
    padding: 2rem;
  }
`;

const TitleH1 = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  font-family: "Roboto", sans-serif;
  margin-bottom: 7%;
  font-style: italic;
  @media (max-width: 1100px) {
    font-size: 2rem;
  }
`;

const TextWrapper = styled.p`
  color: white;
  line-height: 2em;
  font-size: 1.3em;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutText = styled.p`
  max-width: 30%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 3rem;
  @media (max-width: 1100px) {
    max-width: 90%;
    margin: 0;
    & > p {
      text-align: center;
      line-height: normal;
      text-align: start;
    }
  }
`;

const ResponsiveImg = styled.img`
  max-width: 100%;
  height: auto;
  @media (max-width: 1100px) {
    max-width: 90%;
  }
`;
</script>

<template>
  <Header />
  <Title />
  <Section id="pres">
    <TopShapeDivider />
    <SectionInner>
      <TitleH1
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        {{ $t("presTitle") }}
      </TitleH1>
      <ContentWrapper
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <AboutText>
          <TextWrapper>{{
            $t("presentation.myself")
          }}</TextWrapper>
          <br />
          <TextWrapper>{{ $t("presentation.moreAbtMe") }}</TextWrapper>
        </AboutText>
        <div style="max-width: 40%">
          <ResponsiveImg src="../assets/takumi-chilling.gif" height="300" />
        </div>
      </ContentWrapper>
    </SectionInner>
    <BottomShapeDivider />
  </Section>

  <Section id="skills">
    <TopShapeDivider />
    <SectionInner>
      <TitleH1
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        {{ $t("skills") }}
      </TitleH1>
      <ContentWrapper>
        <ProjectSlider />
      </ContentWrapper>
    </SectionInner>
    <BottomShapeDivider />
  </Section>

  <Section id="project">
    <TopShapeDivider />
    <SectionInner>
      <TitleH1
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        {{ $t("project") }}
      </TitleH1>
      <ContentWrapper
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <ProjectSlider />
      </ContentWrapper>
    </SectionInner>
    <BottomShapeDivider />
  </Section>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.section {
  background-color: #272829;
  width: 100%;
  z-index: 2;
  margin-bottom: 25%;
}
</style>
