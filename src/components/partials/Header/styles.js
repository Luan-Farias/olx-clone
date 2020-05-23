import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color: #FFF;
height: 60px;
border-bottom: 1px solid #CCC;

.container {
  max-width: 1000px;
  margin: auto;
  display: flex;
}

a {
  text-decoration: none;
}

.logo {
  flex: 1;
  display: flex;
  align-items: center;
  height: 60px;

  .logo-0,
  .logo-1,
  .logo-2 {
    font-size: 27px;
    font-weight: bold;
  }

  .logo-0 {
    color: #dc3545;
  }

  .logo-1 {
    color: #20c997;;
  }

  .logo-2 {
    color: #007bff;
  }
}

nav {
  display: flex;
  align-items: center;

  ul, li {
    list-style: none;
  }

  ul {
    display: flex;
    align-items: center;
    height: 40px;
  }

  li {
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 10px;

    a, button {
      border: 0;
      background: none;
      color: #000;
      font-size: 14px;
      text-decoration: none;
      cursor: pointer;
      outline: 0;

      &:hover {
        color: #999;
      }

      &.button {
        background-color: #FF8100;
        border-radius: 4px;
        color: #FFF;
        padding: 5px 10px;

        &:hover {
          background-color: #E57706;
        }
      }
    }
  }
}
`;
