import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const NavBarStyle = styled.div`
  .nav {
    background: rgb(111, 110, 110);
    background: linear-gradient(180deg,rgb(165,158,158) 0%,rgba(210,207,207,0.46) 100%);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height: 8vh;
    align-items: center;
    z-index: 100;
    justify-content: space-between;
}



.nav a {
    text-decoration: none;
    color: white;

}

.title-a {
    position: relative;
    left: 5%;
}

.nav h4 {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 120px;
}

@media screen and (max-height: 650px) {
    .nav h4 {
        font-size: 1rem;
    }
}

.nav-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 35%;
    height: 40px;
    align-items: center;
}

.nav-links a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 5rem;
    transition: background-color ease .24s, color ease .24s;

}

.nav-links a:hover {
    background-color: #323131;
    color: white;
    width: 80%;
    height: 40px;
}

.burger {
    position: absolute;
    right: 6%;
    display: none;
}

.burger div {
    width: 25px;
    height: 5px;
    margin: 5px;
    background-color: white;
}


@media screen and (max-width: 1024px) {
    body {
        overflow-x: hidden;
    }

    .nav-links {
        position: fixed;
        right: -250px;
        height: 92vh;
        top: 8vh;
        background: linear-gradient(180deg,rgba(159,159,159,0.59) 100%, rgba(210,207,207,0.52) 0%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 50vh;
        transition: right 0.5s ease-in-out, opacity 0.4s ease 0.2s;
        width: 250px;
        opacity: 0;
    }
    
    .nav-links a {
        width: 100%;
        height: 50px;
        margin-right: 0;
        align-items: center;
        font-size: 2rem;
    }
    
    .nav-links a:hover {
        background-color: #1c1b1b;
        width: 100%;
        height: 50px;
        color: white;
    }

    .burger {
        display: block;
        cursor: pointer;
    }
}

.nav-active {
    opacity: 1;
    right: 0;
}

`;


function NavBar() {


    const navSlide = () => {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('nav-active')

    }

    return (
        <NavBarStyle>
            <div className="nav">
                <Link className="title-a" to="/">
                    <h4 className="title">

                        Search <i className="fas fa-user-tie"/>This Outfit
                    </h4>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/search">Search</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contacts">Contacts</Link>
                </div>
                <div className="burger" onClick={navSlide}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </div>
        </NavBarStyle>
    )
}

export default NavBar