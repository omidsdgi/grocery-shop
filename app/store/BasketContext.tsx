import React, { createContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

interface ProductItem {
    productId: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
}

export const BasketContext = createContext<{
    basketItems: Array<ProductItem>;
    addItem: (product: ProductItem) => void;
    increaseItem: (productId: number) => void;
    decreaseItem: (productId: number) => void;
    deleteItem: (productId: number) => void;
}>({
    basketItems: [],
    addItem: () => {},
    increaseItem: () => {},
    decreaseItem: () => {},
    deleteItem: () => {},
});

export const BasketContextProvider = ({ children }: Props) => {
    const [basketItems, setBasketItems] = useState<Array<ProductItem>>([]);

    const addItemHandler = () => {};

    const increaseItemHandler = () => {};

    const decreaseItemHandler = () => {};

    const deleteItemHandler = () => {};

    return (
        <BasketContext.Provider
            value={{
                basketItems,
                addItem: addItemHandler,
                increaseItem: increaseItemHandler,
                decreaseItem: decreaseItemHandler,
                deleteItem: deleteItemHandler,
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};
