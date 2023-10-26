import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";

const ProductsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    return (
        <FlatList data={products}
            renderItem={({ item }) => (
                <ImageBox onPress={() => {
                    dispatch(productsSlice.actions.setSelectedProduct(item.id));
                        navigation.navigate('ProductDetail');
                    }} 
                    activeOpacity={0.4}>
                    <MainImg source={{ uri: item.image }}/>
                </ImageBox>
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    )
};

const ImageBox = styled.TouchableOpacity`
	width: 50%;
	padding: 1px;
`;

const MainImg = styled.Image`
	width: 100%;
	aspect-ratio: 1;
`;

export default ProductsScreen;