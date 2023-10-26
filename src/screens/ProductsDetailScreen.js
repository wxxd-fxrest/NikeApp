import React from "react";
import { Dimensions, FlatList, Pressable } from "react-native";
import styled from "styled-components";
import products from "../data/products.js";

const {width: SCREENWIDTH, height : SCREENHEIGHT} = Dimensions.get("window");

const ProductDetailsScreen = () => {
    const product = products[0];

    const onClickAddCart = () => {
        console.log('add to caart');
    };

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
    letter-spacing: 2;
`;

const Description = styled.Text`
    font-size: 18px;
    font-weight: 300;
    margin: 10px 0px;
    line-height: 30px;
`;

 

export default ProductDetailsScreen;