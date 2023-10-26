import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components";
import products from '../data/products.js';

const ProductsScreen = ({ navigation }) => {
    return (
        <FlatList data={products}
            renderItem={({ item }) => (
                <ImageBox onPress={() => navigation.navigate('ProductDetail')} activeOpacity={0.4}>
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