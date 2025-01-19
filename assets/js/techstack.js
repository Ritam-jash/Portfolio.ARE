AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language, known for its simplicity and versatility.</li>",
  },
  {
    langImage: "assets/images/techstack-page/flask.png",
    langName: "Flask",
    langDesc: "<li>Flask is a lightweight and flexible web framework for building web applications in Python.</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HTML",
    langDesc: "<li>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "CSS",
    langDesc: "<li>CSS (Cascading Style Sheets) is used to style and layout web pages, including adjusting colors, fonts, and layout.</li>",
  },
  {
    langImage: "assets/images/techstack-page/sql.png",
    langName: "SQL",
    langDesc: "<li>SQL (Structured Query Language) is used for managing and querying data in relational databases.</li>",
  },
  {
    langImage: "assets/images/techstack-page/mysql.png",
    langName: "MySQL",
    langDesc: "<li>MySQL is an open-source relational database management system based on SQL.</li>",
  },
  {
    langImage: "assets/images/techstack-page/numpy.png",
    langName: "NumPy",
    langDesc: "<li>NumPy is a Python library used for numerical computing, providing support for large multi-dimensional arrays and matrices.</li>",
  },
  {
    langImage: "assets/images/techstack-page/pandas.png",
    langName: "Pandas",
    langDesc: "<li>Pandas is a Python library for data manipulation and analysis, offering powerful data structures like DataFrames.</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a JavaScript library for building user interfaces based on reusable UI components.</li>",
  },
  {
    langImage: "assets/images/techstack-page/django.png",
    langName: "Django",
    langDesc: "<li>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.</li>",
  },
  {
    langImage: "assets/images/techstack-page/nlp.png",
    langName: "NLP",
    langDesc: "<li>NLP (Natural Language Processing) is a field in AI that focuses on the interaction between computers and human language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/nltk.png",
    langName: "NLTK",
    langDesc: "<li>NLTK (Natural Language Toolkit) is a Python library for working with human language data for natural language processing.</li>",
  },
  {
    langImage: "assets/images/techstack-page/spacy.png",
    langName: "spaCy",
    langDesc: "<li>spaCy is a Python library for advanced natural language processing, featuring deep learning integration.</li>",
  },
  {
    langImage: "assets/images/techstack-page/tensorflow.png",
    langName: "TensorFlow",
    langDesc: "<li>TensorFlow is an open-source machine learning framework for building and training models for various AI tasks.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
];





// const techStack = [
//   {
//     langImage: "assets/images/techstack-page/html.png",
//     langName: "HyperText Markup Language",
//     langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
//   },
//   {
//     langImage: "assets/images/techstack-page/css.png",
//     langName: "Cascading Style Sheets",
//     langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
//   },
//   {
//     langImage: "assets/images/techstack-page/javascript.png",
//     langName: "JavaScript",
//     langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
//   },
//   {
//     langImage: "assets/images/techstack-page/node.png",
//     langName: "Node",
//     langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
//   },
//   {
//     langImage: "assets/images/techstack-page/python.png",
//     langName: "Python",
//     langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
//   },
//   {
//     langImage: "assets/images/techstack-page/cpp.png",
//     langName: "C++",
//     langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
//   },
//   {
//     langImage: "assets/images/techstack-page/git.png",
//     langName: "Git",
//     langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
//   },
//   {
//     langImage: "assets/images/techstack-page/bootstrap.png",
//     langName: "Bootstrap",
//     langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
//   },
//   {
//     langImage: "assets/images/techstack-page/react.png",
//     langName: "React",
//     langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
//   },
//   {
//     langImage:"assets/images/techstack-page/c.png",
//     langName:"C",
//     langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>"
//   },
// ];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
