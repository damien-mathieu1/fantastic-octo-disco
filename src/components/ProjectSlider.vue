<script setup lang="ts">
import styled from "vue3-styled-components";

const ProjectCard = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  width: 35%;
  border: 1px solid white;
  border-radius: 10px;
  margin: 2rem;
  overflow: hidden;
  @media (max-width: 1100px) {
    width: 80%;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  font-style: italic;
  font-family: "Roboto", sans-serif;
`;

const ProjectInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomSpan = styled.span`
  margin: 10px;
  font-size: 1.1rem;
`;

const StackWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
`;

const TextStyle = styled.p`
  font-size: 1.2rem;
  padding: 2rem;
`;
</script>

<template>
  <ProjectCard data-aos="fade-down" data-aos-duration="500">
    <ProjectTitle> FakeX </ProjectTitle>
    <ProjectInfosWrapper>
      <TextStyle>
        {{ $t("fakeX") }}
      </TextStyle>
      <StackWrapper>
        <CustomSpan>{{ $t("technos") }}</CustomSpan>
        <img src="../assets/php.svg" height="50" />
        <CustomSpan>{{ $t("links") }}</CustomSpan>
        <a href="https://github.com/damien-mathieu1/FakeX" target="_blank"
          ><img src="../assets/github.svg" height="50"
        /></a>
      </StackWrapper>
    </ProjectInfosWrapper>
  </ProjectCard>
  <ProjectCard
    data-aos="fade-down"
    data-aos-duration="500"
    data-aos-delay="400"
  >
    <ProjectTitle> eVote </ProjectTitle>
    <ProjectInfosWrapper>
      <TextStyle>
        {{ $t("eVote") }}
      </TextStyle>
      <StackWrapper>
        <CustomSpan>{{ $t("technos") }}</CustomSpan>
        <img src="../assets/java.svg" height="50" />
        <CustomSpan>{{ $t("links") }}</CustomSpan>
        <a href="https://github.com/damien-mathieu1/eVote" target="_blank"
          ><img
            src="../assets/github.svg"
            height="50" /></a></StackWrapper></ProjectInfosWrapper
  ></ProjectCard>

  <ProjectCard
    data-aos="fade-down"
    data-aos-duration="500"
    data-aos-delay="600"
  >
    <ProjectTitle> PortfolioV2 </ProjectTitle>
    <ProjectInfosWrapper>
      <TextStyle>
        {{ $t("portfolioV2") }}
      </TextStyle>
      <StackWrapper>
        <CustomSpan>{{ $t("technos") }}</CustomSpan>
        <img src="../assets/vue.svg" height="50" />
        <img src="../assets/typescript.svg" height="50" />
        <img src="../assets/css.svg" height="50" />
        <CustomSpan>{{ $t("links") }}</CustomSpan>
        <a
          href="https://github.com/damien-mathieu1/fantastic-octo-disco"
          target="_blank"
          ><img src="../assets/github.svg" height="50"
        /></a>
        <a href="https://damien-mathieu1.github.io/" target="_blank"
          ><img src="../assets/link.svg" height="50" />
        </a>
      </StackWrapper>
    </ProjectInfosWrapper>
  </ProjectCard>

  <ProjectCard
    data-aos="fade-down"
    data-aos-duration="500"
    data-aos-delay="1000"
  >
    <ProjectTitle> Rickypedia </ProjectTitle>
    <ProjectInfosWrapper>
      <TextStyle>
        {{ $t("rickypedia") }}
      </TextStyle>
      <StackWrapper>
        <CustomSpan>{{ $t("technos") }}</CustomSpan>
        <img src="../assets/react.svg" height="50" />
        <img src="../assets/graphql.svg" height="50" />
        <CustomSpan>{{ $t("links") }}</CustomSpan>
        <a href="https://github.com/damien-mathieu1/Rickypedia"
          ><img src="../assets/github.svg" height="50"
        /></a>
        <a href="https://rickypedia.vercel.app/" target="_blank"
          ><img src="../assets/link.svg" height="50"
        /></a>
      </StackWrapper>
    </ProjectInfosWrapper>
  </ProjectCard>
</template>

<style lang="scss" scoped></style>
