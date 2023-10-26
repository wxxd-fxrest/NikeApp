import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';
import ProductsScreen from './src/screens/ProductsScreen';

export default function App() {
	return (
		<Container>
			<ProductsScreen />
			<StatusBar style='auto' />
		</Container>
	);
}


const Container = styled.View`
	flex: 1;
	background-color: '#fff';
	align-items: center;
	justify-content: center;
`;