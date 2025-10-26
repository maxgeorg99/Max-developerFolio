import React, {useEffect, useState, useContext} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import StyleContext from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  const {isDark} = useContext(StyleContext);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      {isShowingSplashAnimation && splashScreen.enabled ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Achievement />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast />
          <Profile />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default Main;
