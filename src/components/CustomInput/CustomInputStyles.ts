
import { createGlobalStyle } from 'styled-components' 

export const InputStyles = createGlobalStyle<any>`
.button--loading {
  cursor: wait;
  background-color: ${props => props.sendButtonColor};
}
.button--loading:hover {
  background-color: ${props => props.sendButtonColor};
}
.button--loading::before,
.button--loading::after {
  content: "";
  position: absolute;
  z-index: 1;
  display: block;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  margin: auto;
  border-radius: 40px;
  background-color: #fff;
}
.button--loading::after {
  animation: loadSendMessage 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}
.button--loading i {
  display: none;
}

@keyframes loadSendMessage {
  0% {
    opacity: 1;
    width: 4px;
    height: 4px;
  }
  100% {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
}

.button {
  float: right;
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 8px;
  border-radius: 30px;
  color: #fff;
  background-color: ${props => props.sendButtonColor};
  text-align: center;
  box-shadow: 0px 14px 10px -8px rgba(0, 0, 0, 0.2);
  transition: 0.15s all ease-in-out;
  box-sizing: border-box;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.button:hover {
  background-color: #3c559c;
}
.button i {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 0 0 1px;
  font-size: 22px;
}
.convInput { 
  height: 40px;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.inputBoxBorderRadius};
  margin: 0 0.5rem 0 0;
  width: calc(100% - 52px); 
  box-shadow: inset 0 0 0 2px #dedfed;
  font-size: 14px;
  font-family: "Quicksand", sans-serif; 
  transition: 0.15s all ease-in-out;
  box-sizing: border-box;
}
.convInput::placeholder { 
  color: #b1b1b1;
  opacity: 1;
}
.convInput:-ms-input-placeholder { 
  color: #b1b1b1;
}
.convInput::-ms-input-placeholder { 
  color: #b1b1b1;
}
.convInput:focus,
.convInput:active {
  box-shadow: inset 0 0 0 2px #7690d6;
}
.convInput:focus {
  outline: none;
}
`