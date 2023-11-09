<script setup lang="ts">
import TopShapeDivider from "@/components/utilities/TopShapeDivider.vue";
import BottomShapeDivider from "@/components/utilities/BottomShapeDivider.vue";
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import styled from "vue3-styled-components";
import "@splidejs/splide/dist/css/splide.min.css";

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

const TitleH1 = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: rgb(255, 255, 255);
  font-family: 'Roboto', sans-serif;
  margin-bottom: 7%;
  font-style: italic;
`;

const TextWrapper = styled.p`
  color: white;
  line-height: 2em;
  font-size: 1.3em;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

const ProjectCard = styled.div`
  background-color: black;
  width: 100vh;
  height: 100vh;
  color: white;
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
        data-aos-delay="200"
      >
        {{ $t("presTitle") }}
      </TitleH1>
      <ContentWrapper
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <div
          style="
            max-width: 30%;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            margin: 3rem;
          "
        >
          <TextWrapper style="color: white; line-height: 2em">{{
            $t("presentation.myself")
          }}</TextWrapper>
          <br />
          <TextWrapper>{{ $t("presentation.moreAbtMe") }}</TextWrapper>
        </div>
        <div style="max-width: 40%">
          <img src="../assets/takumi-chilling.gif" height="300" />
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
      <ContentWrapper
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
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
            <ProjectCard><TitleH1> eVote </TitleH1> </ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard><TitleH1> FakeX </TitleH1> </ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard>
              <div style="display: flex;">
                <TitleH1> ePortfolio </TitleH1> <TitleH1>Test</TitleH1>
              </div>
              </ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard><TitleH1> PortfolioV2 </TitleH1> </ProjectCard>
          </SplideSlide>
        </Splide>
      </ContentWrapper>
    </SectionInner>
    <BottomShapeDivider />
  </Section>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.section {
  background-color: #272829;
  width: 100%;
  z-index: 2;
  margin-bottom: 25%;
}
</style>
