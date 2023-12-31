import React from "react";
import { ActivityIndicator, Dimensions, FlatList, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useGetProductQuery } from "../store/apiSlice.js";
import { cartSlice } from "../store/cartSlice.js";

const {width: SCREENWIDTH, height : SCREENHEIGHT} = Dimensions.get("window");

const ProductDetailsScreen = ({ route }) => {
    const id = route.params.id; 
    const dispatch = useDispatch();

    const { data, isLoading, error } = useGetProductQuery(id);

    const product = data?.data; 

    const onClickAddCart = () => {
        dispatch(cartSlice.actions.addCartItem({ product }));
    };

    if(isLoading) {
        return <ActivityIndicator />
    }

    if(error) {
        return <Text> {error.error} </Text>
    }

    return (
        <Container>
            <ScrollBox showsVerticalScrollIndicator={false}>
                {/* Image Carousel */}
                <FlatList horizontal
                    data={product.images}
                    renderItem={({ item }) => (
                        <DetailImg 
                            source={{ uri: item }}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled // 스크롤 시 스냅이 걸리도록 함 
                />

                <TextContainer>
                    {/* Title */}
                    <Title> {product.name} </Title>
                        

                    {/* Price */}
                    <Price> ${product.price} </Price>
        
                    {/* Description */}
                    <Description> {product.description} </Description>
        
                </TextContainer>
                {/* Add to cart button */}


                {/* Navigation icon */}
                
            </ScrollBox>
            <ButtonBox onPress={onClickAddCart} activeOpacity={0.6}>
                <ButtonText> Add to Cart </ButtonText>
            </ButtonBox>
        </Container>
    );
};

const Container = styled.View``;

const ScrollBox = styled.ScrollView`
    margin-bottom: 100px;
`;

const DetailImg = styled.Image`
	width: ${SCREENWIDTH};
	aspect-ratio: 1;
`;

const TextContainer = styled.View`
    padding: 20px;
`;

const Title = styled.Text`
    font-size: 34px;
    font-weight: 500;
    margin: 10px 0px;
`;

const Price = styled.Text`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
`;

const Description = styled.Text`
    font-size: 18px;
    font-weight: 300;
    margin: 10px 0px;
    line-height: 30px;
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

export default ProductDetailsScreen;