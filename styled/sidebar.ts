import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: ${(p) => p.theme.color1};
  color: ${(p) => p.theme.color2};
  max-width: 420px;
  width: 30%;
  padding-top: 7%;
  padding-bottom: 9%;
`

export const Profile = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 1.5rem;
  display: flex;
  justify-content: center;
  margin-bottom: 14%;

  & img {
    display: block;
    width: 80%;
    max-width: 15rem;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const SidebarContent = styled.div`
  padding-left: 17%;
`

export const SidebarBlock = styled.div<{ last?: boolean }>`
  margin-bottom: ${(p) => p.last ? '0px' : '40px'};

  & > div {
    padding-right: 1.2rem;
    margin-bottom: 0.8rem;

    &:last-child {
      margin-bottom: 0px;
    }

    h5 {
      margin: 0;
      font-size: 1rem;
      font-weight: bold;
    }

    p {
      margin: 0;
    }
  }

  ul {
    margin: 0;
    padding: 0rem 1.1rem;

    li {
      margin-bottom: 1.2rem;

      &:last-child {
        margin-bottom: 0rem;
      }
    }
  }

  h4 {
    margin: 0;
    margin-bottom: 0.4rem;
  }
`