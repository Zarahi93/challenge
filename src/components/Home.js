//import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import "./home.css";

export default function Home() {
  //const navigate = useNavigate();

//   const goToNewNote = () => {
//     navigate('/notes');
//   };
  return (
<main id="mainpage">
    <header id="header">
    <p id="slogan">[Making your Life Easier] </p>
    <h1 id="maintitle">Discovering the world</h1>
    </header>
    <section id="navigation">
        <p className="nav">All</p>
        <p className="nav">Travel</p>
        <p className="nav">Lifestyle</p>
        <p className="nav">Business</p>
        <p className="nav">Food</p>
        <p className="nav">Work</p>
    </section>
    <section id='mainsection'> 
    <Outlet />
    </section>
    {/* <footer id='mainfooter'>
        <button  id='log-out'></button>
    </footer> */}
</main>
  );
}