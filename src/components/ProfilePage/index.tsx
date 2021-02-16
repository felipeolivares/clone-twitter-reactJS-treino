import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return(
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>

              <h1>Felipe Olivares</h1>
              <h2>@Fefelipeta</h2>

              <p>
                    Developer at Accenture
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                  </li>

                  <li>
                      <CakeIcon/>
                      Nascido(a) em 06 de julho de 1999
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>94</strong>
                  </span>
                  <span>
                      <strong>800 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>
         
      </Container>
  )
}

export default ProfilePage;