
import { createGlobalStyle } from 'styled-components'
import { IStyles } from '../../config/style'

export const MessageStyles = createGlobalStyle<IStyles>`
.messageItem {
    padding: 1rem 0 0 0;
    opacity: 0;
    transition: all 0.15s ease-in-out;
    animation: fadeNewMessage 0.5s;
    animation-fill-mode: forwards;
    
  }
  
@keyframes fadeNewMessage {
  0% {
    opacity: 0;
    transform: translateY(1rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
  .messageBubble{
    display: flex;
  }
  .messageItem--right  .messageBubble{
    flex-direction: row-reverse;
  }

.messageItem--left .messageAvatar {
    float: left;
  }
  .messageItem--left .messageValue {
    float: left;
    text-align: left;
    margin: 0 0 0 1rem;
    color:  ${props => props.botMessageTextColor};
    background-color: ${props => props.botMessageBubbleColor};
  }

  .messageItem--left .messageValue::before {
    //content: "";
    position: absolute;
    top: 14px;
    left: -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 10px 6px 0;
    border-color: transparent #4870df transparent transparent;
  }
  .messageItem--right .messageAvatar {
    float: right;
  }
  .messageItem--right .messageValue {
    float: right;
    text-align: right;
    margin: 0 1rem 0 0;
    background-color: ${props => props.userMessageBubbleColor};
    flex-direction: row-reverse;
    color:  ${props => props.userMessageTextColor};
  }
  .messageItem--right .messageValue::after {
   //content: "";
    position: absolute;
    top: 14px;
    right: -8px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 0 6px 10px;
    border-color: transparent transparent transparent #fafafa;
  }
  .messageItem--left .messageValue a {
    color: #91ffb1;
  }
  .messageItem--left .messageValue a:hover,
  .messageItem--left .messageValue a:focus {
    color: #75ff9e;
  }
  .messageItem--right .messageValue a {
    color: #09f;
  }
  .messageItem--right .messageValue a:hover,
  .messageItem--right .messageValue a:focus {
    color: #007dd1;
  }
  
.timeLine {
    display: flex;
    height: calc(100vh - 185px);
    padding: 1rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px; 
    flex-direction: column-reverse;
    overflow-y: auto;
  }
 
.messageValue {
  position: relative;
  max-width: 50%;
  min-height: 40px;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 16px;
  line-height: 18px;
  box-shadow: 0px 10px 10px -8px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  overflow: hidden; 
  border: solid 2px rgba(0,0,0,0.1);
  border-radius:  ${props => props.bubbleRadius};
}


.messageAvatar {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  image-rendering: -webkit-optimize-contrast;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  background:${props => props.userAvatarColor};
  justify-content: center;
  align-items: center; 
  div p {
    text-transform: uppercase;
    color: ${props => props.userAvatarTextColor};
    font-weight: bold; 
  }
} 
.messageItem--left .messageAvatar {
  background: ${props => props.botAvatarColor};
}

.messageItem--left .messageAvatar div p {
  color: ${props => props.botAvatarTextColor};
}
`