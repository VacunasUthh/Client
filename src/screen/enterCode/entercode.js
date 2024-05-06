import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import BackgroundScreen from '../../components/backgroundScreen'
import { Button, Image, Input } from '@rneui/themed'

const Entercode = ({ navigation }) => {
        return (
                <BackgroundScreen>
                        <View style={{
                                height: '60%', width: '100%',
                                marginTop: 20,
                                //height: '75%', //esto debe ser dinamico
                                backgroundColor: '#FFF',
                                overflow: 'hidden',
                                borderRadius: 20,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                                zIndex: 2,
                                padding: 10,
                                elevation: 2,
                        }}>
                                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, alignItems: 'center', paddingBottom: 80 }}>
                                        <View style={{ width: '100%', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Ingresa el codigo</Text>
                                                <Image source={require('../../../assets/icons/LLave.png')} style={{ width: 130, height: 130 }} />
                                                <Text numberOfLines={3} style={{ paddingHorizontal: 30, textAlign: 'center', fontSize: 16 }}>Hemos enviado un codigo al teléfono que
                                                        nos proporcionaste, por favor de ingresar
                                                        el codigo</Text>
                                                <View style={{ flexDirection: 'row', gap: 20, paddingVertical: 20 }}>
                                                        <TextInput style={{
                                                                width: 45,
                                                                height: 45,
                                                                borderWidth: 2,
                                                                borderColor: '#CCC'
                                                        }} />
                                                        <TextInput style={{
                                                                width: 45,
                                                                height: 45,
                                                                borderWidth: 2,
                                                                borderColor: '#CCC'
                                                        }} />
                                                        <TextInput style={{
                                                                width: 45,
                                                                height: 45,
                                                                borderWidth: 2,
                                                                borderColor: '#CCC'
                                                        }} />
                                                        <TextInput style={{
                                                                width: 45,
                                                                height: 45,
                                                                borderWidth: 2,
                                                                borderColor: '#CCC'
                                                        }} />
                                                </View>
                                                <Button
                                                        onPress={() => navigation.navigate('changepassword')}
                                                        title='Enviar'
                                                        color='#48A2E2'
                                                        containerStyle={{ width: '60%', borderRadius: 20 }}
                                                        titleStyle={{ fontWeight: 'bold' }}
                                                />
                                        </View>
                                </ScrollView>
                        </View>
                </BackgroundScreen>
        )
}

export default Entercode