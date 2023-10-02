import React from 'react'
import { View, FlatList } from 'react-native'
import { BasketItem, Header } from '@Components'
import { useAppSelector } from '@Hooks'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import styles from './styles'

const Cart = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {

    const cart = useAppSelector(state => state.cart)

    const { container } = styles

    const _renderItem = ({ item }: { item: IProducts["item"] }) => {

        const { price, imageUrl, name, id } = item

        return (
            <BasketItem id={id} name={name} imageUrl={imageUrl} price={price} />
        )
    }

    const _leftButtonPress = () => {
        navigation.navigate("Favorites")
    }

    return (
        <View style={container}>
            <Header leftButtonPress={_leftButtonPress} title='Cart' />
            <FlatList data={cart} renderItem={_renderItem} />
        </View>
    )
}

export default Cart