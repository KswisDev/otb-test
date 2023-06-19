import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const ProductWrapper = styled.div`
  display: flex;
  background: white;
`;

const OverviewWrapper = styled.section`
  text-align: left;
  margin-top: -22px;
  background: white;
`;

const InfoWrapper = styled.section`
  text-align: left;
  padding: 1rem;
  p {
    font-size: 12px;
    line-height: 20px;
    margin: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 20px;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 12px;
    color: grey;
  }
`;

const OuterWrapper = styled.div`
  padding: 1rem;
  max-width: 748px;
`;

const BookCTA = styled.button`
  background-color: #fedc07;
  border: none;
  padding: 1rem 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  color: #17317f;
`;

const UKPound = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

const StarIcon = styled(FaStar)`
  color: #fedc07;
`;

export {
  ProductWrapper,
  OverviewWrapper,
  InfoWrapper,
  OuterWrapper,
  BookCTA,
  UKPound,
  StarIcon,
};
