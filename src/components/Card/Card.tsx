import Box from '@components/Box';
import Button from '@components/Button';
import ExternalLink from '@components/ExternalLink';
import List from '@components/List';
import React from 'react';

import { CardProps } from './Card.models';
import { TopContainer, Wrapper } from './Card.styles';

const Card: React.FunctionComponent<CardProps> = (props) => {
  const {
    title,
    description,
    github,
    demo,
    slug,
    type,
    date,
    keywords,
  } = props;

  return (
    <Wrapper>
      <TopContainer>
        <h2>{title}</h2>
        {type === 'post' && <span>{date}</span>}
      </TopContainer>

      <Box mb={10} />

      <List>
        {keywords.map((keyword, index) => (
          <li key={`keyword-${index}`}>{keyword}</li>
        ))}
      </List>

      <Box mb={20} />

      <p>{description}</p>

      <Box mb={20} />

      {demo && <ExternalLink href={demo}>{demo}</ExternalLink>}
      <Box mb={10} />
      {github && <ExternalLink href={github}>{github}</ExternalLink>}

      <Box mb={30} />

      <Button href={`/${type}/[slug]`} as={`/${type}/${slug}`}>
        {type === 'project' ? 'see this project' : 'read more'}
      </Button>
    </Wrapper>
  );
};

export default Card;
