

import { createGlobalStyle } from 'styled-components'
import { IStyles } from '../../../config/style'

export const TimeStampStyles = createGlobalStyle<IStyles>`
.messageTime{
    padding: 1rem 0 0 55px;
  }
  .messageItem--right  .messageTime{
    float: right;    
    margin-right: 30px;
  }
  .timeStampLabel{
    color : ${ props => props.primaryLabelColor}
  }
`