import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const LoginScreens = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/image/bacgroundLogin.png')} />
            <Text>Chào mừng bạn</Text>
            <Text>Đăng nhập tài khoản</Text>
            <View style={styles.borderEdt}>
                <TextInput
                    placeholder='Nhập email hoặc số điện thoại'
                    placeholderTextColor={'#8B8B8B'} />
            </View>
            <View style={styles.borderEdt}>
                <TextInput
                    placeholder='Nhập email hoặc số điện thoại'
                    placeholderTextColor={'#8B8B8B'} />
                <Image />
            </View>
        </View>
    )
}

export default LoginScreens

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',

    },
    borderEdt: {
        borderRadius: 25,
        borderColor: '#8B8B8B',

    }
})