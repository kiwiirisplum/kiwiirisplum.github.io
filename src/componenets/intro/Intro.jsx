import "./intro.scss";

import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="intro">
    <div className="type">
    <Typewriter 
    options={{
    strings: ['Hi, This is', 'Shan Li.', 'She / Her.', 'A Web Developer.'],
    autoStart: true,
    loop: true,
    delay: 80
  }}
/>
    </div>
    </div>
  )
}

export default Intro;