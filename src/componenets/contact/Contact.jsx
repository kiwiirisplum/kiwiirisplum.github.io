import "./contact.scss";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {

  return (
    <div className="contact">
      <div className="left">
        <img 
        src="https://uploads1.wikiart.org/images/claude-monet/lilac-irises-1917.jpg!Large.jpg" 
        alt="Lilac Iries painting" />
      </div>
      <div className="middle">
        <h2>
          Reach me at
        </h2>
        <div className="socialMedia">
          <span>
            <a 
            href="https://github.com/kiwiirisplum" 
            target="_blank"
            rel="noreferrer">
            <GoMarkGithub />
            <br></br>@kiwiirisplum
            </a>
          </span>
          <span>
            <a 
            href="https://www.linkedin.com/in/shan-li-5aa316202/" 
            target="_blank"
            rel="noreferrer">
            <br></br><FaLinkedin />
            <br></br>@Shan Li
            </a>
          </span>
        </div>
      </div>
      <div className="right">
       <img 
       src="https://data.ukiyo-e.org/jaodb/scaled/Shoson_Ohara-No_Series-Flowering_Iris-00042000-090611-F12.jpg" 
       alt="Iries painting" />
      </div>
    </div>
  )
}

export default Contact