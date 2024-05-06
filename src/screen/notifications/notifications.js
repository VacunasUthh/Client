import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Button, Image } from '@rneui/themed'

const Notifications = ({ route, navigation }) => {
        return (
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, alignItems: 'center', paddingBottom: 80 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Notifications</Text>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Button
                                        containerStyle={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}
                                        icon={<Image source={require('../../../assets/icons/icons8-opciones-para-ordenar-100.png')}
                                                style={{ width: 30, height: 30 }} />}
                                        title='Ordenar'
                                        color='transparent'
                                        titleStyle={{ fontSize: 18, fontWeight: 'bold', color: '#48A2E2', marginLeft: 10 }}
                                />
                                <Button
                                        containerStyle={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
                                        icon={<Image source={require('../../../assets/icons/icons8-ajustes-100.png')}
                                                style={{ width: 30, height: 30 }} />}
                                        title='Ajustes'
                                        color='transparent'
                                        onPress={() => navigation.navigate('notifysettings')}
                                        titleStyle={{ fontSize: 18, fontWeight: 'bold', color: '#48A2E2', marginLeft: 10 }}
                                />
                        </View>
                        <View style={{ width: '100%' }}>
                                <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10,
                                        backgroundColor: '#FFFFFF',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                                width: 0,
                                                height: 2,
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,
                                        elevation: 4,
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        overflow: 'hidden'
                                }}>
                                        <View style={{ width: 120, alignItems: 'center' }}>
                                                <Image source={require('../../../assets/HepatitisB.jpg')} style={{ width: 100, height: 100 }} />
                                        </View>
                                        <View style={{ flex: 1, width: '100%' }}>
                                                <View style={{ flexDirection: 'row', width: '100%', paddingRight: 10 }}>
                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Para: </Text>
                                                        <Text numberOfLines={1} style={{ fontSize: 18, color: '#48A2E2' }}>Johana Hernandez Hernan</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                                                        <View style={{ flex: 1 }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Vacuna: </Text>
                                                                        <Text style={{ fontSize: 18, color: '#48A2E2' }}>Hepatitis B</Text>
                                                                </View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mes: </Text>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#48A2E2' }}>0</Text>
                                                                </View>
                                                        </View>
                                                        <View style={{ width: 50, height: 50 }}>
                                                                <Image source={require('../../../assets/icons/icons8-campana-96(1).png')} style={{ width: 50, height: 50 }} />
                                                        </View>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tiempo restante: </Text>
                                                        <Text style={{ fontSize: 18, color: '#48A2E2' }}>1 semana</Text>
                                                </View>
                                        </View>
                                </View>
                                <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10,
                                        backgroundColor: '#FFFFFF',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                                width: 0,
                                                height: 2,
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,
                                        elevation: 4,
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        overflow: 'hidden'
                                }}>
                                        <View style={{ width: 120, alignItems: 'center' }}>
                                                <Image source={require('../../../assets/HepatitisB.jpg')} style={{ width: 100, height: 100 }} />
                                        </View>
                                        <View style={{ flex: 1, width: '100%' }}>
                                                <View style={{ flexDirection: 'row', width: '100%', paddingRight: 10 }}>
                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Para: </Text>
                                                        <Text numberOfLines={1} style={{ fontSize: 18, color: '#48A2E2' }}>Johana Hernandez Hernan</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                                                        <View style={{ flex: 1 }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Vacuna: </Text>
                                                                        <Text style={{ fontSize: 18, color: '#48A2E2' }}>Hepatitis B</Text>
                                                                </View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mes: </Text>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#48A2E2' }}>0</Text>
                                                                </View>
                                                        </View>
                                                        <View style={{ width: 50, height: 50 }}>
                                                                <Image source={require('../../../assets/icons/icons8-campana-96(1).png')} style={{ width: 50, height: 50 }} />
                                                        </View>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tiempo restante: </Text>
                                                        <Text style={{ fontSize: 18, color: '#48A2E2' }}>1 semana</Text>
                                                </View>
                                        </View>
                                </View>
                                <View style={{
                                        flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10,
                                        backgroundColor: '#FFFFFF',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                                width: 0,
                                                height: 2,
                                        },
                                        shadowOpacity: 0.23,
                                        shadowRadius: 2.62,
                                        elevation: 4,
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        overflow: 'hidden'
                                }}>
                                        <View style={{ width: 120, alignItems: 'center' }}>
                                                <Image source={require('../../../assets/HepatitisB.jpg')} style={{ width: 100, height: 100 }} />
                                        </View>
                                        <View style={{ flex: 1, width: '100%' }}>
                                                <View style={{ flexDirection: 'row', width: '100%', paddingRight: 10 }}>
                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Para: </Text>
                                                        <Text numberOfLines={1} style={{ fontSize: 18, color: '#48A2E2' }}>Johana Hernandez Hernan</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                                                        <View style={{ flex: 1 }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Vacuna: </Text>
                                                                        <Text style={{ fontSize: 18, color: '#48A2E2' }}>Hepatitis B</Text>
                                                                </View>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mes: </Text>
                                                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#48A2E2' }}>0</Text>
                                                                </View>
                                                        </View>
                                                        <View style={{ width: 50, height: 50 }}>
                                                                <Image source={require('../../../assets/icons/icons8-campana-96(1).png')} style={{ width: 50, height: 50 }} />
                                                        </View>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tiempo restante: </Text>
                                                        <Text style={{ fontSize: 18, color: '#48A2E2' }}>1 semana</Text>
                                                </View>
                                        </View>
                                </View>
                        </View>
                </ScrollView>
        )
}

export default Notifications