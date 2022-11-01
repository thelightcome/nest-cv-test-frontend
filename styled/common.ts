import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.5em;
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #323B4C;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: strech;
`

export const DefaultLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const Title1 = styled.div<{ color?: string, mb?: string }>`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 2px;
  padding-bottom: 8px;
  color: ${(p) => p.color || p.theme.color2};
  border-bottom: 1px solid ${(p) => p.color || p.theme.color2};
  margin-bottom: ${(p) => p.mb || '1.5rem'};
`

export const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
`

export const Content = styled.div`
  width: 70%;
  padding: 7% 5% 9% 5%;
  box-sizing: border-box;
  fonst-size: 0.9rem;
  color: ${(p) => p.theme.color3};
  background: ${(p) => p.theme.color2};
`

export const NameWrapper = styled.h1`
  font-size: 3.6rem;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 0;
  margin-bottom: 0.4rem;

  & span {
    font-weight: bold;
    color: ${(p) => p.theme.color1};
  }
`

export const PositionWrapper = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 3px;
  margin: 0;
  margin-bottom: 1.2rem;
`

export const AboutWrapper = styled.div`
  margin-bottom: 1rem;
  text-indent: 1rem;
`

export const Examples = styled.div`
  margin-bottom: 4rem;

  & p {
    font-size: 1.4rem;
    font-weight: 600;
    font-style: italic;
  }

  & a {
    display: block;
    margin-bottom: 0.4rem;
    font-weight: 700;

    &:hover {
      color: rebeccapurple;
    }
  }
`

export const ExperiencesWrapper = styled.div`
  border-left: 1px solid ${(p) => p.theme.color1};
  padding-left: 1.6rem;
  margin-left: 5px;
  margin-bottom: 4rem;
`

export const ExperienceWrapper = styled.div`
  position: relative;
  margin-bottom: 3rem;

  & h4 {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1;
  }

  & h5 {
    margin: 0.5rem 0rem 0.6rem;
    line-height: 1;
    font-size: 1rem;
    font-weight: 500;
  }

  & h3 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1;
    margin-bottom: 1rem;
  }

  &:after {
    content: '';
    position: absolute;
    left: -1.6rem;
    top: 0px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #323B4C;
    background-color: #ffffff;
    transform: translateX(-50%);
  }
`

export const FooterLinks = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  list-style: none;

  & a:hover {
    text-decoration: underline;
  }
`