import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductsDetailScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import { AntDesign } from '@expo/vector-icons'; 
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectNumberOfItems } from "./store/cartSlice";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const numberOfItems = useSelector(selectNumberOfItems);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: {backgroundColor: 'white'} }}>
                <Stack.Screen 
                    name="Products" 
                    component={ProductsScreen}
                    options={({ navigation }) => ({
                        headerRight: () =>  (
                            <SetupButton onPress={() => navigation.navigate("Cart")}>
                                <AntDesign name="shoppingcart" size={30} color="black" />
                                <TotalBackGround>
                                    <TotalText> {numberOfItems} </TotalText>
                                </TotalBackGround>
                            </SetupButton>
                        )
                    })}
                />
                <Stack.Screen 
                    name="ProductDetail" 
                    component={ProductDetailsScreen}
                    options={{ presentation: 'modal' }}
                />
                <Stack.Screen 
                    name="Cart" 
                    component={ShoppingCartScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

const SetupButton = styled.TouchableOpacity`
    margin-right: 20px;
`;

const TotalBackGround = styled.View`
    background-color: red;
    border-radius: 100px;
    width: 18px;
    height: 18px;
    position: absolute;
    bottom: 0px;
    right: -5px;
`;

const TotalText = styled.Text`
    font-weight: 500;
    font-size: 12px;
    color: white;
    position: absolute;
    right: 1px;
    top: 1px;
`;

export default Navigation; 