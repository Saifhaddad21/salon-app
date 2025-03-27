import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Search, Filter, MapPin } from 'lucide-react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const services = ['Hair Color', 'Makeup', 'Nails', 'Spa', 'Hairstyle', 'Facial Makeup', 'Short Haircut'];
const locations = ['Doha', 'Lusail', 'Alkhor', 'Dukhan', 'Umm Salal'];
const priceRanges = ['$0 - $100', '$100 - $250', '$250 - $500'];

const ExploreScreen = () => {
    const [selectedService, setSelectedService] = useState('Nails');
    const [selectedLocation, setSelectedLocation] = useState('Umm Salal');
    const [selectedSort, setSelectedSort] = useState('Cost Low to High');
    const [selectedPrice, setSelectedPrice] = useState('$0 - $100');

    return (
        <ScrollView style={styles.container}>
            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Search size={20} color="#777" />
                <TextInput placeholder="Search here" style={styles.searchInput} />
                <Filter size={20} color="#777" />
            </View>

            {/* Services */}
            <Text style={styles.sectionTitle}>Services</Text>
            <View style={styles.filterContainer}>
                {services.map((service) => (
                    <TouchableOpacity
                        key={service}
                        style={[styles.filterButton, selectedService === service && styles.selectedButton]}
                        onPress={() => setSelectedService(service)}
                    >
                        <Text style={[styles.filterText, selectedService === service && styles.selectedText]}>{service}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Address */}
            <Text style={styles.sectionTitle}>Address</Text>
            <View style={styles.filterContainer}>
                {locations.map((location) => (
                    <TouchableOpacity
                        key={location}
                        style={[styles.filterButton, selectedLocation === location && styles.selectedButton]}
                        onPress={() => setSelectedLocation(location)}
                    >
                        <MapPin size={14} color={selectedLocation === location ? '#fff' : '#000'} />
                        <Text style={[styles.filterText, selectedLocation === location && styles.selectedText]}>{location}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Sorting Options */}
            <Text style={styles.sectionTitle}>Sort By</Text>
            <View style={styles.sortContainer}>
                {['Most Popular', 'Customer Review', 'Cost Low to High', 'Cost High to Low'].map((sort) => (
                    <TouchableOpacity key={sort} style={styles.sortItem} onPress={() => setSelectedSort(sort)}>
                        <Text style={styles.sortText}>{sort}</Text>
                        <View style={[styles.checkbox, selectedSort === sort && styles.checkedBox]} />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Price Range */}
            <Text style={styles.sectionTitle}>Price</Text>
            <View style={styles.filterContainer}>
                {priceRanges.map((price) => (
                    <TouchableOpacity
                        key={price}
                        style={[styles.filterButton, selectedPrice === price && styles.selectedButton]}
                        onPress={() => setSelectedPrice(price)}
                    >
                        <Text style={[styles.filterText, selectedPrice === price && styles.selectedText]}>{price}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: wp(5), backgroundColor: '#fff' },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: wp(3),
        borderRadius: wp(2),
        marginBottom: wp(4),
    },
    searchInput: { flex: 1, fontSize: wp(4), marginLeft: wp(2) },
    sectionTitle: { fontSize: wp(5), fontWeight: 'bold', marginTop: wp(4), marginBottom: wp(2) },
    filterContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: wp(2) },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp(4),
        paddingVertical: wp(2),
        backgroundColor: '#f5f5f5',
        borderRadius: wp(3),
    },
    selectedButton: { backgroundColor: '#B88E2F' },
    filterText: { fontSize: wp(4), marginLeft: wp(1) },
    selectedText: { color: '#fff' },
    sortContainer: { marginBottom: wp(4) },
    sortItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: wp(3),
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    sortText: { fontSize: wp(4) },
    checkbox: { width: wp(4), height: wp(4), borderWidth: 1, borderColor: '#777', borderRadius: wp(1) },
    checkedBox: { backgroundColor: '#B88E2F', borderColor: '#B88E2F' },
});

export default ExploreScreen;
