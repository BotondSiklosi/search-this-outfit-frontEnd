import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"


const HomeStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    position: relative;
    
    .home-container {
        width: 80%;
    }
    
    .title {
        color: #e0ceab;
        font-size: 5rem;
        display: flex;
        justify-content: center;
        position: relative;
        top: -100px;
    }
    
    
    .content {
        color: #d5c3a1;
        font-size: 3rem;
        
        
    }
    
    .content a {
        color: #85b0b8;
    }
    
    .content a:hover {
        color: #66abe8;
    }
    
    .search-link {
        position: absolute;
        left: 38vw;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        text-decoration: none;
        color: #ffffff;
        border-radius: 1rem;
        width: 400px;
        border-color: #aac4c7;
        border-width: 3px;
        border-style: solid;
    }
    
    @media only screen and (max-width: 970px) {
        .search-link {
            width: 300px;
            font-size: 3.5rem;
            left: 34vw;
        }
        
        .title {
            font-size: 3.5rem;
            
        }
        
        .content {
        font-size: 2rem;
        
        }
        
    }
    
    @media only screen and (max-width: 750px) {
        .search-link {
            width: 200px;
            font-size: 2.5rem;
            left: 30vw;
            bottom: 5vh;
        }
    }
    
    @media only screen and (max-width: 600px) {
        .search-link {
            width: 200px;
            font-size: 2.5rem;
            left: 30vw;
            bottom: 5vh;
        }
        
        .title {
            font-size: 2.5rem;
            
        }
        
        .content {
        font-size: 2rem;
        
        }
    
    
    }
    
    
    .search-link:hover {
        color: #85b0b8;
    }
   
`;

function Home() {

    return (
        <HomeStyled>
            <div className="home-container">
                <p className="title">Welcome on Search This Outfit!</p>
                <p className="content">This is a team project where we worked together to make a wepsite where you can search for any clothes, styles that you like.
                    Click here If you want to know more <Link to="/about">about us</Link>, otherwise enjoy the site.
                </p>
                <Link className="search-link" to="/search">Let's search it!</Link>
            </div>
        </HomeStyled>
    )

}

export default Home;
