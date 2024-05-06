import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BackgroundScreen from '../../components/backgroundScreen'
import { Button, Image, Input } from '@rneui/themed'

const ChangePassword = ({ navigation }) => {
        
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
                                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, alignItems: 'center' }}>
                                        <View style={{ width: '100%', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 10 }}>Crear una nueva contraseña</Text>
                                                <Image source={require('../../../assets/icons/lockHidden.png')} style={{ width: 200, height: 70, marginVertical: 20 }} />
                                                <Text numberOfLines={2} style={{ paddingHorizontal: 20, textAlign: 'center', fontSize: 16 }}>Crea una nueva contraseña para
                                                        poder acceder a tu cuenta</Text>
                                                <Input
                                                        leftIcon={<Image source={require('../../../assets/icons/icons8-candado-100.png')} style={{ width: 30, height: 30 }} />}
                                                        label='Constraseña'
                                                        keyboardType='email-address'
                                                />
                                                <Input
                                                        leftIcon={<Image source={require('../../../assets/icons/icons8-candado-100.png')} style={{ width: 30, height: 30 }} />}
                                                        label='Confirmar contraseña'
                                                        keyboardType='email-address'
                                                />
                                                <Button
                                                        onPress={() => navigation.navigate('login')}
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

export default ChangePassword