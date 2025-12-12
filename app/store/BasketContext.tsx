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

    const addItemHandler = (product: ProductItem) => {
        const newProduct: ProductItem = {
            productId: product.productId,
            title: product.title,
            img: product.img,
            price: product.price,
            quantity: 1,
        };
        setBasketItems((prevState) => [...prevState, newProduct]);
    };

    const increaseItemHandler = (productId: number) => {
        const newBasket = basketItems.map((item) =>
            item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setBasketItems(newBasket);
    };

    const decreaseItemHandler = (productId: number) => {
        const currentProduct = basketItems.find(
            (item) => item.productId === productId
        );

        if (currentProduct && currentProduct.quantity === 1) {
            deleteItemHandler(productId);
        } else {
            const newBasket = basketItems.map((item) =>
                item.productId === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            setBasketItems(newBasket);
        }
    };

    const deleteItemHandler = (productId: number) => {
        const newBasket = basketItems.filter(
            (item) => item.productId !== productId
        );
        setBasketItems(newBasket);
    };

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
