import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, StyleSheet, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

const dates = [
    { day: 'Wed', date: '25' },
    { day: 'Thu', date: '26', selected: true },
    { day: 'Fri', date: '27' },
    { day: 'Sat', date: '28' },
    { day: 'Sun', date: '29' },
    { day: 'Mon', date: '30' },
];

const times = [
    '4:00PM', '4:30PM', '5:00PM', '5:30PM',
    '6:00PM', '4:30PM', '4:30PM', '5:00PM',
    '4:00PM', '4:30PM', '5:00PM', '5:30PM',
];

const AddCartScreen = () => {
    const [selectedDate, setSelectedDate] = useState('26');
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedBeautician, setSelectedBeautician] = useState(null);

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <TouchableOpacity style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.header}>Beauticians Available (3)</Text>

            {/* Dropdown Picker */}
            <View style={styles.dropdownContainer}>
                <Text style={styles.label}>Select Your Data</Text>
                <View style={styles.pickerWrapper}>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedBeautician(value)}
                        items={[
                            { label: 'Beautician 1', value: 'beautician1' },
                            { label: 'Beautician 2', value: 'beautician2' },
                            { label: 'Beautician 3', value: 'beautician3' },
                        ]}
                        placeholder={{ label: 'Select Beauticians Available', value: null }}
                        style={{
                            inputAndroid: styles.pickerText,
                            inputIOS: styles.pickerText,
                        }}
                    />
                </View>
            </View>

            {/* Date Picker */}
            <View style={styles.dateContainer}>
                <Ionicons name="chevron-back" size={20} color="black" />
                <Text style={styles.dateTitle}>June, 2025</Text>
                <Ionicons name="chevron-forward" size={20} color="black" />
            </View>
            <FlatList
                horizontal
                data={dates}
                keyExtractor={(item) => item.date}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.dateBox,
                            item.date === selectedDate && styles.selectedDateBox,
                        ]}
                        onPress={() => setSelectedDate(item.date)}
                    >
                        <Text style={styles.dateText}>{item.date}</Text>
                        <Text style={styles.dayText}>{item.day}</Text>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: wp('5%') }}
            />

            {/* Available Times */}
            <Text style={styles.availableText}>Available Times</Text>
            <View style={styles.timeContainer}>
                {times.map((time, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.timeSlot,
                            selectedTime === time && styles.selectedTimeSlot,
                        ]}
                        onPress={() => setSelectedTime(time)}
                    >
                        <Text style={selectedTime === time ? styles.selectedTimeText : styles.timeText}>
                            {time}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.cartButtonText}>Add To Cart</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: wp('5%') },
    backButton: { position: 'absolute', top: 20, left: 10 },
    header: { fontSize: wp('5%'), fontWeight: 'bold', textAlign: 'center', marginVertical: hp('5%') },
    dropdownContainer: { marginVertical: hp('2%') },
    label: { fontSize: wp('4%'), fontWeight: 'bold', marginBottom: hp('1%') },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: hp('6%'),
        justifyContent: 'center',
    },
    pickerText: { fontSize: wp('4%'), color: 'black' },
    dateContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: hp('2%') },
    dateTitle: { fontSize: wp('4.5%'), fontWeight: 'bold' },
    dateBox: {
        backgroundColor: '#f9f9f9',
        padding: wp('3%'),
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: wp('1%'),
    },
    selectedDateBox: { backgroundColor: '#E5C1A1' },
    dateText: { fontSize: wp('4.5%'), fontWeight: 'bold' },
    dayText: { fontSize: wp('3.5%'), color: 'gray' },
    availableText: { fontSize: wp('4.5%'), fontWeight: 'bold', marginVertical: hp('2%') },
    timeContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
    timeSlot: {
        backgroundColor: '#f9f9f9',
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('4%'),
        borderRadius: 10,
        margin: wp('1%'),
    },
    selectedTimeSlot: { backgroundColor: '#E5C1A1' },
    timeText: { fontSize: wp('4%'), fontWeight: 'bold', color: '#000' },
    selectedTimeText: { fontSize: wp('4%'), fontWeight: 'bold', color: '#fff' },
    cartButton: {
        backgroundColor: '#E5C1A1',
        padding: wp('4%'),
        borderRadius: 10,
        alignItems: 'center',
        marginTop: hp('3%'),
    },
    cartButtonText: { fontSize: wp('4.5%'), fontWeight: 'bold', color: '#fff' },
});

export default AddCartScreen;
