document.addEventListener("DOMContentLoaded",()=>{
  document.querySelector("input").addEventListener("keydown",function(e){
    if(e.code==="Enter"){
      console.log("you select the form and pressed enter");
      let inputField=input.value;
      input.value="";
      console.log(inputField);
      output(inputField);
    }
  })
})
const trigger=[
  ["hi","hey","hello"],
  ["how are you","how are things"],
  ["what is going on","what is up"],
  ["happy","well","good","fantastic","cool"],
  ["bad","bored","sad","tired"],
  ["tell me story","tell me joke"],
  ["thanks","thank you"],
  ["bye","see you","good bye"]
]
const reply=[
  ["hello","hi","hi there"],
  [
    "Fine...How are you",
    "Pretty well..How are you",
    "Fantastic..What about you"
  ],
  [
    "Nothing much",
    "Nothing New"
  ],
  ["Glad to hear it"],
  ["Why?","Cheer up buddy"],
  ["What ?","Once upon a time..."],
  ["You are welcome","No problem"],
  ["Good bye","See you later"]
]

const alternatives=[
  "Same",
  "Go On..",
  "Try again..",
  "I'm Listening",
  "Bro.."
  
]
function compare(triggerArray,replyArray,text){
  let item;
  for(let x=0;x<triggerArray.length;x++){
    for(let y=0;y<replyArray.length;y++){
      if(triggerArray[x][y]==text){
        items=replyArray[x];
        item=items[Math.floor(Math.random()*items.length)]
        
     
      }
    }
  }
  return item;
}
function output(inp){
  let text=inp.toLowerCase().replace(/[^\w\s\d]/gi,"");
  
  text=text
    .replace(/ a /g,"")
    .replace(/i feel /g,"")
    .replace(/whats/g,"What is")
    .replace(/please /g,"")
    .replace(/ please/g,"")
    .replace(/what's/g,"What is")
  console.log(text);
  
  if(compare(trigger,reply,text)){
    product=compare(trigger,reply,text);
    console.log("product is"+product)
  }
  else{
    product=alternatives[Math.floor(Math.random()*alternatives.length)]
    
  }
  
  addchat(inp,product);
}


function addchat(input1,product){
  const mainDiv=document.getElementById("main");
  
  let userDiv=document.createElement("div");
  console.log("input is" +input1);
  userDiv.id="user";
  userDiv.innerHTML=`You:<span id="chat-response">${input1}</span>`
  //userDiv.innerHTML=`You:${input1}`
  mainDiv.appendChild(userDiv);
  let botDiv=document.createElement("div");
  
  botDiv.id="bot";
  botDiv.innerHTML=`Chatbot:<span id="bot-response">${product}</span>`
  
  mainDiv.appendChild(botDiv);
  speak(product);
}

function speak(str){
  const u=new SpeechSynthesisUtterance();
  allVoices=speechSynthesis.getVoices();
  u.voice=allVoices.filter(voice=>voice.name==="Alex")[0];
  u.text=str;
  u.lang="en-US";
  u.volume=1;
  u.rate=1;
  u.pitch=1;
  speechSynthesis.speak(u);
}