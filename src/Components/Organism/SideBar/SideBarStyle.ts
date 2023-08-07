import styled from "styled-components";


const SideBarStyle = styled.div`
*{
  padding: 0;
}

// 1 #6365EF
// 2 #A5B4FD
// 3 #E0E7FF

.side__bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  background-color: #F5F7FA;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo_container{
  text-align: center;
  padding-bottom: 30px;
  padding-top: 10px;
  color: #6365EF;
}


.logo{
  font-family: 'Chivo Mono', monospace;
  font-weight: bold;
  font-size: 30px;
  color: #6365EF;
}

.nav__link{
  color: black;
  margin: 10px 0 20px 0;
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 12px;
  width: 100%;
  a:-webkit-any-link {
      text-decoration: none;
      display: flex;
      align-items: center;
      text-align: center;
      color: inherit;
      background-color: inherit;

  }
  .link_text{
      padding-left: 8.5px;
  }
}

.active{
  color: #6365EF;
  background-color: #E0E7FF;
  border: 1px solid #6365EF;
  font-weight: bold;
  .link_text{
      color: black;
  }

}


  .nav__link:hover{
      background-color: #e6ecff;
  }

.others{
  padding-top: 20px;
       }

.list_header{
  color:  #9cA3AF;
  font-size: 11px;
  padding-left: 10px;
  padding-bottom: 10px;
  
}




.logout_btn{
  margin: 10px 0 20px 0;
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 12px;
  width: 100%;
  // 
  text-align: center;
  display: flex;
  align-items: center;
  background-color: inherit;
  border: 1px solid #F5F7FA;
  cursor: pointer;
  font-weight: bold;
  .logout_text{
      padding-left: 8.5px;
  }
}

.logout_btn:hover{
background-color: #fdf8f8;
border: 1px solid #ffcece;
color: rgb(30, 27, 27);
}

`

export default SideBarStyle;
