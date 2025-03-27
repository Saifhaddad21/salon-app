import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Modal, TextInput } from 'react-native';

const MainAccount = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Account</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>Heba Ahmad</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ChangeLanguage')}>
                <Text style={{ marginTop: 20 }}>Language: English</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 10 }}>Privacy Policy</Text>
            <Text style={{ marginTop: 10 }}>Notifications</Text>
            <Switch value={isEnabled} onValueChange={setIsEnabled} />
            <TouchableOpacity onPress={() => navigation.navigate('DeleteAccount')}>
                <Text style={{ color: 'red', marginTop: 20 }}>Delete your Account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{ color: 'blue', marginTop: 10 }}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const DeleteAccount = ({ navigation }) => {
    return (
        <Modal visible animationType="slide">
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Are you sure you want to delete your account?</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{ padding: 10, backgroundColor: 'gray', marginRight: 10 }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ padding: 10, backgroundColor: 'red', color: 'white' }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const ChangeLanguage = ({ navigation }) => {
    const [language, setLanguage] = useState('English');
    return (
        <Modal visible animationType="slide">
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Change Your Language</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 10, marginTop: 20, width: '80%' }}
                    value={language}
                    onChangeText={setLanguage}
                />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ padding: 10, backgroundColor: 'brown', color: 'white', marginTop: 20 }}>Save</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export { MainAccount, DeleteAccount, ChangeLanguage };
