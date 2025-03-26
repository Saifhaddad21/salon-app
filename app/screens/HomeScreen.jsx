// import React from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// // Example salon images (you can replace these with real data and images)
// const salonsData = [
//     { id: '1', name: 'Salon 1', image: require('../assets/images/Ellipse1.png') },
//     { id: '2', name: 'Salon 2', image: require('../assets/images/Ellipse2.png') },
//     { id: '3', name: 'Salon 3', image: require('../assets/images/Ellipse3.png') },
//     // Add more salon objects here
// ];

// const HomeScreen = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <Text style={styles.welcomeText}>Welcome, Salma!</Text>
//                 <TextInput
//                     style={styles.searchInput}
//                     placeholder="Search here"
//                     placeholderTextColor="#aaa"
//                 />
//             </View>

//             {/* Recent Booking Section */}
//             <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Recent Booking</Text>
//                 <FlatList
//                     horizontal
//                     data={salonsData}  // Example data
//                     keyExtractor={(item) => item.id}
//                     renderItem={({ item }) => (
//                         <View style={styles.recentItem}>
//                             <Image source={item.image} style={styles.recentImage} />
//                             <Text style={styles.recentName}>{item.name}</Text>
//                         </View>
//                     )}
//                 />
//             </View>

//             {/* Salons Section */}
//             <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>Salons</Text>
//                 <FlatList
//                     horizontal
//                     data={salonsData}  // Example data
//                     keyExtractor={(item) => item.id}
//                     renderItem={({ item }) => (
//                         <View style={styles.salonItem}>
//                             <Image source={item.image} style={styles.salonImage} />
//                             <Text style={styles.salonName}>{item.name}</Text>
//                         </View>
//                     )}
//                 />
//             </View>

//             {/* Bottom Navigation */}
//             <View style={styles.bottomNav}>
//                 <TouchableOpacity style={styles.navItem}>
//                     <Text style={styles.navText}>Explore</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.navItem}>
//                     <Text style={styles.navText}>Booking</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.navItem}>
//                     <Text style={styles.navText}>Notifications</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.navItem}>
//                     <Text style={styles.navText}>Favorites</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.navItem}>
//                     <Text style={styles.navText}>Account</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 30,
//         backgroundColor: '#fff',
//         paddingHorizontal: 16,
//     },
//     header: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     welcomeText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     searchInput: {
//         width: '100%',
//         height: 40,
//         backgroundColor: '#f2f2f2',
//         borderRadius: 8,
//         paddingHorizontal: 10,
//         marginTop: 10,
//     },
//     section: {
//         marginBottom: 30,
//     },
//     sectionTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     recentItem: {
//         marginRight: 10,
//         alignItems: 'center',
//     },
//     recentImage: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginBottom: 5,
//     },
//     recentName: {
//         fontSize: 14,
//         color: '#555',
//     },
//     salonItem: {
//         marginRight: 10,
//         alignItems: 'center',
//     },
//     salonImage: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginBottom: 5,
//     },
//     salonName: {
//         fontSize: 14,
//         color: '#555',
//     },
//     bottomNav: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         backgroundColor: '#fff',
//         paddingVertical: 10,
//         borderTopWidth: 1,
//         borderTopColor: '#ddd',
//     },
//     navItem: {
//         alignItems: 'center',
//     },
//     navText: {
//         fontSize: 14,
//         color: '#555',
//     },
// });

// export default HomeScreen;
