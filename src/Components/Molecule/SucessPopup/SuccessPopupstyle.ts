import styled from "styled-components";

const SuccessPopupStyle = styled.div`
position: absolute;
top: 20px;
right: 20px;
z-index: 1000;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.10);
animation-name: animatemodal;
animation-duration: .4s;

.error_pop_up{
    background-color: white;
    display: flex;
    align-items: center;
    padding: 18px;
    width: 280px;
    border-radius: 8px;
    border-left: 1.5px solid #60ad2b;
}

.icon_container{
    color: #60ad2b;
}

.error_pop_up_text_container{
    padding-left: 12px;
}

.error_pop_up_headertext{
    color: black;
    font-weight: 500;
    font-size: 13px;
    padding-bottom: 5px;
}

// .error_pop_up_text{
//     font-size: 12px;
//     color: #9ca3af;
// }

@keyframes animatemodal {
    from{
        top: 0px;
        opacity: 0;
    }

    to{
        top: 20px;
        opacity: 1;
    }
}

`

export default SuccessPopupStyle;