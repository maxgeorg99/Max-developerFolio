import React, {useContext} from "react";
import {useHistory, useLocation} from "react-router-dom";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const history = useHistory();
  const location = useLocation();

  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const scrollToSection = hash => {
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  const handleNavClick = (e, hash) => {
    e.preventDefault();

    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      history.push("/");
      // Wait for the route to change and component to render
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    } else {
      // If already on home page, just scroll to the section
      scrollToSection(hash);
    }
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/Max-developerFolio/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={e => handleNavClick(e, "#skills")}>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a
                href="#experience"
                onClick={e => handleNavClick(e, "#experience")}
              >
                Work Experiences
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a
                href="#achievements"
                onClick={e => handleNavClick(e, "#achievements")}
              >
                Achievements
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={e => handleNavClick(e, "#blogs")}>
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={e => handleNavClick(e, "#talks")}>
                Talks
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume" onClick={e => handleNavClick(e, "#resume")}>
                Resume
              </a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={e => handleNavClick(e, "#contact")}>
              Contact Me
            </a>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
