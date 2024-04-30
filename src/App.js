import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';


/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

// main background
const Main = styled.main`
  width: 100%;
  height: 100%;
  background: teal;
`;

// page style: centered, full page
const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Main>
        <ReactFullpage
          render = { ({ state, fullPageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Section className='section'>
                  <MenuList>
                    <MenuListItem>🎤 Sing</MenuListItem>
                    <MenuListItem>💃🏻 Dance</MenuListItem>
                    <Separator />
                    <MenuListItem disabled>😴 Sleep</MenuListItem>
                  </MenuList>
                </Section>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Main>
    </ThemeProvider>
  </div>
);

export default App;