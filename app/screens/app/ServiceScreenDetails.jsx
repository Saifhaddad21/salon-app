import React, { useState } from 'react';
import {
    View, Text, Image, TouchableOpacity, FlatList, Modal, StyleSheet, ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

const services = [
    { id: '1', name: 'Short Haircuts', time: '20 Mins', price: '25 JDs' },
    { id: '2', name: 'Medium Haircuts', time: '35 Mins', price: '40 JDs' },
    { id: '3', name: 'Long Haircuts', time: '60 Mins', price: '55 JDs' },
];

const ServiceScreenDetails = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView style={styles.container}>
            {/* Top Section */}
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/images2.png')} style={styles.image} />
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoriteButton}>
                    <Ionicons name="heart-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Salon Info */}
            <View style={styles.salonInfo}>
                <Text style={styles.salonName}>Hala Ahmad</Text>
                <Text style={styles.salonDetails}>Hair Salon and more</Text>
                <Text style={styles.rating}>⭐ 4.5 (212 Reviews)</Text>
            </View>

            {/* Service Categories */}
            <View style={styles.categories}>
                <FlatList
                    horizontal
                    data={['hairstyle', 'hairstyle', 'hairstyle', 'hairstyle']}
                    renderItem={({ item }) => <Text style={styles.categoryItem}>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Service List */}
            <TouchableOpacity style={styles.serviceBox} onPress={() => setModalVisible(true)}>
                <Text style={styles.serviceText}>Hair Cut</Text>
                <Text style={styles.servicePrice}>Details</Text>
            </TouchableOpacity>

            {/* Modal for Details */}
            <Modal visible={modalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>Details Hair Cut</Text>
                        {services.map((item) => (
                            <View key={item.id} style={styles.modalItem}>
                                <Text style={styles.modalText}>{item.name}{'\n'}<Text style={styles.modalTime}>{item.time}</Text></Text>
                                <Text style={styles.modalPrice}>{item.price}</Text>
                                <TouchableOpacity style={styles.selectButton}>
                                    <Text style={styles.selectText}>Select</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                        <TouchableOpacity style={styles.bookButton}>
                            <Text style={styles.bookText}>Book now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    imageContainer: { width: '100%', height: hp('30%'), position: 'relative' },
    image: { width: '100%', height: '100%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
    backButton: { position: 'absolute', top: 40, left: 20 },
    favoriteButton: { position: 'absolute', top: 40, right: 20 },
    salonInfo: { alignItems: 'center', marginVertical: hp('2%') },
    salonName: { fontSize: wp('5%'), fontWeight: 'bold' },
    salonDetails: { color: 'gray', fontSize: wp('4%') },
    rating: { fontSize: wp('4%'), marginTop: 5 },
    categories: { flexDirection: 'row', marginHorizontal: wp('5%'), marginBottom: hp('2%') },
    categoryItem: { backgroundColor: '#E5C1A1', padding: 10, borderRadius: 15, marginRight: 10 },
    serviceBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: wp('5%'),
        backgroundColor: '#f9f9f9',
        marginHorizontal: wp('5%'),
        borderRadius: 10,
    },
    serviceText: { fontSize: wp('4.5%'), fontWeight: 'bold' },
    servicePrice: { fontSize: wp('4.5%'), color: 'brown' },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: wp('5%'),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    closeButton: { position: 'absolute', right: 20, top: 20 },
    modalTitle: { fontSize: wp('5%'), fontWeight: 'bold', textAlign: 'center', marginBottom: hp('2%') },
    modalItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: hp('1%') },
    modalText: { fontSize: wp('4%'), fontWeight: 'bold' },
    modalTime: { color: 'gray', fontSize: wp('3.5%') },
    modalPrice: { fontSize: wp('4%'), fontWeight: 'bold' },
    selectButton: { backgroundColor: '#fff', borderWidth: 1, borderColor: 'black', padding: 5, borderRadius: 10 },
    selectText: { color: 'black' },
    bookButton: { backgroundColor: '#E5C1A1', padding: wp('4%'), borderRadius: 10, alignItems: 'center', marginTop: hp('3%') },
    bookText: { fontSize: wp('4.5%'), fontWeight: 'bold', color: '#fff' },
});

export default ServiceScreenDetails;
