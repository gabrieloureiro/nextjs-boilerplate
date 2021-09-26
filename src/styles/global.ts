import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    font-family: Roboto, sans-serif;
    font: normal 16px Roboto;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline:none;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth !important;
    transition: color, background-color 0.5s ease-out;

  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  strong {
    font-weight: bold;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body{
    height: 100%;
		min-height: -webkit-fill-available;

    font-family: Roboto, sans-serif;
    font: normal 16px Roboto;

    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: color, background-color 0.5s ease-out;

    ::-webkit-scrollbar-track {
      background-color: transparent;
      position: absolute;
      opacity: 0.85;
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgb(61, 60, 66);
    }

  }
`
