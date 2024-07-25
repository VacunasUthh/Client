import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Icon } from '@rneui/themed';
import { GlobalContext } from '../../contexts/globalContext';
import ItemVaccine from '../parentAndVaccines/itemVaccine';
import useMonth from '../../hooks/useMonth';
import useChildren from '../../hooks/useChildren';

const Vaccines = ({ route, navigation }) => {
    const [buttonSelected, setButtonSelected] = useState(0);
    const { session } = useContext(GlobalContext);
    const [children, setChildren] = useState(null);
    const { getChildren, children: childrenVaccine } = useChildren();
    const { month, getAllMonths } = useMonth();
    const [filteredMonth, setFilteredMonth] = useState([]);
    const params = route.params;

    useEffect(() => {
        if (params?.children) {
            setChildren(params.children);
        } else {
            getChildren(session?._id);
        }
    }, [params]);

    useEffect(() => {
        if (!params?.children) {
            setChildren(childrenVaccine);
        }
    }, [childrenVaccine]);

    useEffect(() => {
        getAllMonths();
        navigation.setOptions({
            headerTitle: 'Vacunas',
            headerLeft: () => (
                <Button
                    color='transparent'
                    icon={
                        <Icon
                            type='ionicons'
                            name='arrow-back'
                            size={30}
                            color='#FFFFFF'
                        />
                    }
                    onPress={() => navigation.navigate(session?.typeUser === 'trabajador' ? 'parentandvaccines' : 'children')}
                />
            ),
        });
    }, [navigation, session?.typeUser]);

    useEffect(() => {
        // Filtrar meses que tienen al menos una vacuna
        const monthsWithVaccines = month.filter(item => item.vaccines && item.vaccines.length > 0);

        // Ordenar los meses por el número del mes
        const sortedMonths = monthsWithVaccines.sort((a, b) => a.month - b.month);
        
        // Filtrar según el rango seleccionado
        const filterByRange = (months, range) => {
            switch (range) {
                case 0: // '0-6'
                    return months.filter(item => item.month >= 1 && item.month <= 6);
                case 1: // '7-24'
                    return months.filter(item => item.month >= 7 && item.month <= 24);
                case 2: // '36-72'
                    return months.filter(item => item.month >= 36 && item.month <= 72);
                case 3: // 'Completo'
                    return months;
                default:
                    return months;
            }
        };

        setFilteredMonth(filterByRange(sortedMonths, buttonSelected));
    }, [month, buttonSelected]);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10, alignItems: 'center', paddingBottom: 80 }}>
            <View style={{ width: '100%' }}>
                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Button
                        icon={<Image source={require('../../../assets/icons/icons8-filtro-relleno-100.png')} style={{ width: 20, height: 20 }} />}
                        title='Filtros'
                        color='transparent'
                        containerStyle={{ borderRadius: 30 }}
                        titleStyle={{ color: '#48A2E2', fontWeight: 'bold' }}
                    />
                    <Button
                        title='Esquema'
                        icon={<Image source={require('../../../assets/icons/icons8-calendario-100.png')} style={{ width: 20, height: 20 }} />}
                        color='transparent'
                        containerStyle={{ borderRadius: 30 }}
                        titleStyle={{ color: '#48A2E2', fontWeight: 'bold' }}
                    />
                </View>
                <View style={{ width: '100%' }}>
                    <ScrollView horizontal={true} style={{ width: '100%', marginTop: 10 }}>
                        <ButtonGroup
                            buttons={['0-6', '7-24', '36-72', 'Completo']}
                            selectedIndex={buttonSelected}
                            onPress={(value) => setButtonSelected(value)}
                            innerBorderStyle={{ width: 0 }}
                            selectedButtonStyle={{ backgroundColor: '#48A2E2' }}
                            style={{ width: '100%', borderRadius: 30, backgroundColor: '#CCC', marginTop: 10 }}
                            buttonStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: '#48A2E2', borderRadius: 10, width: 70 }}
                            textStyle={{ color: '#48A2E2', fontWeight: 'bold' }}
                            containerStyle={{ marginBottom: 20, gap: 10, width: '100%', backgroundColor: 'transparent', borderWidth: 0, paddingRight: 20 }}
                        />
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                        <Image source={require('../../../assets/icons/icons8-reloj-64.png')} style={{ width: 30, height: 30 }} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Definida</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                        <Image source={require('../../../assets/icons/icons8-atención-96.png')} style={{ width: 30, height: 30 }} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Pendiente {children?.name}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                        <Image source={require('../../../assets/icons/icons8-de-acuerdo-96.png')} style={{ width: 30, height: 30 }} />
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Aplicada</Text>
                    </View>
                </View>
                <View style={{ flex: 1, width: '100%', gap: 20 }}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            scrollEnabled={false}
                            horizontal={false}
                            data={filteredMonth}
                            renderItem={({ item }) => <ItemVaccine m={item} children={children} />}
                            keyExtractor={item => item._id.toString()}
                            numColumns={2}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default React.memo(Vaccines);
