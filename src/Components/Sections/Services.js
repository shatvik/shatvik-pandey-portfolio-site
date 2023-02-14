import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layouts";
import ServiceItem from "../ServiceItem/ServiceItem";
import Title from "../Title/Title";
import { code, design, desktop } from "../../utils/Icons";

function Services() {
  const theme = useTheme();
  return (
    <ServicesStyled id="services" theme={theme}>
      <Title name={"Expertise"} desc={"I can Perform Basic Doing of :"} />
      <div className="services-con">
        <ServiceItem
          icon={design}
          title={"Web Design"}
          bg={theme.colorPurple}
          shadow={theme.shadowPurple}
          desc={"I make Custom Web Designs & logos in Adobe Photoshop.."}
        />
        <ServiceItem
          icon={desktop}
          title={"Frontend Development"}
          bg={theme.colorGreenDark}
          shadow={theme.shadowGreen}
          desc={
            "I Build Client Side App with vanilla javascript as well as react tailwind.."
          }
        />
        <ServiceItem
          icon={code}
          title={"Backend Development"}
          shadow={theme.shadowPrimary}
          bg={theme.colorPrimary}
          desc={
            "I build RestAPI with golang and can perform basic CRUD practices"
          }
        />
      </div>
    </ServicesStyled>
  );
}

const ServicesStyled = styled(SectionLayout)`
  background: ${(props) => props.theme.colorBgGrad};
  .services-con {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 2rem;
  }
`;

export default Services;
