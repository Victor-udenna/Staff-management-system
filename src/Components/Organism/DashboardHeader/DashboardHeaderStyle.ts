import styled from "styled-components";

const DashboardHeaderStyle = styled.div`

.dashboard__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 16px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
    width: 100%;
}

.dashboard__sub__container{
display: flex;
align-items: center;
gap: 0px 22px;   
}


.search__input__container{
    position: relative; 
    }


.dashboard__header__search{
    border-radius: 4px;
    height: 35px;
    width: 260px;
    border: 1.4px solid #dfe6df;
    font-size: 12px;
    padding: 10px 12px 10px 28px;
    color: grey;    
}



.search_icon{
position: absolute;
top: 8px;
left: 5px;
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

.dahsboard__header__button{
    height: 35px;    
    border: none;
    background-color: #228B22;
    color: white;
    font-weight: bold;
    width: 80px;
    border-radius: 4px;
    }

.user__dashboard__profile{
display: flex;  
align-items: center; 
gap: 10px;
padding: 6px;
border-radius: 4px;
border: 1px solid #dfe6df;

}

.user_avatar{
width: 35px;
height: 35px;
border-radius: 4px;    
}

.user_name{
 font-size: 13px;   
 font-weight: bold;
}

.company_name{
 font-size: 11px;
 padding-top: 3px;
 font-weight: 600;
 color: #228B22; 

}




`

export default DashboardHeaderStyle;