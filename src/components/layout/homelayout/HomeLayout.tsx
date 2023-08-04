
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../../blocks/homeblock/Sidebar";

const HomeLayout = () => {
  return (
    <Container>
      <Sidebar/>
      <Outlet />
    </Container>
  );
};

export default HomeLayout;

const Container = styled.div`
  display: flex;
 
`
