import styled from "styled-components";

const ViewActivityModalStyle = styled.div`

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

.modal__title{
display: flex;
align-items: center;
justify-content: space-between; 
padding: 24px;
p{
 font-weight: bold;   
}   
}

.close-icon{
cursor: pointer;
}

.modal__container{
 background-color: white;
 width: 500px; 
 border-radius: 16px;  
}

.modal__body{
padding: 24px;
}

.recent__activity__wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 250px;
    padding-bottom: 22px;
  }

.recent__activity__title {
    font-size: 14px;
    font-weight: 600;
  }

  .recent__activity__text {
    font-size: 12px;
  }


`

export default ViewActivityModalStyle