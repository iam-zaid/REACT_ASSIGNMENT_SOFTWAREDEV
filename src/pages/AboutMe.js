import React from "react";
import { Link } from "react-router-dom";
import zaidshaikh from "../images/zaidshaikh.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="imgformat imgcenter">
        <h1
          style={{
            alignSelf: "center",
            fontFamily: "ui-sans-serif",
            fontSize: "4.5rem",
          }}
        >
          ZAID SHAIKH
        </h1>
        <img
          className="img"
          src={zaidshaikh}
          alt="Zaid Shaikh"
          height="400"
          width="350"
        />
      </div>
      <div className="mt-4">
        <h5>
          Hi, my name is Zaid Shaikh and I am from Mumbai, India. Here is a
          little introduction about myself, my academics and professional
          background:{" "}
        </h5>
        <li>I have completed my Bachelors of Engineering in E&TC domain</li>
        <li>
          Post completion of my degree, I have been working in Deloitte as a
          Consultant under the role of Salesforce Developer
        </li>
        <li>
          {" "}
          Throughout my journey of 2.5 years in Deloitte, I learned various
          technical as well interpersonal skills.
        </li>
        <li>
          Majorly worked with Salesforce platform in Development, configurations
          and Maintenance.
        </li>
        <li>
          I learned about Development, reports and dashboards, Community cloud
          and Lightning Components under this role.
        </li>
        <li>
          I also got an opportunity to work with DevOps team, which helped me to
          get hands on experience on Azure, Azure DevOps, GIT, Ant and
          Pipelines.
        </li>
        <li>
          Apart from daily tasks, I also have an interest in presentations and
          event management.I was part of the team that organizes in office floor
          events.
        </li>
        <li>Also I have hosted two of the events</li>
        <li>
          {" "}
          I am looking forward to explore the data analytics and visualization
          domain from this course as well as sharpening the software development
          skills.
        </li>

        <p></p>
        <h5>Some of my interests are: </h5>
        <li>I love to dance. (though not professionally😅)</li>
        <li>I love to play sports like badminton, cricket and volleyball.</li>
        <li>
          Recently I have started reading as well which I am growing fond of.
        </li>
        <li>Hosting and organizing events.</li>
        <li>Tech Innovations and Smartphones.</li>
        <li>At times I can sing as well. (again not professionally)</li>
        <li>Also I love to binge watch series or movies.</li>

        <a
          style={{marginTop:"20px"}}
          class="btn btn-primary"
          role="button"
          aria-disabled="false"
          href="my-city"
        >
          My City
        </a>
        <a
          style={{ marginLeft: "20px" ,marginTop:"20px"}}
          class="btn btn-primary disabled"
          role="button"
          aria-disabled="false"
          href="/"
        >
          About Me
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
