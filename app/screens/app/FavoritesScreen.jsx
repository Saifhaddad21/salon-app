import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const FavoritesScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Favorites</Text>


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

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 50 },
    header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
});