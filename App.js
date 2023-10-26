import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Navigation from './src/navigation';

export default function App() {
	return (
		<Container>
			<Navigation />
			<StatusBar style='auto' />
		</Container>
	);
}


const Container = styled.View`
	flex: 1;
	background-color: '#fff';
`;