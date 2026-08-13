import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-web';

const Acesso = ({ navigation }) => {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.telatoda}>
            <View>
                <Text style={styles.topoC}><h1>Acesse</h1></Text>
                <Text style={styles.topoB}>com E-mail e senha</Text>
            </View>
            <View style={styles.container}>
                <Text>E-mail                                                     </Text>
                <TextInput
                    style={styles.entrada}
                    placeholder='Digite seu E-mail'
                    placeholderTextColor={'#9ca4f0'}
                ></TextInput>
            </View>

            <View style={styles.container}>
                <Text>Senha                                                     </Text>
                <TextInput
                    style={styles.entrada}
                    placeholder='Digite sua senha'
                    placeholderTextColor={'#9ca4f0'}
                ></TextInput>
            </View>

            <View style={styles.senhas}>
                <CheckBox style={styles.check}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#14C871' : undefined}
                />
                <Text style={styles.texSenhas}> Lembrar senha</Text>
                <TouchableOpacity><Text style={styles.texSenhas}>Esqueci minha senha</Text></TouchableOpacity>
            </View>

            <View style={styles.horizontal}>

                <TouchableOpacity
                    style={styles.botVerde}
                    onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.tex1}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botBranco}
                    onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.tex3}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.horizontal}>
                <Text style={styles.linhas}>----------</Text><Text> Ou continue com </Text><Text style={styles.linhas}>----------</Text>
            </View>

            <View style={styles.horizontal2}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/Google.png')}
                        style={styles.logos}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../assets/Facebook.png')}
                        style={styles.logos}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Acesso

const styles = StyleSheet.create({

    telatoda: {
        backgroundColor: 'white',
    },

    container: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    senhas: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 40,
    },

    topoC: {
        margin: 20,
        marginBottom: -20,
        fontSize: 17,
    },

    topoB: {
        margin: 20,
        marginTop: -5,
        fontSize: 11,
    },

    entrada: {
        borderRadius: 3,
        color: '#4a5bf7',
        backgroundColor: '#d5d8f3',
        padding: 20,
        paddingLeft: 10,
        width: 270,
    },

    texSenhas: {
        fontSize: 12,
    },

    check: {
        marginRight: -40,
    },

    botVerde: {
        margin: 5,
        flexDirection: 'row',
        borderRadius: 5,
        height: 40,
        width: 130,
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
        height: 40,
        width: 130,
        padding: 10,
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#14C871',
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

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },

    horizontal2: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        gap: 40,
    },

    linhas: {
        color: 'lightgray',
    },

    logos: {
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        height: 50,
        width: 50,
        resizeMode: 'contain',
    }

});



//              onPress={()=>{navigation.navigate("Home")}}