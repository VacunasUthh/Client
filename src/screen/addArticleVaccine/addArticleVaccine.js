import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, ButtonGroup, Image, Input } from '@rneui/themed'
import useVaccine from '../../hooks/useVaccine'

const AddArticleVaccine = ({ route, navigation }) => {

        const { handleChange, addVaccine, formVaccine, buttonSelected, setButtonSelected, progressBar, setProgressBar } = useVaccine()

        const Circle = () => {
                return (
                        <View style={{ width: 25, height: 25, backgroundColor: '#FFFFFF', borderRadius: 50, borderWidth: 3, alignItems: 'center', justifyContent: 'center', borderColor: '#48A2E2' }}>
                                <Text style={{ width: 10, height: 10, backgroundColor: '#48A2E2', borderRadius: 10 }} />
                        </View>
                )
        }

        return (
                <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, alignItems: 'center', paddingBottom: 80, backgroundColor: '#D8EFEF' }}>
                        <View style={{
                                width: '95%',
                                backgroundColor: '#FFFFFF',
                                shadowColor: "#000",
                                shadowOffset: {
                                        width: 0,
                                        height: 2,
                                },
                                minHeight: '70%',
                                shadowOpacity: 0.23,
                                shadowRadius: 2.62,
                                elevation: 4,
                                marginTop: 10,
                                borderRadius: 10
                        }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Agregar articulo sobre vacunas</Text>
                                <View style={{
                                        position: 'relative',
                                        width: '100%',
                                        flexDirection: 'row',
                                        paddingVertical: 20,
                                        alignItems: 'center',
                                }}>
                                        <TouchableOpacity style={{
                                                flex: 1,
                                                alignItems: 'center',
                                        }} onPress={() => setProgressBar({
                                                ...progressBar,
                                                positionScreen: 0
                                        })}>
                                                <Circle />
                                                <Text>Imagenes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                                flex: 1,
                                                alignItems: 'center',
                                        }} onPress={() => setProgressBar({
                                                ...progressBar,
                                                positionScreen: 1
                                        })}>
                                                <Circle />
                                                <Text numberOfLines={2} style={{ width: 80, textAlign: 'center' }}>Datos generales</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                                flex: 1,
                                                alignItems: 'center',
                                        }} onPress={() => setProgressBar({
                                                ...progressBar,
                                                positionScreen: 2
                                        })}>
                                                <Circle />
                                                <Text numberOfLines={2} style={{ width: 90, textAlign: 'center' }}>Datos Adicionales</Text>
                                        </TouchableOpacity>
                                        <View style={{
                                                position: 'absolute',
                                                width: '70%',
                                                height: 3,
                                                backgroundColor: '#48A2E2',
                                                top: 31,
                                                left: '15%',
                                                zIndex: -1

                                        }} />
                                </View>
                                {progressBar.positionScreen === 0 && (
                                        <>
                                                <View style={{ width: '100%', alignItems: 'center' }}>
                                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Imagenes</Text>
                                                        <Text style={{ paddingVertical: 20 }}>funcionalidad en proceso</Text>
                                                        <Button title='Agregar imagen' containerStyle={{ width: '50%', borderRadius: 20 }} titleStyle={{ fontWeight: 'bold' }} />
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, padding: 20 }}>
                                                        <Button
                                                                title='Atras'
                                                                containerStyle={{ width: '48%', borderRadius: 20 }}
                                                                color='#CCC'
                                                                disabled={true}
                                                        />
                                                        <Button
                                                                title='Siguiente'
                                                                color='#00935E'
                                                                containerStyle={{ width: '48%', borderRadius: 20 }}
                                                                onPress={() => setProgressBar({
                                                                        ...progressBar,
                                                                        positionScreen: 1
                                                                })}
                                                        />
                                                </View>
                                        </>
                                )}

                                {progressBar.positionScreen === 1 && (
                                        <View style={{ width: '100%', alignItems: 'center' }}>
                                                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Datos Generales</Text>
                                                <View style={{ width: '100%', alignItems: 'center' }}>
                                                        <Input
                                                                label='Nombre'
                                                                containerStyle={{ width: '95%' }}
                                                                leftIcon={<Image source={require('../../../assets/icons/icons8-cubes-64.png')} style={{ width: 30, height: 30 }} />}
                                                                placeholder='Nombre de la vacuna'
                                                                onChangeText={(e) => handleChange(e, 'name')}
                                                                value={formVaccine.name}
                                                        />
                                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Gravedad</Text>
                                                        <View style={{ width: 200, alignItems: 'center' }}>
                                                                <ButtonGroup
                                                                        buttons={['Mal', 'Regular', 'Excelente']}
                                                                        selectedIndex={buttonSelected}
                                                                        selectedButtonStyle={{ backgroundColor: buttonSelected === 0 ? '#FF0000' : buttonSelected === 1 ? '#FFA500' : '#008000' }}
                                                                        containerStyle={{ width: '100%', borderRadius: 20, borderWidth: 2 }}
                                                                        onPress={(e) => setButtonSelected(e)}
                                                                />
                                                        </View>
                                                        <Input
                                                                label='Descripcion'
                                                                containerStyle={{ width: '95%' }}
                                                                numberOfLines={8}
                                                                multiline={true}
                                                                leftIcon={<Image source={require('../../../assets/icons/icons8-bloc-100.png')} style={{ width: 30, height: 30 }} />}
                                                                placeholder='Descripcion de la vacuna'
                                                                onChangeText={(e) => handleChange(e, 'description')}
                                                                value={formVaccine.description}
                                                        />
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, padding: 20 }}>
                                                        <Button
                                                                title='Atras'
                                                                containerStyle={{ width: '48%', borderRadius: 20 }}
                                                                color='error'
                                                                onPress={() => setProgressBar({
                                                                        ...progressBar,
                                                                        positionScreen: 0
                                                                })}
                                                        />
                                                        <Button
                                                                title='Siguiente'
                                                                color='#00935E'
                                                                containerStyle={{ width: '48%', borderRadius: 20 }}
                                                                onPress={() => setProgressBar({
                                                                        ...progressBar,
                                                                        positionScreen: 2
                                                                })}
                                                        />
                                                </View>
                                        </View>
                                )}

                                {progressBar.positionScreen === 2 && (
                                        <View style={{ width: '100%', alignItems: 'center' }}>
                                                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Datos Adicionales</Text>
                                                <View style={{ width: '100%', alignItems: 'center' }}>
                                                        <Input
                                                                label='Enfermedad'
                                                                containerStyle={{ width: '95%' }}
                                                                leftIcon={<Image source={require('../../../assets/icons/icons8-virus-100.png')} style={{ width: 30, height: 30 }} />}
                                                                placeholder='Separar por comas si son varias enfermedades'
                                                                onChangeText={(e) => handleChange(e, 'disease')}
                                                                value={formVaccine.disease}
                                                        />
                                                        <Input
                                                                label='Dosis'
                                                                containerStyle={{ width: '95%' }}
                                                                leftIcon={<Image source={require('../../../assets/icons/icons8-dosis-100.png')} style={{ width: 30, height: 30 }} />}
                                                                placeholder='Dosis de la vacuna'
                                                                onChangeText={(e) => handleChange(e, 'dose')}
                                                                value={formVaccine.dose}
                                                        />
                                                        <Input
                                                                label='Aplicación'
                                                                containerStyle={{ width: '95%' }}
                                                                leftIcon={<Image source={require('../../../assets/icons/icons8-cubes-64.png')} style={{ width: 30, height: 30 }} />}
                                                                placeholder='Separar por comas si son varias aplicaciones'
                                                                onChangeText={(e) => handleChange(e, 'application')}
                                                                value={formVaccine.application}
                                                        />
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10, padding: 20 }}>
                                                        <Button
                                                                title='Atras'
                                                                containerStyle={{ width: '48%', borderRadius: 20 }}
                                                                color='error'
                                                                onPress={() => setProgressBar({
                                                                        ...progressBar,
                                                                        positionScreen: 1
                                                                })}
                                                        />
                                                        <Button
                                                                title='Guardar'
                                                                color='#48A2E2'
                                                                containerStyle={{ width: '48%', borderRadius: 20 }}
                                                                onPress={() => addVaccine(navigation)}
                                                        />
                                                </View>
                                        </View>
                                )}
                        </View>
                </ScrollView>
        )
}

export default AddArticleVaccine