import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }: { theme: any }) => theme.background};
    color: ${({ theme }: { theme: any }) => theme.foreground};
  }

  .Navbar {
    background-color: ${({ theme }: { theme: any }) => theme.navbar};
  }

  .Sidebar span {
    color: ${({ theme }: { theme: any }) => theme.nifuText};
  }

  .Card, .Card:hover {
    color: ${({ theme }: { theme: any }) => theme.foreground};
  }

  .Card {
    background-color: ${({ theme }: { theme: any }) => theme.card};
  }

  .LeftBar a, .projects a {
    color: ${({ theme }: { theme: any }) => theme.link};
  }
  `;
