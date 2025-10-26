import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import BlogPostPage from "./pages/blogPost/BlogPostPage";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/blog/:postId" component={BlogPostPage} />
          </Switch>
        </div>
      </Router>
    </StyleProvider>
  );
}

export default App;
