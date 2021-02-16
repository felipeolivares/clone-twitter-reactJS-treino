import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Felipetest</strong>
            <span>@FelipeTest</span>
            <Dot />
            <time>16 de fev</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Olá pessoal 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              100
            </Status>
            <Status>
              100
            </Status>
            <Status>
              <LikeIcon />
              2000
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;