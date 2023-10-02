import { RouteProp, NavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type ProductDetailRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

type ProductDetailNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

interface NavigationProps {
  route: ProductDetailRouteProp;
  navigation: ProductDetailNavigationProp;
}

export type { NavigationProps };
