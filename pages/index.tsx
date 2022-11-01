import Image from 'next/image'
import { useTheme } from 'styled-components';

import { Wrapper, Container, Title1, Sidebar, Profile, SidebarContent, SidebarBlock, ContactLink, Content, NameWrapper, PositionWrapper, AboutWrapper, ExperiencesWrapper, ExperienceWrapper } from '../styled'

import ProgileImage from '../assets/images/_DSC0756.png'

export default function Home() {
  const theme = useTheme();

  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <Profile>
            <Image width="300" height="300" src={ProgileImage.src} alt="My profile image" />
          </Profile>
          <SidebarContent>
            <SidebarBlock>
              <Title1>Contact</Title1>
              <div>
                <h5>Phone</h5>
                <p><ContactLink href="tel:+77083416054">+7 708 341 60 54</ContactLink></p>
              </div>
              <div>
                <h5>Email</h5>
                <p><ContactLink href="mailto:nurik_95s@mail.ru">nurik_95s@mail.ru</ContactLink></p>
              </div>
              <div>
                <h5>Address</h5>
                <p>Astana, Kazakhstan</p>
              </div>
            </SidebarBlock>
            <SidebarBlock>
              <Title1>Education</Title1>
              <div>
                <div>2017</div>
                <h5>Евразийский национальный университет имени Л. Н. Гумилёва</h5>
                <div>ФЕН, Химия</div>
              </div>
            </SidebarBlock>
            <SidebarBlock>
              <Title1>Expertise</Title1>
              <ul>
                <li>Frontend Development</li>
                <li>Backend Development</li>
              </ul>
            </SidebarBlock>
            <SidebarBlock last>
              <Title1>Language</Title1>
              <h4>Kazakh</h4>
              <h4>Russian</h4>
              <h4>English</h4>
            </SidebarBlock>
          </SidebarContent>
        </Sidebar>

        <Content>
          <NameWrapper><span>Nurgeldi</span> Serikbay</NameWrapper>
          <PositionWrapper>Web Developer</PositionWrapper>
          <AboutWrapper>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat.</AboutWrapper>

          <Title1 color={theme.color1}>Experience</Title1>

          <ExperiencesWrapper>
            <ExperienceWrapper>
              <h4>Сентябрь 2017 — декабрь 2020</h4>
              <h5>РГП "КазИнМетр"</h5>
              <h3>Специалист 1 категорий</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl. Integer rutrum ultricies fringilla.</div>
            </ExperienceWrapper>
            <ExperienceWrapper>
              <h4>Декабрь 2020 — по настоящее время</h4>
              <h5>ТОО "СиЭй Консалтинг Групп"</h5>
              <h3>Веб-разработчик</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum elit at dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc. Proin luctus urna id nunc sagittis dignissim. Sed in libero sed libero dictum dapibus. Vivamus fermentum est eget lorem aliquet, vel tempus metus dignissim. Donec risus arcu, tristique et sollicitudin blandit, iaculis ut nisl. Integer rutrum ultricies fringilla.</div>
            </ExperienceWrapper>
          </ExperiencesWrapper>
        </Content>
      </Container>
    </Wrapper>
  )
}
