import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { styleReset } from 'react95';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import PortfolioWindow from "./components/PortfolioWindow";


/* Pick a theme of your choice */
import { original, millenium } from 'react95/dist/themes';

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
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: 400;
    font-style: italic
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

// main background
const Main = styled.main`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.desktopBackground};
`;

// page style: centered, full page
const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={millenium}>
          <Main>
            <ReactFullpage
              scrollingSpeed={1000}
              scrollOverflow={true}
              scrollBar={false}
              render={({ state, fullPageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <Section className='section'>
                      <PortfolioWindow />
                    </Section>
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          </Main>
        </ThemeProvider>
      </>
    );
  }
}

export default App;