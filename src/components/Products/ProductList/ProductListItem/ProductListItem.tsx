import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import {ProductListItemType} from "../../ProductTypes";
import {ProductContainer, ImageContainer, StyledImage, DetailsContainer, StyledProductName, StyledProductDate, ProductLikeContainer, StyledProductLike, StyledLikeCount} from "../../styles/Products";

const ProductListItem = ({ product }: ProductListItemType): JSX.Element => {
  const [likes, setLikes] = useState<number>(product.likes);
  const [modal, setModal] = useState<boolean>(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <ProductContainer>
        <ImageContainer>
          <StyledImage onClick={toggle} src={product.image}></StyledImage>
        </ImageContainer>
        <DetailsContainer>
          <StyledProductName>{product.name}</StyledProductName>
          <div>{product.desc}</div>
          <StyledProductDate>
            {moment.utc(product.created).format("MMM DD, YYYY")}
          </StyledProductDate>
          <ProductLikeContainer>
            <StyledProductLike
              height="25"
              width="25"
              src="https://res.cloudinary.com/dsrkwxxo7/image/upload/v1589205364/samples/like-1_eu3iot.svg"
              onClick={() => setLikes(likes + 1)}
            ></StyledProductLike>
            <StyledLikeCount>{likes}</StyledLikeCount>
          </ProductLikeContainer>
        </DetailsContainer>
      </ProductContainer>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Comments</ModalHeader>
        <ModalBody>
          {product.comments.map((comment, index) => (
            <ul key={`comment-${index}`}>
              <li>{comment.text}</li>
            </ul>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductListItem;
