import React from 'react';
import './App.css'; // To link styles
import { Smartphone, Server, Cloud, Bot, Wifi, Database } from "lucide-react"; //For the tecnology used

// --- 4. About Component ---

const teamMembers = [
  { name: "Januki Udana Liyanapathirana", img: "/Januki.jpeg" },
  { name: "D. W. Yeheni Kaveesha Dodanwela", img: "/Yeheni.jpg" },
  { name: "H.N.L. Fernando", img: "/Nethasha.jpg" },
  { name: "D.M.Dewmi Dilsara Bandara", img: "/Dewmi.jpg" },
  { name: "N.G.K.Yashendri Didulangee Senevirathna", img: "/Yashendri.jpeg" },
  { name: "S.A.Movinka", img: "/amandi.png" },
];

const techList = [
    {  icon: <Smartphone className="tech-icon" />, title: "React Native", desc: "Mobile app development" },
    { icon: <Server className="tech-icon" />, title: "Node.js", desc: "Backend services" },
    { icon: <Cloud className="tech-icon" />, title: "Firebase", desc: "Authentication & database" },
    { icon: <Bot className="tech-icon" />, title: "OpenAI", desc: "AI recipe generation" },
    { icon: <Wifi className="tech-icon" />, title: "Arduino Temp. Sensor", desc: "IoT heat monitoring" },
    { icon: <Database className="tech-icon" />, title: "MongoDB", desc: "Database management" },
];




const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container"> {/* Use a container for consistent width */}
        
        {/* === Section 1: Who We Are & Mission (Left Side) with Mascot === */}
        <div className="about-intro-hero">
          
          <div className="intro-text" data-aos="zoom-in" data-aos-duration="800" >
            <h2 data-aos="zoom-in" data-aos-duration="800">About CookMate</h2>
            <p data-aos="zoom-in" data-aos-duration="800">
              CookMate is your smart AI-powered cooking companion designed to make
              everyday cooking easier. Whether you're a beginner, a student, or
              someone with limited time, CookMate helps you create meals using the
              ingredients you already have.
            </p>
        </div>

        <div className="intro-mascot" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
          <img src="/Home Page Character.png" alt="CookMate Chef Mascot" />
        </div>
      </div>

        {/* === Section 2: Team Members (Grid Layout) === */}
        <div className="team-section" data-aos="zoom-in" data-aos-duration="800">
          <h2 className="section-title" data-aos="zoom-in" data-aos-duration="800">Meet the Team</h2>
          
          <div className="team-grid">

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-member-card"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100} // stagger each card
              >
                <div className="member-avatar">
                  <img src={member.img} alt={member.name} />
                </div>
                <h4 className="member-name">{member.name}</h4>
                
              </div>
              
            ))}
            

    
          </div>
        </div>

        {/* === Section 3: Technologies We Use === */}
        <div className="tech-section">

          
            <h2 className="section-title" data-aos="zoom-in" data-aos-duration="800">Technology Stack Overview</h2>
            
       
            
            <div className="tech-card-grid">
                {techList.map((item, index) => (
                    <div 
                      key={index}
                      className="tech-card"
                      data-aos="zoom-in"
                      data-aos-duration="800"
                      data-aos-delay={index * 50} /*To make each card animate one after another*/
                      
                    >
                        <div className="tech-icon-wrapper">
                            {item.icon}
                        </div>
                        <div className="tech-content">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
