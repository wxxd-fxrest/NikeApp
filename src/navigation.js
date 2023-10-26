import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductsDetailScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import { AntDesign } from '@expo/vector-icons'; 
import styled from "styled-components";

const Stack = createNativeStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ contentStyle: {backgroundColor: 'white'} }}>
                <Stack.Screen 
                    name="Products" 
                    component={ProductsScreen}
                    options={({ navigation }) => ({
                        headerRight: () =>  (
                            <SetupButton onPress={() => navigation.navigate("Cart")}>
                                <AntDesign name="shoppingcart" size={24} color="black" />
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

export default Navigation; 