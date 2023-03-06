import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Buttong,
} from "./InfoElements";
import { Link } from "react-router-dom";
import FlickPlix from "./../../images/Screenshot (523).png";
import DoomBurst from "./../../images/Screenshot (593).png";
import Sky from "./../../images/Screenshot (595).png";
import Sonesta from "./../../images/Screenshot (597).png";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <InfoContainer lightBg="true" id={id}>
        <InfoWrapper>
          <InfoRow data-aos="fade-up" imgStart="false">
            <Column1>
              <TextWrapper>
                <TopLine>Social Media Application</TopLine>

                <Heading>DOOMBURST</Heading>

                <Subtitle darkText="true">
                  DOOMBURST is a social media application which facilitates
                  users to share posts, like posts and many more..
                </Subtitle>
                <div
                  style={{
                    width: "100%",
                    border: "1px solid #01BF71",
                    borderRadius: "5px",
                    padding: "20px",
                    marginBottom: "10px",
                    boxShadow: "0 60px 60px rgba(56, 125, 255, 0.17)",
                  }}
                >
                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "500",
                      color: "grey",
                      display: "flex",
                    }}
                  >
                    Used Technology:
                    <p style={{ color: "blueViolet" }}>
                      MERN Stack(React js, Node js)
                    </p>
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      color: "grey",
                      display: "flex",
                    }}
                  >
                    Authentication:{" "}
                    <p style={{ color: "blueViolet" }}> JWT Token</p>
                  </p>
                  <p
                    style={{
                      marginTop: "px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    GitHub Repo:
                    <Link style={{ color: "blueViolet" }}>
                      https://github.com/Yasiru-Deshan/Social-Media-Application
                    </Link>
                  </p>
                </div>

                <BtnWrap>
                  <Link to="/demo">
                    <Buttong>Watch Demo</Buttong>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={DoomBurst} alt="" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow data-aos="fade-up" imgStart="true">
            <Column1>
              <TextWrapper>
                <TopLine>Weather Update Application</TopLine>

                <Heading lightText="false">Sky Reference</Heading>

                <Subtitle style={{ color: "white" }}>
                  Sky Reference is a realtime weather checking application
                </Subtitle>
                <div
                  style={{
                    height: "140px",
                    width: "100%",
                    border: "1px solid white",
                    borderRadius: "5px",
                    padding: "20px",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "2px",
                      fontWeight: "500",
                      color: "white",
                      display: "flex",
                    }}
                  >
                    Used Technology:
                    <p style={{ color: "blueViolet" }}> React Js</p>
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      color: "white",
                      display: "flex",
                    }}
                  >
                    Authentication:
                    <p style={{ color: "blueViolet" }}>Firebase</p>{" "}
                  </p>
                  <p
                    style={{
                      marginTop: "px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    GitHub Repo:
                    <Link style={{ color: "blueViolet" }}>
                      https://github.com/Yasiru-Deshan/Weather-App
                    </Link>
                  </p>
                </div>

                <BtnWrap>
                  <Link to="https://weather-app-one-vert.vercel.app/">
                    <Buttong>Visit</Buttong>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={Sky} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer lightBg="true" id={id}>
        <InfoWrapper>
          <InfoRow data-aos="fade-up" imgStart="true">
            <Column1>
              <TextWrapper>
                <TopLine>Movie Streaming Platform</TopLine>

                <Heading>FlickPlix</Heading>

                <Subtitle darkText="true">
                  FlickPlix is a online movie streaming web application..
                </Subtitle>
                <div
                  style={{
                    width: "100%",
                    border: "1px solid #01BF71",
                    borderRadius: "5px",
                    padding: "20px",
                    marginBottom: "10px",
                    boxShadow: "0 60px 60px rgba(56, 125, 255, 0.17)",
                  }}
                >
                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "500",
                      color: "grey",
                      display: "flex",
                    }}
                  >
                    Used Technology:
                    <p style={{ color: "blueviolet" }}>
                      MERN Stack(React js, Node js)
                    </p>
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      color: "grey",
                      display:'flex'
                    }}
                  >
                    Authentication:
                    <p style={{color:'blueviolet'}}>JWT Token</p>
                  </p>
                  <p
                    style={{
                      marginTop: "px",
                      fontWeight: "500",
                      color: "grey",
                    }}
                  >
                    GitHub Repo:
                    <Link style={{ color: "blueviolet" }}>
                      {" "}
                      https://github.com/Yasiru-Deshan/Flick-Plix
                    </Link>
                  </p>
                </div>

                <BtnWrap>
                  <Link to="https://flick-plix.vercel.app/">
                    <Buttong>Visit</Buttong>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={FlickPlix} alt="" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow data-aos="fade-up" imgStart="true">
            <Column1>
              <TextWrapper>
                <TopLine>Frontend design for Hotel</TopLine>

                <Heading style={{ color: "white" }}>Sonesta</Heading>

                <Subtitle style={{ color: "white" }}>
                  This is only a frontend design for the hotel sonesta..
                </Subtitle>
                <div
                  style={{
                    height: "120px",
                    width: "100%",
                    border: "1px solid white",
                    borderRadius: "5px",
                    padding: "10px",
                    marginBottom: "10px",
                    //boxShadow: "0 60px 60px rgba(56, 125, 255, 0.17)",
                  }}
                >
                  <p
                    style={{
                      marginTop: "10px",
                      fontWeight: "500",
                      color: "white",
                      display:'flex'
                    }}
                  >
                    Used Technology:
                    <p style={{color:'blueviolet'}}>React Js</p>
                  </p>

                  <p
                    style={{
                      marginTop: "px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    GitHub Repo:
                    <Link style={{ color: "blueviolet" }}>
                      {" "}
                      https://github.com/Yasiru-Deshan/Sonesta-frontend-Design
                    </Link>
                  </p>
                </div>

                <BtnWrap>
                  <Link to="https://sonesta-frontend-design-eeih.vercel.app/">
                    <Buttong>Visit</Buttong>
                  </Link>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={Sonesta} alt="" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
