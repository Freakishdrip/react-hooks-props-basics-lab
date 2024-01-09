import React from "react";
import user from "../data/user";
import Links from "/home/freakishdrip/Development/code/se_prep/Phase-2/react-hooks-props-basics-lab/src/components/Links.js";

function About() {

  return (
    <div id="about">
      <h2>About Me</h2>
      
      <p>
        {user.bio}
      </p> 
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>
          Links
          <br>
          </br>
          <br>
          </br>
          <Links />  
      </h3>
    </div>
  );
}

export default About;
