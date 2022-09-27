import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import SignIn from "./Component/SignInSection/SignIn.component";
import SignUp from "./Component/SignUpSection/SignUp.component";
import CreatePost from "./Component/Blog/CreatePost.component";
import HomePage from "./Component/Blog/BlogHomePage.component";
function App({isAuth}) {

  return (
    <div className="App">
  
    <Routes>
    <Route path="/" element={<SignUp/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/CreatePost" element={<CreatePost/>}/>
      <Route path="/HomePage" element={<HomePage isAuth={isAuth}/>}/>
    </Routes>
    </div>
  );
}

export default App;
