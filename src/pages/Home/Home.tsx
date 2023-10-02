import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text, RefreshControl } from 'react-native'
import { Card, Header } from '@Components'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { useAppDispatch, useAppSelector } from '@Hooks'
import { getProducts, sortData } from '../../redux/slices/dataSlice'
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'
import { BottomSheet } from 'react-native-btr'

const Home = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {

    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.loading)
    const data = useAppSelector((state) => state.data)
    const error = useAppSelector((state) => state.error)

    const { container, loadingContainer, locationButton, sortContainer, descStyle, ascStyle, bottomSheetStyle, locationContainer, locationTitle } = styles

    const [latitude, setLatitude] = useState<string | null>("");
    const [longitude, setLongitude] = useState<string | null>("")
    const [locationMessage, setLocationMessage] = useState<string>("")
    const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false)
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        getLocationFromStorage()
        dispatch(getProducts())
    }, [])

    const getLocationFromStorage = async () => {
        const latitudeFromStorage = await AsyncStorage.getItem("latitude")
        setLatitude(latitudeFromStorage)
        const longitudeFromStorage = await AsyncStorage.getItem("longitude")
        setLongitude(longitudeFromStorage)
    }

    const goToProductDetail = (item: IProducts["item"]) => {
        navigation.navigate("ProductDetail", { item })
    }

    const _renderItem = ({ item }: { item: IProducts["item"] }) => {
        const { id } = item
        return (
            <Card onPress={() => { goToProductDetail(item) }} key={id} item={item} />
        );
    };

    const toggleBottomNavigationView = () => {
        setBottomSheetVisible(!bottomSheetVisible)
    }

    const getLocationAsync = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                return;
            }
            setBottomSheetVisible(true)
            const userLocation = await Location.getCurrentPositionAsync({});
            setLongitude(JSON.stringify(userLocation.coords.longitude));
            setLatitude(JSON.stringify(userLocation.coords.latitude));
            await AsyncStorage.setItem("latitude", JSON.stringify(userLocation.coords.latitude))
            await AsyncStorage.setItem("longitude", JSON.stringify(userLocation.coords.longitude))
            setLocationMessage("Location received")
        } catch (error) {
            setLocationMessage('Could not get location')
        }
    }

    const _leftButtonPress = () => {
        navigation.navigate("Favorites")
    }

    const sortAsc = () => {
        dispatch(sortData("asc"))
    }

    const sortDesc = () => {
        dispatch(sortData("desc"))
    }

    const _goBack = () => {
        navigation.goBack()
    }

    const onRefresh = () => {
        setRefreshing(true);
        dispatch(getProducts())
        setRefreshing(false);
    };

    const _listHeaderComponent = () => {
        return (
            <View>
                <Header
                    leftButtonPress={_leftButtonPress}
                    goBack={_goBack}
                    title='Home' />
                <View style={locationContainer}>
                    <TouchableOpacity style={locationButton} onPress={getLocationAsync}>
                        <Text style={locationTitle}>Get Location</Text>
                    </TouchableOpacity>
                </View>
                <View style={sortContainer}>
                    <TouchableOpacity style={descStyle} onPress={sortDesc}>
                        <Text>Desc</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ascStyle} onPress={sortAsc}>
                        <Text>Asc</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={container}>
            {!loading ?
                <FlatList
                    ListHeaderComponent={_listHeaderComponent}
                    renderItem={_renderItem}
                    data={data}
                    keyExtractor={(product) => product.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    } />
                : <ActivityIndicator size="large" color={'rgb(65,57,132)'} />
            }
            {error &&
                <View style={loadingContainer}>
                    <ActivityIndicator size="large" color={'rgb(230,0,0)'} />
                </View>
            }
            <BottomSheet
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
                visible={bottomSheetVisible}>
                <View style={bottomSheetStyle}>
                    {latitude ? <Text style={locationTitle}>Latitude:{latitude}</Text> : <ActivityIndicator size="small" color={'rgb(230,0,0)'} />}
                    {longitude ? <Text style={locationTitle}>Longitude:{longitude}</Text> : <ActivityIndicator size="small" color={'rgb(230,0,0)'} />}
                    <Text style={locationTitle}>{locationMessage}</Text>
                </View>
            </BottomSheet>
        </View>
    )
}

export default Home