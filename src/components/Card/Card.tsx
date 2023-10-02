import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { likeIcon, likedIcon } from '@Assets'
import { useAppDispatch, useAppSelector } from '@Hooks'
import { addCart, likeProduct, unlikeProduct } from '../../redux/slices/dataSlice'
import styles from './styles'
import { BottomSheet } from 'react-native-btr'

interface ICard {
    item: {
        name: string;
        description?: string;
        imageUrl: string;
        price: string;
        shippingMethod: string;
        id: string;
    }
    onPress: () => void
}

const Card = (props: ICard) => {

    const dispatch = useAppDispatch();
    const likedProducts = useAppSelector(state => state.likedProducts)
    const cart = useAppSelector(state => state.cart)

    const { name, imageUrl, price, shippingMethod, id, description } = props.item;
    const { onPress, item } = props;
    const { container, addCartStyle, addedCartStyle, title, titleContainer, detailsButtonContainer, descriptionContainer, imageStyle, addCartButton, bottomContainer, imageContainerStyle } = styles;

    const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false)
    const [added, setAdded] = useState<boolean>(false)

    const isInclude = cart.some((item) => item.id === id)

    useEffect(() => {
        if (!isInclude) setAdded(false)
    }, [cart])

    const toggleBottomNavigationView = () => {
        setBottomSheetVisible(!bottomSheetVisible)
    }

    const isLiked = likedProducts.some((item) => item.id === id)

    const likeButtonPress = () => {
        if (isLiked) {
            dispatch(unlikeProduct(id))
        }
        else {
            dispatch(likeProduct(item))
        }
    }

    const _addtoCart = () => {
        dispatch(addCart(item))
        setAdded(true)
    }

    return (
        <View style={container}>
            <TouchableOpacity onPress={onPress} style={imageContainerStyle}>
                <Image resizeMode='contain' style={imageStyle} source={{ uri: imageUrl }} />
            </TouchableOpacity>
            <View style={titleContainer}>
                <Text style={title}>{name}</Text>
                <Text style={title}>{price}</Text>
                <Text style={title}>{shippingMethod}</Text>
            </View>
            <View style={bottomContainer}>
                {isLiked ?
                    <TouchableOpacity style={detailsButtonContainer} onPress={likeButtonPress}>
                        <Image source={likedIcon} />
                    </TouchableOpacity>
                    : <TouchableOpacity style={detailsButtonContainer} onPress={likeButtonPress}>
                        <Image source={likeIcon} />
                    </TouchableOpacity>
                }
                <TouchableOpacity style={detailsButtonContainer} onPress={toggleBottomNavigationView}>
                    <Text>Details</Text>
                </TouchableOpacity>
                {!added ?
                    <TouchableOpacity onPress={_addtoCart}>
                        <Text style={addCartStyle}>Add to Cart</Text>
                    </TouchableOpacity> :
                    <View style={addCartButton}>
                        <Text style={addedCartStyle}>Added to Cart</Text>
                    </View>
                }
            </View>
            <BottomSheet
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
                visible={bottomSheetVisible}>
                <View style={descriptionContainer}>
                    <Text>{description}</Text>
                </View>
            </BottomSheet>
        </View>
    )
}
export default Card