import { View, Text, ScrollView, Dimensions, Modal, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Icon, Image } from '@rneui/themed'
import { NoImgVaccineIcon } from '../../icons/iconsSvg'
import { GlobalContext } from '../../contexts/globalContext'

const { width } = Dimensions.get('screen')

const VaccineDetail = ({ route, navigation }) => {
    const { session } = useContext(GlobalContext)
    const { vaccine, children ,month} = route.params;

    if (!route.params?.vaccine) {
        return (
            <View>
                <Text>Hubo un error al buscar esta vacuna</Text>
            </View>
        )
    }

    const {_id, name, application, area, contraindications, description, disease, dose, image, images, town } = route.params.vaccine
    const [itemSelected, setItemSelected] = useState({ item: disease, name: 'Enfermedad', image: require('../../../assets/icons/icons8-lupa-100.png') })
    const [isConfirmed, setIsConfirmed] = useState(false) // Estado para confirmar vacunación
    const [modalVisible, setModalVisible] = useState(false) // Estado para el modal

    const handleItemSelected = (item, name, image) => {
        setItemSelected({ item: item, name, image })
    }

    const confirmVaccination = () => {
        setIsConfirmed(true)
        setModalVisible(false)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingBottom: 80 }}>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', aspectRatio: 1 / 1 }}>
                {images.length == 0 ? (
                    <NoImgVaccineIcon size={150} />
                ) : (
                    <Image source={{ uri: images[0] }} style={{ width: width, aspectRatio: 1 / 1 }} />
                )}
            </View>
            <View style={{ width: '100%', padding: 10, justifyContent: 'center', alignItems: 'flex-start' }}>
                <View style={styles.card}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase' }}>{name}</Text>
                            <Image source={require('../../../assets/icons/icons8-de-acuerdo-96.png')} style={{ width: 30, height: 30 }} />
                        </View>
                        <View style={{ width: 100, alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: '#40A46C' }}>Aplicada</Text>
                            <Text style={{ fontSize: 10 }} numberOfLines={3}>Hospital Regional de la Huasteca-08/02/24</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Descripción</Text>
                    <Text>{description}</Text>
                    <View style={{ width: '100%', paddingVertical: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', paddingVertical: 10 }}>Información adicional</Text>
                        <View style={{ flexDirection: 'row', gap: 20, marginBottom: 30 }}>
                            <View style={{ flex: 1, alignItems: 'center', gap: 5 }}>
                                <Image source={require('../../../assets/icons/icons8-enfermedad-100.png')} style={{ width: 40, height: 40 }} />
                                <Button
                                    onPress={() => handleItemSelected(disease, 'Enfermedad', require('../../../assets/icons/icons8-lupa-100.png'))}
                                    title='Enfermedad' icon={<Icon name='plus' type='feather' size={18} color='#48A2E2' />} size='sm' color='#FFFFFF' iconPosition='right' containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: '#48A2E2' }} titleStyle={{ color: '#48A2E2', fontSize: 14 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', gap: 5 }}>
                                <Image source={require('../../../assets/icons/icons8-dosis-100.png')} style={{ width: 40, height: 40 }} />
                                <Button
                                    onPress={() => handleItemSelected([dose], 'Dosis', require('../../../assets/icons/icons8-dosis-100.png'))}
                                    title='Dosis' icon={<Icon name='plus' type='feather' size={18} color='#48A2E2' />} size='sm' color='#FFFFFF' iconPosition='right' containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: '#48A2E2' }} titleStyle={{ color: '#48A2E2', fontSize: 14 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', gap: 5 }}>
                                <Image source={require('../../../assets/icons/icons8-calendario-100.png')} style={{ width: 40, height: 40 }} />
                                <Button
                                    onPress={() => handleItemSelected(application, 'Aplicación', require('../../../assets/icons/icons8-calendario-100.png'))}
                                    title='Aplicación' icon={<Icon name='plus' type='feather' size={18} color='#48A2E2' />} size='sm' color='#FFFFFF' iconPosition='right' containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: '#48A2E2' }} titleStyle={{ color: '#48A2E2', fontSize: 14 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 20 }}>
                            <View style={{ flex: 1, alignItems: 'center', gap: 5 }}>
                                <Image source={require('../../../assets/icons/icons8-familia-hombre-mujer-100.png')} style={{ width: 40, height: 40 }} />
                                <Button
                                    onPress={() => handleItemSelected(town, 'Población', require('../../../assets/icons/icons8-familia-hombre-mujer-100.png'))}
                                    title='Población' icon={<Icon name='plus' type='feather' size={18} color='#48A2E2' />} size='sm' color='#FFFFFF' iconPosition='right' containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: '#48A2E2' }} titleStyle={{ color: '#48A2E2', fontSize: 14 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', gap: 5 }}>
                                <Image source={require('../../../assets/icons/icons8-error-100.png')} style={{ width: 40, height: 40 }} />
                                <Button
                                    onPress={() => handleItemSelected(contraindications, 'Restricciones', require('../../../assets/icons/icons8-error-100.png'))}
                                    title='Restricciones' icon={<Icon name='plus' type='feather' size={18} color='#48A2E2' />} size='sm' color='#FFFFFF' iconPosition='right' containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: '#48A2E2' }} titleStyle={{ color: '#48A2E2', fontSize: 14 }} />
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', gap: 5 }}>
                                <Image source={require('../../../assets/icons/icons8-lupa-100.png')} style={{ width: 40, height: 40 }} />
                                <Button
                                    onPress={() => handleItemSelected(area, 'Area', require('../../../assets/icons/icons8-lupa-100.png'))}
                                    title='Area' icon={<Icon name='plus' type='feather' size={18} color='#48A2E2' />} size='sm' color='#FFFFFF' iconPosition='right' containerStyle={{ borderWidth: 1, borderRadius: 10, borderColor: '#48A2E2' }} titleStyle={{ color: '#48A2E2', fontSize: 14 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{itemSelected?.name}</Text>
                        <Image source={itemSelected?.image} style={{ width: 40, height: 40, marginVertical: 10 }} />
                        <View style={{ width: '100%', gap: 10, justifyContent: 'center', alignItems: 'center' }}>
                            {itemSelected.item && (
                                itemSelected.item.length > 0 ? (
                                    itemSelected.item.map((i, index) => (
                                        <Button key={index} title={i} containerStyle={{ width: '50%', borderWidth: 1, borderRadius: 10, borderColor: '#48A2E2' }} titleStyle={{ color: '#48A2E2' }} color='transparent' />
                                    ))
                                ) : (
                                    <Text>Sin {itemSelected.name}</Text>
                                )
                            )}
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 20, alignItems: 'center' }}>
                        <Button
                            title={isConfirmed ? "Vacunación Confirmada" : "Confirmar Vacunación"}
                            onPress={() => setModalVisible(true)}
                            disabled={isConfirmed}
                            buttonStyle={{
                                backgroundColor: isConfirmed ? '#40A46C' : '#48A2E2',
                                borderRadius: 10,
                                padding: 10,
                            }}
                            titleStyle={{ color: '#FFFFFF', fontSize: 18 }}
                            containerStyle={{ width: '90%', marginVertical: 10 }}
                            icon={isConfirmed && <Icon name='check' type='feather' size={18} color='#FFFFFF' />}
                        />
                    </View>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¿Estás seguro de que deseas confirmar la vacunación?</Text>
                        <Text style={styles.modalText}>id-vacuna: { _id }</Text>
                        <Text style={styles.modalText}>Nombre: {children?._id}</Text>
                        <Text style={styles.modalText}>Mes: {month?.month }</Text>

                        <View style={styles.modalButtons}>
                            <Button
                                title="Cancelar"
                                onPress={() => setModalVisible(false)}
                                buttonStyle={styles.cancelButton}
                                titleStyle={styles.modalButtonText}
                            />
                            <Button
                                title="Confirmar"

                                
                                onPress={confirmVaccination}
                                buttonStyle={styles.confirmButton}
                                titleStyle={styles.modalButtonText}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        gap: 10,
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
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    cancelButton: {
        backgroundColor: '#E74C3C',
        padding: 10,
        borderRadius: 10,
        width: '80%',
    },
    confirmButton: {
        backgroundColor: '#48A2E2',
        padding: 10,
        borderRadius: 10,
        width: '80%',
    },
    modalButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    }
})

export default VaccineDetail
