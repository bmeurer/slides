const style1 = [
  'background-color: #005050',
  'background-image: repeating-linear-gradient(transparent, transparent 50px, rgba(255,255,255,.4) 50px, rgba(255,255,255,.4) 53px, transparent 53px, transparent 63px, rgba(255,255,255,.4) 63px, rgba(255,255,255,.4) 66px, transparent 66px, transparent 116px, rgba(255,255,255,.5) 116px, rgba(255,255,255,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(255,255,255,.5) 169px, rgba(255,255,255,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(255,255,255,.5) 182px, rgba(255,255,255,.5) 232px, transparent 232px), repeating-linear-gradient(270deg, transparent, transparent 50px, rgba(255,255,255,.4) 50px, rgba(255,255,255,.4) 53px, transparent 53px, transparent 63px, rgba(255,255,255,.4) 63px, rgba(255,255,255,.4) 66px, transparent 66px, transparent 116px, rgba(255,255,255,.5) 116px, rgba(255,255,255,.5) 166px, rgba(255,255,255,.2) 166px, rgba(255,255,255,.2) 169px, rgba(255,255,255,.5) 169px, rgba(255,255,255,.5) 179px, rgba(255,255,255,.2) 179px, rgba(255,255,255,.2) 182px, rgba(255,255,255,.5) 182px, rgba(255,255,255,.5) 232px, transparent 232px), repeating-linear-gradient(125deg, transparent, transparent 2px, rgba(255,255,255,.2) 2px, rgba(255,255,255,.2) 3px, transparent 3px, transparent 5px, rgba(255,255,255,.2) 5px)',
  'color: white',
  'text-shadow: 2px 2px 3px black',
  'display: block',
  'height: 50vh',
  'text-align: center',
  'line-height: 1.4',
  'font-weight: bold',
  'font-size: calc(1.9em + 2vw)',
  'padding-top: 1.5em',
  'padding-left: 0.5em',
  'font-family: "Apple Color Emoji", "Segoe UI Emoji", "Input"'
].join(';')

const style2 = [
  'background-color: rgb(0, 80, 80)',
  'background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 50%, transparent 50%), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 50%, transparent 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.4) 50%), linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, 0.5) 50%)',
  'background-size: 13px, 29px, 37px, 53px',
  'color: white',
  'text-shadow: 2px 2px 0 black',
  'font-size: calc(1em + 1.5vw)',
  'display: block',
  'text-align: center',
  'padding: 1em',
  'line-height:1.4'
].join(';')

const style3 = [
  'background: repeating-linear-gradient(-45deg, transparent, transparent 1em, rgba(0, 80, 80, 0.2) 0, rgba(0, 80, 80, 0.05) 2rem, transparent 0, transparent 1rem, rgba(0, 80, 80, 0.15) 0, rgba(0, 80, 80, 0.1) 4rem, transparent 0, transparent 1rem, rgba(255, 255, 255, 0.3) 0, rgba(255, 255, 255, 0.1) 2rem), repeating-linear-gradient(45deg, transparent, transparent 1rem, rgba(0, 80, 80, 0.2) 0, rgba(0, 80, 80, 0.05) 2rem, transparent 0, transparent 1rem, rgba(0, 80, 80, 0.15) 0, rgba(0, 80, 80, 0.1) 4rem, transparent 0, transparent 1rem, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.05) 2rem), #fff',
  'background-blend-mode: multiply',
  'color: white',
  'font-size: calc(1.25em + 2vw)',
  'display: block',
  'text-align: center',
  'padding: 0.5em',
  'line-height: 1.4',
  'font-family: "Apple Color Emoji", "Segoe UI Emoji"'
].join(';')

const message1 = 'Using DevTools to understand modern layouts'
const message2 = 'Chen Hui Jing | @hj_chen'
const message3 = '🇲🇾👾🏀🚲🖌👟💻🖊🎙🦊🥑🧗‍♀️🏳️‍🌈'

console.log('%c%s', style1, message1)
console.log('%c%s', style2, message2)
console.log('%c%s', style3, message3)