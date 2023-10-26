import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartListItem from "../components/CartListItem";
import { selectDeliceryPrice, selectSubtotal, selectTotal } from "../store/cartSlice";

const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliceryPrice);
    const total = useSelector(selectTotal);

    return (
        <Container> 
            <TotalBox>
                <Text> Subtotal </Text>
                <Text> {subtotal} US$ </Text>
            </TotalBox>
            <TotalBox>
                <Text> Delivery </Text>
                <Text> {deliveryFee} US$ </Text>
            </TotalBox>
            <TotalBox>
                <ToTal> Total </ToTal>
                <ToTal> {total} US$ </ToTal>
            </TotalBox>
        </Container>
    )
};

const ShoppingCartScreen = () => {
    const cartItems = useSelector((state) => state.cart.items);
    
    return (
        <>
            <FlatList data={cartItems}
                renderItem={({ item }) => (
                    <CartListItem cartItem={item}/>
                )}
                ListFooterComponent={ShoppingCartTotals}
            />
            <ButtonBox activeOpacity={0.6}>
                <ButtonText> Checkout </ButtonText>
            </ButtonBox>
        </>
    )
};

const Container = styled.View`
    margin: 20px;
    padding-top: 10px;
    border-color: gainsboro;
    border-top-width: 1px;
`;

const TotalBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 2px 0px;
`;

const Text = styled.Text`
    font-size: 16px;
    color: gray;
`;

const ToTal = styled.Text`
    font-size: 16px;
    font-weight: 500;
`;

const ButtonBox = styled.TouchableOpacity`
    position: absolute;
    background-color: black;
    bottom: 30px;
    width: 90%;
    align-self: center;
    padding: 20px;
    border-radius: 30px;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: white;
    font-weight: 500;
    font-size: 16px;
`;

export default ShoppingCartScreen; 