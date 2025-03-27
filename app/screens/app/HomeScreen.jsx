import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { salonsData } from '../../data/salonsData';

const { width } = Dimensions.get('window');

// Example salon images (you can replace these with real data and images)


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.welcomeTitle}>Welcome</Text>
                <Text style={styles.welcomeName}>Salma!</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search here"
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity style={styles.filterButton}>
                        <Image
                            source={require('../../assets/images/filter.png')}
                            style={styles.filterIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Banner Image */}
            <Image
                source={require('../../assets/images/salon-banner.jpg')}
                style={styles.bannerImage}
            />

            {/* Recent Booking Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Booking</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={salonsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.salonItem}>
                            <Image source={item.image} style={styles.salonImage} />
                            <Text style={styles.salonName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Salons Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Saloons</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={salonsData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.salonItem}>
                            <Image source={item.image} style={styles.salonImage} />
                            <Text style={styles.salonName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/explore.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/booking.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Booking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/notification.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/favorite.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Image source={require('../../assets/images/account.png')} style={styles.navIcon} />
                    <Text style={styles.navText}>Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
    },
    welcomeTitle: {
        fontSize: 24,
        color: '#000',
    },
    welcomeName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        height: 45,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginRight: 10,
    },
    filterButton: {
        width: 45,
        height: 45,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterIcon: {
        width: 20,
        height: 20,
    },
    bannerImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    section: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    viewAll: {
        color: '#666',
        fontSize: 14,
    },
    salonItem: {
        marginRight: 15,
        alignItems: 'center',
    },
    salonImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },
    salonName: {
        fontSize: 14,
        color: '#666',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    navItem: {
        alignItems: 'center',
    },
    navIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
    },
    navText: {
        fontSize: 12,
        color: '#666',
    },
});

export default HomeScreen;
