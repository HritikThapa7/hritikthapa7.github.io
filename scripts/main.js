
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to Hritik's Portfolio");
  await delay(700);
  createText("Starting Active Recon...");
  await delay(1200);
  createText("Type 'help' to see the commands.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# anonymous";
  span1.textContent = " :";
  span2.textContent = " ~/hritik-thapa$";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("about", "About me");
    createCode("project -a", "My github page with my projects");
    createCode("social -a", "All my social networks");
    createCode("certs", "The certifications I have earned");
    createCode("education", "My educational background");
    createCode("hobby -a", "What I do in my free time");
    createCode("clear", "Clean the terminal");
    
  }
  else if(value === "about"){
    trueValue(value);
    createText("Hi! Its me Hritik Thapa.")
    createText("I am a Cybersecurity Enthusiast from Nepal, currently pursuing my Bachelor's in Computer Engineering at Kathmandu University.")
    createText("Learn more about me with the help of the commands :)")
  }

  else if(value === "project -a"){
    trueValue(value);
    createText("<a href='https://github.com/hritikthapa7' target='_blank'><i class='fab fa-github white'></i> github.com/hritikthapa7</a>")
  }
  
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/hritikthapa7' target='_blank'><i class='fab fa-github white'></i> github.com/hritikthapa7</a>")
    createText("<a href='https://www.linkedin.com/in/hritik-thapa' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/hritik-thapa</a>")
    createText("<a href='https://www.upwork.com/freelancers/~012871fca509585c0b' target='_blank'><i class='fab fa-black-tie'></i></i> upwork.com/hritik_thapa</a>")
  }

  else if(value === "certs"){
    trueValue(value);
    createText("<a href='https://aspen.eccouncil.org/Verify' target='_blank'><i class='fab fa-wpforms white'></i> Certified Ethical Hacker (Practical) Credential ID: ECC2531790846</a>")
  }
  else if(value === "education"){
    trueValue(value);
    createText("SLC (90.38%): Akhanda Vidya Sadan")
    createText("+2 Science (79.8%): Goldengate International College")
    createText("UNG Comp. Engg. (CGPA 3.84): Kathmandu University")
  }
  else if(value === "hobby -a"){
    trueValue(value);
    createText("<a target='_blank'><i class='fab fa-itunes-note'></i></i> Singing Songs</a>")
    createText("<a target='_blank'><i class='fab fa-phoenix-squadron'></i> Playing Football</a>")
  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();