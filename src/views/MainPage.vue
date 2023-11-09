<script setup lang="ts">
import TopShapeDivider from "@/components/utilities/TopShapeDivider.vue";
import BottomShapeDivider from "@/components/utilities/BottomShapeDivider.vue";
import Header from "@/components/Header.vue";
import Title from "@/components/Title.vue";
import styled from "vue3-styled-components";
import '@splidejs/splide/dist/css/splide.min.css';


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
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
`;

const ProjectCard = styled.div`
  background-color: #272829;
  border: solid white 1px;
  color: white;
  max-width: 100%;
  overflow: hidden;
  mix-blend-mode: difference;
  height: 300px;
  :hover {
    mix-blend-mode: normal;
  }
  transition: all 1s ease-in-out;

`;
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
      <ContentWrapper
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <div>
          <Splide :options="{ autoplay:true, rewind: true,type   : 'loop',
  perPage: 3,
  focus  : 'center', interval: 1800, pauseOnHover: true }">
            <SplideSlide style="background-color: #272829;  transition: all 1s ease-in-out;
">
              <ProjectCard>
                <TextWrapper>
                  Projet 1
                </TextWrapper>
              </ProjectCard>
            </SplideSlide>
            <SplideSlide style="background-color: #272829;   transition: all 1s ease-in-out;">
              <ProjectCard >
                <TextWrapper>
                  Projet 2
                </TextWrapper>
              </ProjectCard>
            </SplideSlide>
            <SplideSlide style="background-color: #272829;   transition: all 1s ease-in-out;">
              <ProjectCard>
                Projet 3
              </ProjectCard>
            </SplideSlide>
          </Splide>
        </div>
        
      </ContentWrapper>
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
