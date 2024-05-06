import { original, millenium } from 'react95/dist/themes';
import { ScrollView } from 'react95/dist/ScrollView/ScrollView';
import styled, {ThemeProvider} from "styled-components";
import Center from "./Center";
import ContentGreetingFont from "./ContentGreetingFont";
import React, { Component } from "react";
import AboutMeIcon from "../assets/images/smiley.ico";
import Resume from "../assets/files/0502-gabe_resume.pdf";
import "../tufte.css"

import { Anchor } from "react95";


import {
    Window,
    WindowHeader,
    WindowContent,
} from "react95";

const LeftAlignedCenter = styled(Center)`
  text-align: left;
`;

const PortfolioContent = styled(ScrollView)`
  width: 61.8vw;
  margin: 0rem;
  background: ${({ theme }) => theme.canvas};
`;

const TextContent = styled.section`
  font-size: 1.5rem;
  width: 55%;
  -webkit-padding-start: 5%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ScrollableWindowContent = styled(WindowContent)`
  overflow-y: auto;
`;

class PortfolioWindow extends Component {
  render () {
    return (
      <LeftAlignedCenter>
        <ThemeProvider theme={millenium}>
          <Window shadow={true}>
            <WindowHeader>
              <HeaderWrapper>
                <img src={AboutMeIcon} alt="" style={{ marginRight: '0.1rem' }} />
                about me
              </HeaderWrapper>
            </WindowHeader>
            <ScrollableWindowContent>
              <PortfolioContent>
                <ContentGreetingFont>Hey there!</ContentGreetingFont>
                <TextContent>
                  My name is Gabriel Alzate
                  <label for="ipa-sidenote" class="margin-toggle sidenote-number"></label>
                  <input type="checkbox" id="ipa-sidenote" class="margin-toggle" /><span class="sidenote">for the linguists: [al'zate]. feel free to copy-paste the IPA into <Anchor href='http://ipa-reader.xyz/'>http://ipa-reader.xyz/</Anchor> to hear it spoken!</span>,
                  but you can call me Gabe. I am currently a backend software engineer on the
                  quoting and ordering team
                  <label for="qos-sidenote" class="margin-toggle sidenote-number"></label>
                  <input type="checkbox" id="qos-sidenote" class="margin-toggle" /><span class="sidenote">if you've ever redeemed a LinkedIn Premium free trial (or perhaps—even purchased a Premium plan?), chances are you used what I built!</span>{' '}
                  at <Anchor href="https://www.linkedin.com/">LinkedIn</Anchor>.
                </TextContent>
                <TextContent>
                  My story, TLDR; I was born and raised in the Philippines. I moved to the US and graduated with a {' '}
                  <Anchor href="https://www.pomona.edu/academics/departments/computer-science">Computer Science</Anchor> degree from {' '}
                  <Anchor href="https://www.pomona.edu/">Pomona College</Anchor>, and now I'm based in San Francisco!
                </TextContent>
                <TextContent>
                  This portfolio is a work-in-progress retro revival, perhaps symbolizing
                  <label for="old-portfolio-sidenote" class="margin-toggle sidenote-number"></label>
                  <input type="checkbox" id="old-portfolio-sidenote" class="margin-toggle" /><span class="sidenote">take a look at my outdated yet more modern college portfolio <Anchor href="https://gpalzate.github.io">here</Anchor>. out with the new, in with the old i guess :P</span>{' '}
                  a transitionary period in my life and career. Here's my <Anchor href={Resume}>CV</Anchor>, and for any questions feel free to reach out to me at gabsalzate [at] gmail [dot] com.
                </TextContent>
                <TextContent>
                  My #1 hobby is...collecting hobbies. Most recently these include 
                  playing the <Anchor href="https://en.wikipedia.org/wiki/Kashaka">kashakas</Anchor>, 
                  creating latte art, and 
                  making simple fusion food.
                </TextContent>
              </PortfolioContent>
            </ScrollableWindowContent>
          </Window>
        </ThemeProvider>
      </LeftAlignedCenter>
    );
  }
}

export default PortfolioWindow;