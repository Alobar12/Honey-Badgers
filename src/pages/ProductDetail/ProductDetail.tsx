import React from 'react'
import { View, Text } from 'react-native'
import { Header } from "@Components"
import { NavigationProps } from 'src/types/navigation'
import styles from './styles'

const ProductDetail: React.FC<NavigationProps> = ({ navigation, route }) => {

    const { description } = route.params.item
    const { container, descriptionContainer, descriptionStyle } = styles;

    const _goBack = () => {
        navigation.goBack()
    }

    const _leftButtonPress = () => {
        navigation.navigate("Favorites")
    }

    return (
        <View style={container}>
            <Header leftButtonPress={_leftButtonPress} leftIcon goBack={_goBack} title='Product Detail' />
            <View style={descriptionContainer}>
                <Text style={descriptionStyle}>{description}</Text>
            </View>
        </View>
    )
}

export default ProductDetail