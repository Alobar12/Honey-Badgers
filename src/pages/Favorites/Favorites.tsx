import React from 'react'
import { View, FlatList } from 'react-native'
import { useAppSelector } from '@Hooks'
import { Card, Header } from '@Components'
import { backIcon } from '@Assets'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import styles from './styles'

const Favorites = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {

    const likedProducts = useAppSelector(state => state.likedProducts)

    const { container } = styles;

    const goToProductDetail = (item: IProducts["item"]) => {
        navigation.navigate("ProductDetail", { item })
    }

    const _renderItem = ({ item }: { item: IProducts["item"] }) => {
        const { id } = item
        return (
            <Card onPress={() => { goToProductDetail(item) }} key={id} item={item} />
        );
    };

    const _goBack = () => {
        navigation.goBack()
    }

    return (
        <View style={container}>
            <FlatList
                keyExtractor={(product) => product.id}
                data={likedProducts}
                renderItem={_renderItem}
                ListHeaderComponent={<Header leftIcon={backIcon} goBack={_goBack} title='Favorites' />}
            />
        </View>
    )
}

export default Favorites