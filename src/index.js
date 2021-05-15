CSS.registerProperty({
  name: "--scale-x",
  syntax: "<number>",
  inherits: false,
  initialValue: 1
});

const WAIT_TIME = 30000;
const realMouth = document.querySelector(".real-mouth");

const enableBite = () => {
  realMouth.classList.add("bite");
  const timeToEnd = (Math.floor(Math.random() * 5) * 1000) + 3000;
  const timeToStart = (Math.floor(Math.random() * 5) * 1000) + WAIT_TIME;
  setTimeout(() => disableBite(), timeToEnd);
  setTimeout(() => enableBite(), timeToEnd + 10000 + timeToStart);
};
const disableBite = () => realMouth.classList.remove("bite");

const timeToStart = (~~(Math.random() * 5) * 1000) + 3000;

setTimeout(() => enableBite(), timeToStart);
