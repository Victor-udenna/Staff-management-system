import styled from "styled-components";

const Chatliststyle = styled.div`

.chat_list{
    height: 85vh;
    overflow-x: scroll;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;

}

.chat_list::-webkit-scrollbar{
    display: none;
    width: 0 !important
  }

.search__input{
width: 99%;
border-radius: 4px;
border: 1.4px solid #dfe6df;
font-size: 12px;
padding: 8px 12px;   
color: grey; 
margin: 2px 2px 16px 2px;
position: sticky;
top: 0px;
z-index: 1;
}

input[type="search"]:focus{
    outline: 1.4px solid #afe1af ;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

.chat_item{
display: flex;
align-items: center;
padding: 12px;
gap: 12px;
margin: 12px 2px;
border-bottom: 1px solid #dfe6df;
// border-top: 1px solid #dfe6df;
position: relative;
.message_name{
    font-size 10px;
    padding-bottom: 4px;
     }
   
     .last_text{
       font-size: 11px;
     }
}

.chat_item.active{
   width: 99%; 
  border-left: 2px solid #228B22;
  .message_name{
   font-weight: 600;
     } 
}

.chat_img{
   width: 50px;
   height: 50px; 
   border-radius: 50%;
}
.active_status_icon{
    width: 13px;
    height: 13px;
    background-color: #228B22;
    border-radius: 50%;
    position: absolute;
    left: 45px;
    bottom: 10px;

}

.inactive_status_icon{
    width: 13px;
    height: 13px;
    background-color: orange;
    border-radius: 50%;
    position: absolute;
    left: 45px;
    bottom: 10px;
}

`;

export default Chatliststyle;
