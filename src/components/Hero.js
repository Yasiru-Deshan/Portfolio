import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PlanetOne from "../images/planet.svg";
import PlanetTwo from "../images/planet-2.svg";
import PlanetThree from "../images/planet-3.svg";
import PlanetFour from "../images/planet-4.svg";
import Profile from "../images/profile-pic (2).png";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #13131;
  
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  margintop: -50px;

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 5rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: black;
  }

  ${
    "" /* p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  } */
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          {/* <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Journey to the unknown
          </motion.p> */}
          <img
            style={{
              width: "350px",
              height: "350px",
              borderRadius: "50%",
              marginTop: "30px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "20px",
              objectFit: "cover",
              borderColor: "white",
              boxShadow: "0 60px 60px rgba(56, 125, 255, 0.17)",
            }}
            src={Profile}
            alt=""
          />
          <div
            style={{
              height: "100px",
              width: "100%",
              border: "1px solid #01BF71",
              borderRadius: "5px",
              textAlign: "center",
              boxShadow: "0 60px 60px rgba(56, 125, 255, 0.17)",
            }}
          >
            <p
              style={{
                marginTop: "10px",
                fontWeight: "700",
                color: "#01BF71",
                fontSize: "25px",
              }}
            >
              W M YASIRU DESHAN
            </p>
            <p style={{ marginTop: "5px", fontWeight: "700", color: "black" }}>
              Final Year Undergraduate at SLIIT🎓
            </p>
            <p style={{ marginTop: "5px", fontWeight: "700", color: "black" }}>
              GitHub: https://github.com/Yasiru-Deshan
            </p>
          </div>
          {/* <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "#67F6E7",
              border: "none",
              color: "#000",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Get Started
          </Button> */}
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={PlanetOne}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetTwo}
            alt="planet"
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetThree}
            alt="planet"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetFour}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
