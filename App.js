import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
	return (
		<Provider store={store}>
			<Navigation />
			<StatusBar style='auto' />
		</Provider>
	);
}; 