import React from "react";
import styled from "styled-components";
// CarConnexaCard.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Project() {
  return (
    <Wrapper>
      <h2>My Projects</h2>
      <div class="box">
        <div className="project-card">
          <div className="title-div">
            <h3 id="proj-title">1.Stint.ai</h3>
          </div>

           <div class="imge-div">
            <img
              src="./Images/latest Projects/Stint-ai.png"
              alt=""
            />
          </div>

          <div className="tech-div">
            <button className="tech-btn">React JS</button>
            <button className="tech-btn">Node JS</button>
            <button className="tech-btn">Express JS</button>
            <button className="tech-btn">Mongo DB</button>
            <button className="tech-btn">Tailwind CSS</button>
            <button className="tech-btn">Gemini API</button>
          </div>

          <div className="info">
            {/* <p id="info-title">Centralized Store for Farmers</p> */}
            <p id="info-p">
              Stint.ai is an AI-powered task manager that uses the Google Gemini API to generate task titles, descriptions, and actionable steps. It features a Trello-like drag-and-drop board, productivity analytics, and a leaderboard system, all built with the MERN stack and deployed on Netlify, Render, and MongoDB Atlas. 
            </p>
          </div>

          <div className="btn-div">
            <a
              href="https://stint-ai.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="title-div">
            <h3 id="proj-title">2.Farmingo Mobile App</h3>
          </div>

          <div className="imge-div">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              className="car-carousel"
            >
              {[...Array(8)].map((_, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`./Images/latest Projects/Image ${index + 1}.png`}
                    alt={`Preview ${index + 1}`}
                    className="custom-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="tech-div">
            <button className="tech-btn">React Native</button>
            <button className="tech-btn">Google Maps</button>
            <button className="tech-btn">Node Js</button>
          </div>

          <div className="info">
            {/* <p id="info-title">Centralized Store for Farmers</p> */}
            <p id="info-p">
              Mobile application designed specifically for farmers to order
              essential agricultural products such as seeds, fertilizers,
              pesticides, and equipment. The app ensures timely delivery and
              supports local language access to improve accessibility in rural
              areas.
            </p>
          </div>

          <div className="btn-div">
            <a
              href="https://drive.google.com/file/d/1v_w1RQyK8caXWSXWGUzE6nYES8sWIjQ8/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="project-card">
          <div class="title-div">
            <h3 id="proj-title">3.Car Connexa</h3>
          </div>
          <div class="imge-div">
            <img
              src="./Images/latest Projects/car-connexa-preview.png"
              alt=""
            />
          </div>
          <div class="tech-div">
            <button class="tech-btn">HTML</button>
            <button class="tech-btn">CSS</button>
            <button class="tech-btn">JavaScript</button>
          </div>
          <div class="info">
            <p id="info-title">New Car delarship website </p>
            <p id="info-p">
              Car Connexa is your ultimate destination for all things
              automotive. With a vast database featuring over 100 car models
              from more than 10 renowned brands, our user-friendly interface
              makes car browsing a breeze.
            </p>
          </div>

          <div class="btn-div">
            <a href="https://carconnexa.netlify.app/" target="_blank">
              View Project
            </a>
          </div>
        </div>

        <div class="project-card">
          <div class="title-div">
            <h3 id="proj-title">4. DishDizzel</h3>
          </div>
          <div class="imge-div">
            <img src="./Images/latest Projects/DishDizzel Per 1.png" alt="" />
          </div>
          <div class="tech-div">
            <button class="tech-btn">HTML</button>
            <button class="tech-btn">CSS</button>
            <button class="tech-btn">JavaScript</button>
          </div>
          <div class="info">
            <p id="info-title">Website for Recipes</p>
            <p id="info-p">
              Recipe Finder Website using HTML, CSS, JavaScript, API. Welcome to
              DishDizzel, your go-to recipe finder website! This application
              allows users to explore and discover various recipes. With a
              simple and intuitive design, finding your favorite recipes has
              never been easier.
            </p>
          </div>

          <div class="btn-div">
            <a href="https://dishdizzel-recipes.netlify.app/" target="_blank">
              View Project
            </a>
          </div>
        </div>

        <div class="project-card">
          <div class="title-div">
            <h3 id="proj-title">5.Currency Converter</h3>
          </div>
          <div class="imge-div">
            <img
              src="./Images/latest Projects/currancy converter preview .png"
              alt=""
            />
          </div>
          <div class="tech-div">
            <button class="tech-btn">HTML</button>
            <button class="tech-btn">CSS</button>
            <button class="tech-btn">JavaScript</button>
            <button class="tech-btn">API</button>
          </div>
          <div class="info">
            <p id="info-title">
              currancy converter using JavaScript to convert any currancy in
              world
            </p>
            <p id="info-p">
              Introducing our versatile currency converter powered by
              JavaScript, enabling seamless conversion of any currency
              worldwide. With real-time exchange rates and a user-friendly
              interface, effortlessly switch between currencies with just a few
              clicks.{" "}
            </p>
          </div>

          <div class="btn-div">
            <a
              href="https://github.com/AbhishekSalokhe24/Currency-Converter-app"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>

        <div class="project-card">
          <div class="title-div">
            <h3 id="proj-title">6.Wheather Now App</h3>
          </div>
          <div class="imge-div">
            <img src="./Images/latest Projects/WeatherAPP preview.png" alt="" />
          </div>
          <div class="tech-div">
            <button class="tech-btn">HTML</button>
            <button class="tech-btn">CSS</button>
            <button class="tech-btn">JavaScript</button>
            <button class="tech-btn">API</button>
          </div>
          <div class="info">
            <p id="info-title">
              Your instant access to real-time weather updates worldwide with
              our Weather Now App
            </p>
            <p id="info-p">
              Introducing our Weather Now App, your go-to solution for accessing
              real-time weather updates across various countries and cities.
            </p>
          </div>

          <div class="btn-div">
            <a
              href="https://github.com/AbhishekSalokhe24/WeatherNowApp"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: auto;
  }
  a {
    text-decoration: none;
    color: #050c1b;
    font-weight: 700;
    font-size: 1.5rem;
    padding: 10px;
  }
  a:hover {
    color: #ffffff;
  }
  .project-card {
    background-color: #78716c;
    height: 50rem;
    width: 35rem;
    padding: 1.2rem;
    padding-bottom: 1.5rem;
    margin: 2rem;
  }
  @media (max-width: 767px) {
    .project-card {
      height: auto;
    }
  }
  h2 {
    padding: 35px 0px 2px 0px;
  }
  .title-div {
    height: 2.5rem;
    background-color: transparent;
    border-bottom: 2px solid #292524;
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: url("./Images/loading.png"), auto;
  }
  #proj-title {
    font-weight: 700;
    font-size: 2rem;
    color: #292524;
  }
  /* .title-div h4{
   font-size: 1.5rem;
   color: #211951;
} */
  .imge-div {
    margin: 1rem 1.5rem 0rem 1.5rem;
  }
  .imge-div img {
    width: 100%;
  }
  .info {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #info-title {
    font-weight: 600;
    padding: 0px 14px;
    color: #ffffff;
    font-size: 1.5rem;
  }
  #info-p {
    color: #050c1b;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: justify;
    padding: 0px 14px;
  }
  .tech-div {
    height: auto;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .tech-btn {
    background-color: transparent;
    display: flex;
    border: 2px solid #292524;
    padding: 5px 12px;
    color: #0f172a;
    font-weight: 600;
    border-radius: 50px;
    cursor: url("./Images/loading.png"), auto;
    margin: 2px 3px;
  }
  .btn-div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
  }
`;

export default Project;
