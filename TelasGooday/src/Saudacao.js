import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Saudacao = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/casual_dog.png')}
                style={styles.cao}
            />
            <Text><h1>Ótimo dia!</h1></Text>
            <Text style={styles.tex2}>Como deseja acessar?</Text>
            <TouchableOpacity
                style={styles.botVerde}
                onPress={() => { navigation.navigate("Access") }}>
                <Image
                    source={require('../assets/Google.png')}
                    style={styles.google}
                />
                <Text style={styles.tex1}>        Como deseja acessar?                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botBranco}
                onPress={() => { navigation.navigate("Access") }}>
                <Text style={styles.tex3}>Outras opções</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Saudacao

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cao: {
        marginTop: 70,
        height: 260,
        width: 280,
        resizeMode: 'contain',
    },

    botVerde: {
        margin: 5,
        flexDirection: 'row',
        borderRadius: 5,
        height: 50,
        width: 250,
        padding: 10,
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14C871',
    },

    botBranco: {
        margin: 5,
        flexDirection: 'row',
        borderRadius: 5,
        height: 50,
        width: 250,
        padding: 10,
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#14C871',
        marginBottom: 70,
    },

    tex1: {
        fontSize: 11,
        color: 'white',
    },

    tex2: {
        marginTop: -10,
        marginBottom: 30,
        color: 'black',
        fontSize: 11,
    },

    tex3: {
        fontSize: 11,
        color: 'black',
    },

    google: {
        borderRadius: 5,
        backgroundColor: 'white',
        height: 25,
        width: 25,
        resizeMode: 'contain',

    }

});

