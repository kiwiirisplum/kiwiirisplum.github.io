import "./project.scss";

const Project = () => {

// const data = [
//     {
//       id: "1",
//       title: "Glancing - Online Travel Agency",
//       description: "A summarized, hightlighed version of OTA website. To be honest, should include more features.",
//       img: "../../assets/glancing.png",
//     },
//     {
//       id: "2",
//       title: "Lemonadmin - Admin Panel",
//       description: "This is a simple design of a platform designated for e-commerce users. Includes features of checking basic needs and easy maintains for daily transactions. I deploy this Lemonadmin with ReactJS, Sass and JavaScript",
//       img: "../../assets/reactAdmin.png",
//     },
//     {
//       id: "3",
//       title: "YouTube Clone Module",
//       description: "This is a clone YouTube application focused with exclusive YouTube channels. Contents on sidebar can be changed to various desired channels, I put on my bf's favorite channels. Within the limited API accesses, hopefully, i hope it might be a solution to reduce his time spent on YouTube. This is deployed with ReactJS and Material UI.",
//       img: "../../assets/MeTube.png",
//     },
//     {
//       id: "4",
//       title: "To-do List App",
//       description: " Like all other to-do lists that you can add, edit and delete events, this one shares light/dark mode and color scheme, so you may choose your favored color to bright up the rountine. This special one is my first time using ViteJS. The more I explore, the more I enjoy it (as its name saying /ˈvi.te/, it is really fast). Coded in ReactJS and ViteJS.",
//       img: "../../assets/MyToDoList.png",
//     },
//   ];

  return (
    <div className="project" id="project" >
      
      <div className="container">
        
        <div className="item">
          <img src={require('../../assets/glancing.png')} alt="online travel agency" />
          <h3>Online Travel Agency</h3>
          <p>React.js, JavaScript, Node.js, Express, MongoDB </p>
          <span>
          <a 
          href="https://github.com/kiwiirisplum/bookingapp" 
          target="_blank"
          rel="noreferrer">
          Github
          </a>
          </span>
        </div>

        <div className="item">
          <img src={require('../../assets/reactAdmin.png')} alt="admin panel" />
          <h3>Admin Panel</h3>
          <p>React.js, Sass, Material UI, JavaScript, Firebase</p>
          <span>
          <a 
          href="https://lemonadmin.netlify.app/" 
          target="_blank"
          rel="noreferrer">
            Live Demo
          </a>
          </span>
        </div>

        <div className="item">
          <img src={require('../../assets/MeTube.png')} alt="YouTube Clone Module" />
          <h3>YouTube Clone Module</h3>
          <p>React.js, Material UI, JavaScript, APIs</p>
          <span>
          <a 
          href="https://metube4u.netlify.app/" 
          target="_blank"
          rel="noreferrer">
            Live Demo
          </a>
          </span>
        </div>

        <div className="item">
          <img src={require('../../assets/MyToDoList.png')} alt="To-do List App" />
          <h3>To-do List App</h3>
          <p>React.js, ViteJS, JavaScript</p>
          <span>
          <a 
          href="https://todolist234.netlify.app/" 
          target="_blank"
          rel="noreferrer">
            Live Demo
          </a>
          </span>
        </div>

      </div>

      {/* <div 
      className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="container">


          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>title</h2>
                <p>description</p>
                <span>react </span>
              </div>
            </div>
            <div className="right">
            <div className="imgContainer">
              <img
              className="projectimage" 
              src={require("../../assets/glancing.png")} />
            </div>
            <span>links</span>
            </div>
          </div>
          </div>
      </div>

        */}
        </div>  
  );
  }
export default Project;