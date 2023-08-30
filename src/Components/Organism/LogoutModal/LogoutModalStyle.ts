import styled from "styled-components";

const LogoutModalStyle = styled.div`

animation: show-bg 0.5s linear forwards;
box-sizing:border-box;
display:flex;
align-items: center;
justify-content: center;
height:100%;
left:0;
position:absolute;
position:fixed;
top: 0;
width:100%;
z-index:5000;
@keyframes show-bg{
    0%{
        background:rgba(0, 0, 0, 0)
    }
    100%{
        background:rgba(0, 0, 0, 0.8);
    }
}
.modal-container{
   display:flex;
   align-items: center;
   justify-content: center;
    box-sizing:border-box;
    height:100vh;
}
  .modal-content {
    position: relative;
    width: 400px;
    height: 300px;
    background: #fff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.09);
    border-radius: 16px;
  }

  .modal__title{
    color: #000;
    text-align: center;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.18px;
    // margin: 0 24px;    
  }

  .modal__text{
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%;
color: #546680;
text-align: center; 
  }

.btn__container{
display: flex;
align-items: center;
justify-content: end;
border-top: 1px solid #D5E1F2;
padding: 20px 0px 0px 0px;
gap: 16px;
}


.modal__close__btn{
    display: flex;
    height: 44px;
    padding: 10px 16px;
    width: 100px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    background: #e3fae3;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    color: #228B22;
    cursor: pointer;   
}

.logout__action__btn{
display: flex;
height: 44px;
width: 100px;
padding: 10px 16px;
justify-content: center;
align-items: center;
border: none;
border-radius: 4px;
background: #228B22;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 150%;
color: #fff;
cursor: pointer;       
}

.logout__action__btn:hover{
 background-color: #355E3B;
}

.modal__close__btn:hover{
background-color:  #d1ffd1;   
}




`

export default LogoutModalStyle;