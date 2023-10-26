import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";
import styled from "styled-components";

const CartListItem = ({ cartItem }) => {
	const dispatch = useDispatch();

	const increaseQuantity = () => {
		dispatch(cartSlice.actions.changeQuantity({
			productID: cartItem.product.id, 
			amount: 1,
		}));
	};

	const decreaseQuantity = () => {
		dispatch(cartSlice.actions.changeQuantity({
			productID: cartItem.product.id, 
			amount: -1,
		}));
	};

	const onClickProductDelete = () => {
		dispatch(cartSlice.actions.deleteProduct({
			productID: cartItem.product.id, 
		}))
	}

	return (
		<View style={styles.container}>
		<Image source={{ uri: cartItem.product.image }} style={styles.image} />
		<View style={styles.contentContainer}>
			<NameBox>
				<Text style={styles.name}>{cartItem.product.name}</Text>
				<DleteBox onPress={onClickProductDelete}>
					<Feather name="x-circle" size={24} color="black" />			
				</DleteBox>
			</NameBox>

			<Text style={styles.size}>Size {cartItem.size}</Text>

			<View style={styles.footer}>
			<Feather
				onPress={decreaseQuantity}
				name="minus-circle"
				size={24}
				color="gray"
			/>
			<Text style={styles.quantity}>{cartItem.quantity}</Text>
			<Feather
				onPress={increaseQuantity}
				name="plus-circle"
				size={24}
				color="gray"
			/>
			<Text style={styles.itemTotal}>{cartItem.product.price * cartItem.quantity} US$</Text>
			</View>
		</View>
		</View>
	);
};

const NameBox = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

const DleteBox = styled.TouchableOpacity``;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingHorizontal: 20,
		flexDirection: "row",
	},
	contentContainer: {
		flex: 1,
		marginLeft: 10,
	},
	image: {
		width: "40%",
		aspectRatio: 1,
	},
	name: {
		fontWeight: "500",
		fontSize: 18,
	},
	size: {
		fontSize: 16,
		color: "gray",
	},
	quantity: {
		marginHorizontal: 10,
		fontWeight: "bold",
		color: "gray",
	},
	footer: {
		marginTop: "auto",
		flexDirection: "row",
		alignItems: "center",
	},
	itemTotal: {
		fontSize: 16,
		marginLeft: "auto",
		fontWeight: "500",
	},
});

export default CartListItem;
