import React, { useState } from "react";
import { Button } from "reactstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
import {Body, Title, SearchContainer, DateSearchLabel, SearchButtonContainer, DatePickerWrapper, StyledButton} from "./styles/Products";
import ProductList from "./ProductList";
import {ProductType, DateType} from "./ProductTypes";
import ProductData from "./ProductData";

const Products = (): JSX.Element => {
  const [newDates, setNewDates] = useState<DateType>({
    startDate: null,
    endDate: null,
  });

  const [productList, setProductList] = useState<Array<ProductType>>(ProductData);

  const filterAfterStartDate = (arr: Array<ProductType>): Array<ProductType> => {
    const startDay = moment(newDates.startDate).utc();
    return arr.filter(
      (product) => startDay.diff(moment(product.created).utc(), "hours") <= 0
    );
  };

  const filterBeforeEndDate = (arr: Array<ProductType>): Array<ProductType> => {
    const endDate = moment(newDates.endDate).utc();
    return arr.filter(
      (product) => endDate.diff(moment(product.created).utc(), "days") >= 0
    );
  };

  const filterAfterStartAndBeforeEnd = (arr: Array<ProductType>): Array<ProductType> => {
    return filterBeforeEndDate(filterAfterStartDate(arr));
  };

  const searchHandle = () => {
    const { startDate, endDate } = newDates;

    // if no dates selected - show all results
    if (!startDate && !endDate) setProductList(ProductData);

    // if only end date picked - show only results that were received before end date
    if (!startDate && endDate) {
      setProductList(filterBeforeEndDate(ProductData));
    }
    // if only start date picked - show only results that were received after start day
    if (startDate && !endDate) {
      setProductList(filterAfterStartDate(ProductData));
    }
    // show results that were received after start date and before end date
    if (startDate && endDate) {
      setProductList(filterAfterStartAndBeforeEnd(ProductData));
    }
  };

  return (
    <Body>
      <Title>Product Hunt</Title>
      <SearchContainer>
        <div>
          <DateSearchLabel>From</DateSearchLabel>
          <DatePickerWrapper>
            <DatePicker
              selected={newDates.startDate}
              onChange={(date) => {
                const updatedDates = { ...newDates, startDate: date };
                setNewDates(updatedDates);
              }}
              maxDate={newDates.endDate}
              isClearable={!!newDates.startDate}
              //dateFormat={widthData.moreSm ? 'standard' : 'short'}
              initialDate={newDates.startDate}
              />
            </DatePickerWrapper>
        </div>
        <div>
          <DateSearchLabel>To</DateSearchLabel>
          <DatePickerWrapper>
          <DatePicker
            selected={newDates.endDate}
            onChange={(date) => {
              const updatedDates = { ...newDates, endDate: date };
              setNewDates(updatedDates);
            }}
            minDate={newDates.startDate}
            isClearable={!!newDates.endDate}
            //dateFormat={widthData.moreSm ? 'standard' : 'short'}
            initialDate={newDates.endDate}
          />
          </DatePickerWrapper>
        </div>
        <SearchButtonContainer>
          <StyledButton color="primary" onClick={searchHandle}>
            Search
          </StyledButton>
        </SearchButtonContainer>
      </SearchContainer>
      <ProductList productList={productList} />
    </Body>
  );
};

export default Products;
