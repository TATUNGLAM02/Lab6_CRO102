import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { RadioButton, HelperText } from 'react-native-paper'; // ✅ Import RadioButton
import { useSignupMutation } from './api';

const SignupForm = () => {
    const [signup, { isLoading, error }] = useSignupMutation();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        birthdate: '',
        gender: 'male',
    });

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            await signup(formData).unwrap();
            Alert.alert("Thành công!", "Bạn đã đăng ký thành công.");
            setFormData({ username: '', email: '', password: '', phone: '', address: '', birthdate: '', gender: 'male' });
        } catch (err) {
            Alert.alert("Lỗi!", "Đăng ký thất bại. Vui lòng thử lại.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Đăng ký</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Tên người dùng"
                    value={formData.username}
                    onChangeText={(text) => handleChange('username', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Mật khẩu"
                    value={formData.password}
                    onChangeText={(text) => handleChange('password', text)}
                    secureTextEntry
                />

                <TextInput
                    style={styles.input}
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChangeText={(text) => handleChange('phone', text)}
                    keyboardType="phone-pad"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Địa chỉ"
                    value={formData.address}
                    onChangeText={(text) => handleChange('address', text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Ngày sinh (YYYY-MM-DD)"
                    value={formData.birthdate}
                    onChangeText={(text) => handleChange('birthdate', text)}
                />

                <Text style={styles.label}>Giới tính:</Text>
                <View style={styles.radioContainer}>
                    <RadioButton.Group
                        onValueChange={(value) => handleChange('gender', value)}
                        value={formData.gender}
                    >
                        <View style={styles.radioItem}>
                            <RadioButton color="#ff5722" value="male" />
                            <Text style={styles.radioText}>Nam</Text>
                        </View>
                        <View style={styles.radioItem}>
                            <RadioButton color="#ff5722" value="female" />
                            <Text style={styles.radioText}>Nữ</Text>
                        </View>
                    </RadioButton.Group>
                </View>

                {error && <HelperText type="error" style={styles.errorText}>⚠ {error.data?.message || 'Có lỗi xảy ra!'}</HelperText>}

                <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isLoading}>
                    <Text style={styles.buttonText}>{isLoading ? "Đang gửi..." : "Đăng ký"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Màu nền xám nhạt
    },
    form: {
        width: '85%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#ff5722', // Cam nổi bật
    },
    input: {
        height: 45,
        borderColor: '#ff5722',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'white',
    },
    label: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#ff5722',
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioText: {
        marginLeft: 5,
        fontSize: 16,
        color: '#333',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#ff5722',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SignupForm;
