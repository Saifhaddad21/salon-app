import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from '@/components/ui/card';
import { CreditCard, Trash2 } from 'lucide-react-native';

const CheckoutScreen = () => {
    const navigation = useNavigation();

    const [cart, setCart] = useState([
        { id: '1', name: 'Hair Cut', duration: '35 Mins', price: 10 },
        { id: '2', name: 'Hair Style', duration: '25 Mins', price: 20 },
        { id: '3', name: 'Eyebrows', duration: '10 Mins', price: 5 },
    ]);

    const serviceFee = 2;
    const total = cart.reduce((sum, item) => sum + item.price, 0) + serviceFee;

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Checkout</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Text style={styles.serviceName}>{item.name}</Text>
                        <Text style={styles.price}>{item.price} JDs</Text>
                        <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                            <Trash2 size={18} color="white" />
                        </TouchableOpacity>
                    </Card>
                )}
            />
            <Text style={styles.totalText}>Service fees: {serviceFee} JDs</Text>
            <Text style={styles.totalText}>Total: {total} JDs</Text>

            <View style={styles.paymentMethods}>
                <TouchableOpacity style={styles.paymentButton}>
                    <CreditCard size={20} color="black" />
                    <Text> Pay Cash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentButton}>
                    <Text style={{ fontWeight: "bold" }}> VISA</Text>
                    <Text> Pay By Visa</Text>
                </TouchableOpacity>
            </View>

            <Button onPress={() => navigation.navigate('ConfirmScreen')} style={styles.button}>
                Confirm
            </Button>
        </View>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    card: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderRadius: 10, marginBottom: 10 },
    serviceName: { fontSize: 16 },
    price: { fontSize: 16, fontWeight: 'bold' },
    removeButton: { backgroundColor: 'black', padding: 8, borderRadius: 20 },
    totalText: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
    paymentMethods: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
    paymentButton: { flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 1, borderRadius: 8 },
    button: { backgroundColor: '#C69C6D', padding: 15, borderRadius: 8, textAlign: 'center' },
});
