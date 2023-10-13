import styled from "styled-components"

const ChatStyle = styled.div`

*{
    height: 85vh;
}

.chat_container{ 
border-left: 1px solid #dfe6df; 
}

.chat__empty_state{
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

}

.empty_chat_img{
 width: 30%;
 padding-top: 20%;   
}

.empty_chat_text{
color: #5A616C;    
width: 50%;
text-align: center;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%;
padding-top: 10px;
}

`

export default ChatStyle;