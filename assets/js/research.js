/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "AI-Powered Resume Screener: Enhancing Recruitment Efficiency",
    authors: "Contributed by Your Name",
    conferences: "Ongoing Research Project",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/aiResumeScreener.png",
    citation: {
        vancouver:
          "Ritam Jash. AI-Powered Resume Screener: Enhancing Recruitment Efficiency. Ongoing Research Project 2024.",
    },
    abstract:
        "This project involves building an AI-powered tool to analyze job descriptions and automatically screen resumes. It aims to improve recruitment efficiency by identifying the most relevant candidates based on key skills and qualifications. The screener integrates natural language processing (NLP) techniques and machine learning to provide accurate, scalable, and unbiased results.",
    absbox: "absPopup1",
},
{
    title: "Zeco:  Advancing Sustainable Local Transportation Solutions",
    authors: "Contributed by Ritam Jash",
    conferences: "Ongoing Research Project",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/Zeco.jpeg",
    citation: {
        vancouver:
          "Ritam Jash. Zeco: Advancing Sustainable Local Transportation Solutions. Ongoing Research Project 2024.",
    },
    abstract:
        "Zeco explores the development of an innovative platform aimed at enhancing the local transportation ecosystem. The research focuses on leveraging modern technology to streamline services, improve accessibility, and encourage sustainable mobility. The project places emphasis on user-centric design and operational efficiency, providing a scalable model for future applications in urban mobility.",
    absbox: "absPopup2",
},

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
