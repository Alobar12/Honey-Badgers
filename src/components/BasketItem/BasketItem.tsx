import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useAppDispatch } from '@Hooks';
import { deleteCart } from '../../redux/slices/dataSlice';
import styles from './styles';

const BasketItem = (props: ICart) => {

    const dispatch = useAppDispatch()

    const { container, topContainerStyle, imageStyle, decreaseStyle, bottomContainerStyle, increaseStyle, counterButtonsStyle } = styles;

    const { imageUrl, price, name, id } = props

    const [count, setCount] = useState<number>(1)

    const increase = () => {
        setCount(count => count + 1)
    }

    const decrease = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }
        else { dispatch(deleteCart(id)) }
    }

    return (
        <View style={container}>
            <View style={topContainerStyle}>
                <View>
                    <Image resizeMode='contain' style={imageStyle} source={{ uri: imageUrl }} />
                </View>
                <View>
                    <View style={counterButtonsStyle}>
                        <TouchableOpacity onPress={increase} >
                            <Text style={increaseStyle}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={decrease}>
                            <Text style={decreaseStyle}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={bottomContainerStyle}>
                <Text>{name}</Text>
                <Text>{count + "*" + parseFloat(price)}</Text>
            </View>
        </View>
    )
}

export default BasketItem