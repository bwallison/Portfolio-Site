import React from 'react';
import { MdComputer } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ItemStyles = styled.div`
  text-align: center;
  .skillsItem__icon {
    svg {
      width: 3rem;
    }
  }
  .skillsItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function SkillsSectionItem({
  icon = <MdComputer />,
  title = 'App Dev',
  desc = 'These are my skills.',
}) {
  return (
    <ItemStyles className="skillsItem">
      <div className="skillsItem__icon">{icon}</div>
      <div className="skillsItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
