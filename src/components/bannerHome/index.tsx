import React from "react";
import styled from "styled-components";
import bannerHomeImage from "../../assets/bannerHome.png";

const Banner = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
  /* object-position: top; */
`;

interface BannerHomeProps {
  src?: string;
  alt?: string;
  className?: string;
}

const BannerHome: React.FC<BannerHomeProps> = ({
  src = bannerHomeImage,
  alt = "Banner Home",
  className = "banner-image",
}) => {
  return (
    <div className="banner-home">
      <Banner
        src={src}
        alt={alt}
        className={className}
      />
    </div>
  );
};

export default BannerHome;
