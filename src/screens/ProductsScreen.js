import React from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";
import { useGetProductsQuery } from "../store/apiSlice";

const ProductsScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    
    const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading) {
      return <ActivityIndicator />;
    }
    
    if(error) {
        return <Text> {error.error} </Text>
    }

    const products = data.data;

    return (
        <FlatList data={products}
            renderItem={({ item }) => (
                <ImageBox onPress={() => {
                    // dispatch(productsSlice.actions.setSelectedProduct(item.id));
                        navigation.navigate('ProductDetail', {id: item._id});
                    }} 
                    activeOpacity={0.4}>
                    <MainImg source={{ uri: item.image }}/>
                </ImageBox>
            )}
            keyExtractor={(item) => item._id}
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