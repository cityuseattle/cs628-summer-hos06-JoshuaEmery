import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  NavLink,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Details from "./Pages/Details";
import Team from "./Pages/Team";
import Member from "./Pages/Member";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/details">Details</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
            </ul>
          </nav>
          <div className="content">
            {/* exact is not needed anymore with react router v6 */}
            {/*  */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/details" element={<Details />}></Route>
              <Route path="/team" element={<Team />}>
                {/* Nested Routing */}
                <Route path="member/:id" element={<Member />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
