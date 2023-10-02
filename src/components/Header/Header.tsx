import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { backIcon, likedIcon } from '@Assets'
import styles from './styles'

const Header = (props: IHeader) => {

    const { title, goBack, leftIcon, leftButtonPress } = props
    const { container, textStyle, titleContainer, favoriteContainer, leftIconStyle } = styles

    return (
        <SafeAreaView style={container}>
            {leftIcon &&
                <TouchableOpacity onPress={goBack}>
                    <Image style={leftIconStyle} source={backIcon} />
                </TouchableOpacity>
            }
            <View style={titleContainer}>
                <Text style={textStyle}>{title}</Text>
            </View>
            {leftButtonPress &&
                <TouchableOpacity onPress={leftButtonPress} style={[!leftIcon && favoriteContainer]}>
                    <Image source={likedIcon} />
                </TouchableOpacity>
            }
        </SafeAreaView>
    )
}

export default Header