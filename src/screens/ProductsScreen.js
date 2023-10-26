import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import products from '../data/products.js';

const ProductsScreen = () => {
    return (
        <FlatList data={products}
            renderItem={({ item }) => (
                <ImageBox>
                    <MainImg source={{ uri: item.image }}/>
                </ImageBox>
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    )
};

const ImageBox = styled.View`
	width: 50%;
	padding: 1px;
`;

const MainImg = styled.Image`
	width: 100%;
	aspect-ratio: 1;
`;

export default ProductsScreen;