// All types related to product defined here

export interface ProductType {
    id: number;
    name: string;
    image: string;
    desc: string;
    likes: number;
    comments: {text: string}[];
    created: Date;
};

export interface DateType {
    startDate: Date;
    endDate: Date;
};

export interface ProductListType {
    productList: Array<ProductType>;
};

export interface ProductListItemType {
    product: ProductType;
};
