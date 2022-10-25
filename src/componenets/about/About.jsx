import "./about.scss";

const About = () => {
  return (
    <div className="about">
     <div className="aboutme">
      <h2>
        Hello, I am&nbsp;
        <a href="/" className="highlight">
        Shan.
        </a> <br />
        A self-taught web developer based in Toronto, Canada. My journey initially started with the intention of becoming
        a UX designer. As I learned more about UXD, I realized I need to build a website, which brought me down the road of web development
        and the curiosity to learn more about it. 
        <br />So here we are. 
        <br />A total newbie taking steps into the astonishing web dev world. <br />
        I am still a curious learner working on improving my skills all the time and aim to become a web developer.
      </h2>
     </div>

     <div className="right">
      <div className="imageone"></div>
      <div className="imagetwo"></div>
     </div>
    </div>
  )
}

export default About