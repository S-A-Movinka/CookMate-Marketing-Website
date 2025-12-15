
import React from 'react';
import './App.css'; // To link style//
import { UtensilsCrossed, Rss, Bot, FileText, Sliders,ChefHat  } from "lucide-react"; //For the Feature cards


// --- 3. Features Component ---//

const Features = () => {


  const featureList = [
    { icon: <UtensilsCrossed className="icon" />, 
      title: " Ingredient-Based Recipes", 
      desc: "AI turns your ingredients into smart delcious recipes, minimizing food waste and maximizing creativity."
    },
    { icon: <Rss className="icon" />,
      title: " IoT Integration", 
      desc: "Smart sensor for your kitchen warn you if the stove gets too hot, ensuring safety and perfect results" 
    },
    { icon: <Bot className="icon" />,
      title: "AI Companion", 
      desc: "A friendly bot guides you step-by-step while you cook, answering questions and keeping you on track." 
    },
    { icon: <Sliders className="icon" />,
      title: "Personalization", 
      desc: "Get personalized recipe suggestions based on your dietary preferences and preferences"
    },
    { icon: <FileText className="icon" />,
      title: "Recipe Cards", 
      desc: "Easliy view cooking time and photos in beautifully organized recipe cards." 
    },
    { icon: <ChefHat className="icon" />,
      title: "Interactive Cooking Mode ", 
      desc: "Cook confidently with interactive, voice-driven step-by-step instructions and supported by smart timers" 
    },
  ];

  return (
    <section id="features" className="features-section">
      <h2 data-aos="zoom-in" data-aos-duration="800">Why Choose CookMate?</h2>
      
      
      
      <div className="features-grid">
        {featureList.map((item, index) => (
          
          <div 
            key={index}
            className="feature-card"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay={index * 50} /*To make each card animate one after another*/
            
          >
          
          <div className="icon-wrapper">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
          
        ))}
      </div>
    </section>
  );
};



export default Features;
