import styled from "styled-components";

const SideBarStyle = styled.div`
  * {
    padding: 0;
  }

  // 1 #6365EF
  // 2 #A5B4FD
  // 3 #E0E7FF

  .side__bar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0px;
    width: 220px;
    padding: 10px 10px 10px 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    gap: 10px;
  }

  .general {
    background-color: #f5f7fa;
    border-radius: 7px;
    padding: 10px 10px 0px 10px;
    height: 100%;
  }

  .others {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f7fa;
    border-radius: 7px;
    padding: 0px 10px 0px 10px;
    height: 100%;
  }

  .logo_container {
    text-align: center;
    padding-bottom: 30px;
    padding-top: 10px;
    color: #6365ef;
  }

  .logo {
    font-family: "Chivo Mono", monospace;
    font-weight: bold;
    font-size: 30px;
    color: #6365ef;
  }

  .nav__link {
    color: black;
    margin: 10px 0 20px 0;
    padding: 8px 10px;
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
    .link_text {
      padding-left: 8.5px;
    }
  }

  .active {
    color: #6365ef;
    background-color: #e0e7ff;
    // border: 1px solid #6365EF;
    border-left: 2px solid #6365ef;
    border-radius: 0px;
    font-weight: bold;
    .link_text {
      color: #6365ef;
    }
  }

  .nav__link:hover {
    background-color: #e6ecff;
  }

  .others {
    padding-top: 20px;
  }

  .list_header {
    color: #9ca3af;
    font-size: 11px;
    padding-left: 10px;
    padding-bottom: 10px;
  }

  .logout_btn {
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
    border: 1px solid #f5f7fa;
    cursor: pointer;
    font-weight: bold;
    .logout_text {
      padding-left: 8.5px;
    }
  }

  .logout_btn:hover {
    background-color: #fdf8f8;
    border: 1px solid #ffcece;
    color: rgb(30, 27, 27);
  }
`;

export default SideBarStyle;
