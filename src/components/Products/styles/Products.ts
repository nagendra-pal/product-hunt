
import styled from "styled-components";
import { Button } from "reactstrap";

export const Body = styled.div`
  padding: 1rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  border-bottom: 0.0625rem solid #e8e8e8;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1.875rem 2rem;
  margin: 0 -1.875rem 1.3125rem;
  border-bottom: 0.0625rem solid #e8e8e8;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 1.5rem 0 2rem;
    margin: 0 0 1.3125rem;
  }
`;

export const DateSearchLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
`;

export const SearchButtonContainer = styled.div`
  padding-top: 0;
  @media only screen and (min-width: 768px) {
    padding-top: 1.5rem;
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper,
  .react-datepicker__input-container input {
    width: 100%;
  }
  margin: 0 0 1rem;
  @media only screen and (min-width: 768px) {
    .react-datepicker-wrapper,
    .react-datepicker__input-container input {
      width: auto;
    }
    margin: 0 1.875rem 0 0;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`;

export const NoRecordsContainer = styled.div`
  height: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F8F8F8;
  font-size: 1.375rem;
  font-weight: 500;
  @media only screen and (min-width: 768px) {
    height: 24.5rem;
    font-size: 1.5rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  border: 0.0625rem solid #e8e8e8;
  padding: 1rem;
  margin: 0 0 1rem;
  @media only screen and (min-width: 768px) {
    margin: 0 0 2rem;
  }
`;

export const StyledImage = styled.img`
  height: 200px;
  width: 100%;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;

export const DetailsContainer = styled.div`
  padding: 0 0 1rem;
  @media only screen and (min-width: 768px) {
    padding: 0 1rem 1rem;
  }
`;

export const StyledProductName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledProductDate = styled.div`
  font-style: italic;
  padding-top: 0.3rem;
`;

export const ProductLikeContainer = styled.div`
  display: flex;
  padding-top: 0.5rem;
`;

export const StyledProductLike = styled.img`
  cursor: pointer;
`;

export const StyledLikeCount = styled.span`
  padding-left: 0.3rem;
`;
