import React, { useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { NavigationProp, ParamListBase, CommonActions } from '@react-navigation/native'
import { loginUser } from '../../services/auth'
import styles from './styles'

const Login = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {

  const passwordInput = useRef<TextInput>(null)

  const { container, usernameStyle, buttonStyle, buttonContainer, buttonTitle } = styles

  const [username, setusername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const _onChangeusername = (text: string) => {
    setusername(text)
  }

  const _onChangePassword = (text: string) => {
    setPassword(text)
  }

  const _onPress = async () => {
    const isLoggedin = await loginUser(username, password)
    if (isLoggedin) {
      navigation.dispatch({
        ...CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'TabBar',
            },
          ],
        }),
      });
    }
  }

  const handlePasswordSubmit = () => {
    passwordInput.current?.focus()
  }

  return (
    <View style={container}>
      <TextInput returnKeyType="next" onSubmitEditing={handlePasswordSubmit} style={usernameStyle} value={username} onChangeText={_onChangeusername} placeholder='username' />
      <TextInput returnKeyType='done' onSubmitEditing={_onPress} secureTextEntry ref={passwordInput} style={usernameStyle} value={password} onChangeText={_onChangePassword} placeholder='Password' />
      <View style={buttonContainer}>
        <TouchableOpacity onPress={_onPress} style={buttonStyle}>
          <Text style={buttonTitle}>Giriş</Text>
        </TouchableOpacity>
      </View>
      <Text>username: kullanici, password: sifre</Text>
    </View>
  )
}

export default Login