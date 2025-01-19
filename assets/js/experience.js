AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    "title": "Siksha Education Consultancy",
    "cardImage": "assets/images/experience-page/education_consultancy.png", // Replace with actual image path
    "place": "Freelance - Educational Solutions",
    "time": "(January 2025 - Ongoing)",
    "desp": "<li>Developing a robust full-stack website for education consultancy services.</li><li>Implementing secure and scalable backend architecture.</li><li>Designing user-friendly and responsive frontend interfaces.</li><li><b>Technologies:</b> HTML, Tailwind CSS, React.js, Vite, Python, Flask, MySQL.</li>"
  },
  {
    "title": "Medicine Shop",
    "cardImage": "assets/images/experience-page/medicine_Shop.webp", // Replace with actual image path
    "place": "Freelance - Retail Solutions",
    "time": "(December 2024 - December 2024)",
    "desp": "<li>Created an e-commerce website for online medicine ordering.</li><li>Integrated features for prescription uploads and real-time tracking.</li><li>Enabled online payments with secure gateways and user authentication.</li><li><b>Technologies:</b> Python, Flask, MySQL, HTML, CSS, JavaScript.</li>"
  },
  {
    "title": "Inventory Management System",
    "cardImage": "assets/images/experience-page/inventory.webp",
    "place": "Freelance - Enterprise Solutions",
    "time": "(October 2024 - November 2024)",
    "desp": "<li>Developed a custom inventory solution managing 1000+ SKUs with real-time tracking.</li><li>Reduced manual tracking time by 70% through automated processes.</li><li>Eliminated stockout incidents with predictive inventory alerts.</li><li><b>Technologies:</b> Python, Flask, MySQL, HTML, CSS.</li>"
  },
  {
    "title": "AI Customer Support Chatbot",
    "cardImage": "assets/images/experience-page/chatbot.webp",
    "place": "Freelance - E-commerce Solutions",
    "time": "(August 2024 - September 2024)",
    "desp": "<li>Built an AI-powered chatbot handling 500+ daily customer interactions.</li><li>Reduced customer support costs by 40% through automated query resolution.</li><li>Achieved an 85% customer satisfaction rate with an intelligent response system.</li><li><b>Technologies:</b> Python, django, NLP, spaCy, MySQL, TensorFlow.</li>"
  },
  {
    "title": "Lease Document Abstractor",
    "cardImage": "assets/images/experience-page/document.webp",
    "place": "Freelance - Real Estate Technology",
    "time": "(July 2024 - July 2024)",
    "desp": "<li>Engineered an automated document processing system reducing processing time from 30 to 2 minutes.</li><li>Achieved 98% accuracy in data extraction and classification.</li><li>Implemented secure data handling with encryption protocols.</li><li><b>Technologies:</b> Python, Flask, MySQL, PyPDF2, REST APIs.</li>"
  },
];


const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    "title": "HackerRank Contests",
    "subtitle": "Competitive Programmer",
    "image": "assets/images/experience-page/hackerrank.png",
    "desp": "Actively participated in multiple coding challenges on HackerRank, solving algorithmic and data structure problems to improve problem-solving skills.",
    "href": "https://www.hackerrank.com/"
  },
  {
    "title": "CodeChef Star Badge",
    "subtitle": "Competitive Programming",
    "image": "assets/images/experience-page/codechef.jpg",
    "desp": "Earned the Star Badge for outstanding performance in CodeChef contests.",
    "href": "https://www.codechef.com/"
  },  
  {
    "title": "Naukri.com Coding Contests",
    "subtitle": "Participant",
    "image": "assets/images/experience-page/naukri_contest.png",
    "desp": "Engaged in coding contests organized by Naukri.com to compete with top talent and hone programming skills.",
    "href": "https://www.naukri.com/"
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
