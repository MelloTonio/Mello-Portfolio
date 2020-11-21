import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      async function getData() {
        const URL = 'https://golanger-server.herokuapp.com';
        const response = await fetch(URL);
        const data = await response.json();
  
        if (data) {
        setProjects([
            ...data,
          ]);
        }
      }
      getData();
    }, []);

    console.log(projects)

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
      return (
        <div>
          <h2 style={{textAlign:'center'}}>My github projects</h2>
          <Slider {...settings}>
          {projects ? projects.map((project) => (
              <>
                <div>
                <h3 style={{textAlign:'center'}}><a href={project.link}>{project.nome}</a></h3>
                <div style={{display:'flex', justifyContent:'center'}}><img width="300" height="400"  src={project.fotos[0].Src}></img></div>
                </div>
              </>
          )): 'nao' }
          </Slider>
        
        </div>
      );
    }
  
export default SimpleSlider;
