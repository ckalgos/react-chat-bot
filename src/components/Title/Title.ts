import { createGlobalStyle } from 'styled-components'
import { IStyles } from '../../config/style'
export const TitleStyles = createGlobalStyle<IStyles>`
.title {
   padding: 15px; 
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.primaryLabelColor};
    text-transform: uppercase;
    position: relative;
  } 
  .title::after {
    content: "";
    position: absolute;
    background-color: ${props => props.primaryColor};
    width: 100%;
    height: 2px;
    border-radius: 30px;
    left: 0;
    right: 0;
    bottom: 0px;
  }   
  `