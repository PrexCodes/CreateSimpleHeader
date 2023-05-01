import styled from "styled-components";
import bernard from "../assets/bernard.jpg";
const Homescreen = () => {
  return (
    <Container>
      <Main>
        <Image src={bernard}></Image>
        <Info>Bro. Bernard </Info>
      </Main>
    </Container>
  );
};

export default Homescreen;
const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Main = styled.div`
  width: 80%;
  min-height: 400px;
  background-color: lightblue;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Image = styled.img`
  height: 400px;
  width: 450px;
  /* background-color: pink; */
  border-radius: 10px;
  margin: 20px;
  object-fit: cover;
`;
const Info = styled.div`
  border-radius: 10px;
  width: 450px;
  min-height: 400px;
  /* background-color: greenyellow; */
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 20px;
`;
