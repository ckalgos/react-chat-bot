
import { createGlobalStyle } from 'styled-components'
import { IStyles } from '../../config/style';
export const ChatWrapperStyles = createGlobalStyle<IStyles>`
.conversation {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0; 
    margin: 0 .5rem;
    box-shadow: 0 35px 20px -30px rgba(0, 0, 0, 0.1); 
    background:url(${props => props.chatBackGround})repeat;
    background:-webkit-linear-gradient(${props => props.chatBackGround}) repeat;
    border : 1px solid;
    padding: 1%;
  }
.sendMessage {
    position: relative;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  } 
` 