import React from 'react';
import { MdCode, MdCamera, MdComputer } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import SkillsSectionItem from './SkillsSectionItem';

const SkillsItemsStyles = styled.div`
  padding: 10rem 0;
  .skills__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .skills__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function SkillsSection() {
  return (
    <SkillsItemsStyles>
      <div className="container">
        <SectionTitle subheading="What can I do for you?" heading="Skills" />
        <div className="skills__allItems">
          <SkillsSectionItem
            icon={<MdComputer />}
            title="Application Dev"
            desc="I develop the applications. I have a wide background in a variety of languages."
          />
          <SkillsSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="I also have experience in front and back end web development"
          />
          <SkillsSectionItem
            icon={<MdCamera />}
            title="Computer Vision"
            desc="I have extensive experience working with computer vision problems."
          />
        </div>
      </div>
    </SkillsItemsStyles>
  );
}
