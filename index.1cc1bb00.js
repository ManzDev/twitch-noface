CSS.registerProperty({name:"--scale-x",syntax:"<number>",inherits:!1,initialValue:1});const e=document.querySelector(".real-mouth"),t=()=>{e.classList.add("bite");const o=1e3*Math.floor(5*Math.random())+3e3,r=1e3*Math.floor(5*Math.random())+3e4;setTimeout((()=>a()),o),setTimeout((()=>t()),o+1e4+r)},a=()=>e.classList.remove("bite"),o=1e3*~~(5*Math.random())+3e3;setTimeout((()=>t()),o);
