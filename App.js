import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductsDetailScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

export default function App() {
	return (
		<Container>
			{/* <ProductsScreen /> */}
			{/* <ProductDetailsScreen /> */}
			<ShoppingCartScreen />
			<StatusBar style='auto' />
		</Container>
	);
}


const Container = styled.View`
	flex: 1;
	background-color: '#fff';
`;