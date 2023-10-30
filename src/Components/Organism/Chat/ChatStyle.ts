import styled from "styled-components"

const ChatStyle = styled.div`

.chat_container{ 
border-left: 1px solid #dfe6df; 
height: 100vh;
overflow-x: scroll;
position: relative;
-ms-overflow-style: none;
scrollbar-width: none;
overflow: -moz-scrollbars-none;
}

.chat_container::-webkit-scrollbar{
    display: none;
    width: 0 !important
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

.chat__header{
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #dfe6df;
border-right: 0px;
border-left: 0px;
padding: 8px;  
margin-right: -40px;
position: sticky;
top: 0px;
z-index: 1;
background-color: #fff;
width: 100%;
}

// .chat__header{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     // background-color: red;
//     border: 1px solid #dfe6df;
//     margin-left: 20px;  
//     padding: 8px;  
//     border-radius: 8px;
//     }

.chat__profile{
    display: flex;  
    align-items: center; 
    gap: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #dfe6df;
    }
    
    .chat_avatar{
    width: 35px;
    height: 35px;
    border-radius: 4px;    
    }
    
    .chat_name{
     font-size: 13px;   
     font-weight: bold;
    }
    
    .company_role{
     font-size: 11px;
     padding-top: 3px;
     font-weight: 600;
     color: #228B22; 
    }

    .arrow_down{
    padding-top: 3px;
    margin-left: 2px;   
    }
    

.call__container{
    width: 15%;
    height: 34px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #afe1af;
    cursor: pointer;   
    padding: 1px;

    button{
    background-color: #fff;
    border: none;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    }
    .call_button{
        border-right: 1px solid #afe1af;
    }
    button:hover{
    background-color: honeydew;    
    }

}


`

export default ChatStyle;