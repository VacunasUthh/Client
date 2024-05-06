import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, ButtonGroup, Icon, Image, SearchBar } from '@rneui/themed'
import Card from './card'
import useChildren from '../../hooks/useChildren'
import { GlobalContext } from '../../contexts/globalContext'

const Children = ({ route, navigation }) => {

        const { session } = useContext(GlobalContext)
        const { children, getChildren, loading } = useChildren()

        useEffect(() => {
                const unsubscribe = navigation.addListener('focus', () => {
                        if (session) {
                                getChildren(session?._id)
                        }
                });
                return unsubscribe;
        }, [navigation])

        const [buttonSelected, setButtonSelected] = useState(0)

        return (
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, alignItems: 'center', paddingBottom: 80 }}>
                        <SearchBar
                                placeholder="Search"
                                containerStyle={{ width: '100%', backgroundColor: 'transparent', borderWidth: 0 }}
                                style={{ backgroundColor: 'white', borderWidth: 0 }}
                                inputStyle={{ backgroundColor: 'white', borderRadius: 10, backgroundColor: 'white' }}
                                searchIcon={{ size: 24, color: 'black', backgroundColor: 'white' }}
                                clearIcon={{ size: 24, color: 'black' }}
                                lightTheme
                                round
                                placeholderTextColor="black"
                        />
                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Button
                                        icon={<Image source={require('../../../assets/icons/icons8-filtro-relleno-100.png')} style={{ width: 25, height: 25 }} />}
                                        title='Filtros'
                                        color='transparent'
                                        titleStyle={{ color: '#48A2E2', fontWeight: 'bold', fontSize: 18 }}
                                />
                                <Button
                                        title='Esquema'
                                        color='transparent'
                                        //onPress={() => navigation.navigate('scheme')}
                                        icon={<Image source={require('../../../assets/icons/icons8-calendario-100.png')} style={{ width: 25, height: 25 }} />}
                                        titleStyle={{ color: '#48A2E2', fontWeight: 'bold', fontSize: 18 }}
                                />
                        </View>
                        <View style={{ width: '100%' }}>
                                <ButtonGroup
                                        buttons={['Todo', 'Nombre', 'Edad', 'Estado']}
                                        selectedIndex={buttonSelected}
                                        onPress={(value) => {
                                                setButtonSelected(value);
                                        }}
                                        innerBorderStyle={{ width: 0 }}
                                        selectedButtonStyle={{ backgroundColor: '#48A2E2' }}
                                        style={{ width: '100%', borderRadius: 30, backgroundColor: '#CCC', marginTop: 10 }}
                                        buttonStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#48A2E2', borderRadius: 10 }}
                                        textStyle={{ color: '#48A2E2' }}
                                        containerStyle={{ marginBottom: 20, gap: 10, backgroundColor: 'transparent', borderWidth: 0 }}
                                />
                        </View>
                        <View style={{ width: '100%', gap: 10 }}>
                                {loading ? (
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <ActivityIndicator size='large' color='#000' />
                                        </View>
                                ) : (
                                        children.length > 0 ? (
                                                children.map(children => <Card key={children._id} children={children} navigation={navigation} />)
                                        ) : (
                                                <View style={{ width: '100%', height: 200, alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text>No hay hijos registrados</Text>
                                                </View>
                                        )
                                )}
                        </View>
                        <View>
                                <Button
                                        onPress={() => navigation.navigate('addchildren')}
                                        title='Agregar hijo'
                                        color='transparent'
                                        containerStyle={{ backgroundColor: '#48A2E2', borderRadius: 20, paddingHorizontal: 20 }}
                                />
                        </View>
                </ScrollView>
        )
}

export default Children