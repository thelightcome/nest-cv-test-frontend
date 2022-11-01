import Image from 'next/image'
import { useTheme } from 'styled-components'

import { Wrapper, Container, Title1, Sidebar, Profile, SidebarContent, SidebarBlock, ContactLink, Content, NameWrapper, PositionWrapper, AboutWrapper, ExperiencesWrapper, ExperienceWrapper, FooterLinks, Examples } from '../styled'

import ProgileImage from '../assets/images/_DSC0756.png'
import { ThemeType } from '../styled/themes';

export default function Home() {
  const theme = useTheme() as ThemeType;

  return (
    <Wrapper>
      <Container>
        <Sidebar>
          <Profile>
            <Image width="300" height="300" src={ProgileImage.src} alt="My profile image" />
          </Profile>
          <SidebarContent>
            <SidebarBlock>
              <Title1>Контакты</Title1>
              <div>
                <h5>Телефон</h5>
                <p><ContactLink href="tel:+77083416054">+7 708 341 60 54</ContactLink></p>
              </div>
              <div>
                <h5>Email</h5>
                <p><ContactLink href="mailto:nurik_95s@mail.ru">nurik_95s@mail.ru</ContactLink></p>
              </div>
              <div>
                <h5>Адрес</h5>
                <p>Астана, Казахстан</p>
              </div>
            </SidebarBlock>
            <SidebarBlock>
              <Title1>Образование</Title1>
              <div>
                <div>2017</div>
                <h5>Евразийский национальный университет имени Л. Н. Гумилёва</h5>
                <div>ФЕН, Химия</div>
              </div>
            </SidebarBlock>
            <SidebarBlock>
              <Title1>Навыки</Title1>
              <ul>
                <li>Javascript, Typescript</li>
                <li>Vue, Vuex, Pinia, Nuxt</li>
                <li>React, Redux, Next</li>
                <li>HTML</li>
                <li>CSS, SCSS, TailwindCSS</li>
                <li>Vite, Webpack</li>
                <li>Git</li>
              </ul>
            </SidebarBlock>
            <SidebarBlock last={true}>
              <Title1>Знание языков</Title1>
              <h4>Казахский — Родной</h4>
              <h4>Русский — Средне-продвинутый</h4>
              <h4>Английский — Элементарный</h4>
            </SidebarBlock>
          </SidebarContent>
        </Sidebar>

        <Content>
          <NameWrapper><span>Нұргелді</span> Серікбай</NameWrapper>
          <PositionWrapper>Frontend-разработчик</PositionWrapper>
          <AboutWrapper><em><strong>О себе:</strong> Увлекаюсь программированием с 2015 года. Коммерческого опыта 2 года. <br></br> Начал путь с простой верстки PSD макетов с применением Jquery и его плагинов. Были попытки изучения бэкенда на PHP. Некоторое время изучал Python. Практиковался в машинном обучении и разработке полнофункционального сайта на Django. <br></br> В последние 2,5 года сконцентрировался на Javascript-е. Разрабатывал pet проекты c применением стеков технологий MERN, MEVN а также PosgreSQL. Есть опыт работы с 3d библиотеками ThreeJS, BabylonJS.</em></AboutWrapper>

          <Examples>
            <p>Примеры</p>
            <a href="https://next-yandex-taxi.herokuapp.com/" target="_blank">- Next Yandex taxi</a>
            <a href="https://json-translater.herokuapp.com/" target="_blank">- Программа для перевода текстов в формате JSON. \"бэк связанное с яндекс переводчиком в данное время не работает\"))</a>
            <a href="https://challenge-battle.herokuapp.com/" target="_blank">- Приложение типо TikTok (Логин: TheLightCome Пароль: 987654321)</a>
            <a href="https://cacg-web-v1.herokuapp.com/" target="_blank">- дропнутый сайт cacg</a>
            <a href="https://allchemistry.herokuapp.com/" target="_blank">- Перидическая таблица химических элементов</a>
            <a href="https://thelightcome.github.io/gardenofeden/" target="_blank">- Эксперимент с BabylonJS</a>
            <a href="https://thelightcome.github.io/3dexp/ShootingRange.html" target="_blank">- Эксперимент с BabylonJS</a>
            <a href="https://thelightcome.github.io/3dexp/MusicalMuseum.html" target="_blank">- Эксперимент с BabylonJS</a>
          </Examples>

          <Title1 color={theme.color1}>Experience</Title1>

          <ExperiencesWrapper>
            <ExperienceWrapper>
              <h4>Декабрь 2020 — по настоящее время</h4>
              <h5>ТОО &quot;СиЭй Консалтинг Групп&quot;</h5>
              <h3>Веб-разработчик</h3>
              <div>Разработка цифровых образовательных ресурсов, симуляции, SPA приложении. Интеграция с LMS системами (xApi, TincanJS). Построение архитектуры собственных библиотек.</div>
            </ExperienceWrapper>
          </ExperiencesWrapper>

          <FooterLinks>
            <li><a href="https://hh.kz/resume/0c7b45acff0394bcc60039ed1f67685a327a68" target="_blank">HeadHunter резюме</a></li>
            <li><a href="https://github.com/thelightcome/nest-cv-test-frontend" target="_blank">Github frontend</a></li>
            <li><a href="https://github.com/thelightcome/nest-cv-test-backend" target="_blank">Github backend</a></li>
          </FooterLinks>
        </Content>
      </Container>
    </Wrapper >
  )
}
