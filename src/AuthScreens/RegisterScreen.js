import React, { Component, useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import theme from '../themes/theme.style';

import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {

    const [isUserBoxFocused,toggleUserBoxFoucused] = useState(false);
    const [isMailBoxFocused,toggleMailBoxFocused] = useState(false);
    const [isMobileBoxFocused,toggleMobileBoxFocused] = useState(false);
    const [isPassBoxFocused,togglePassBoxFocused] = useState(false);
    const [isRepPassBoxFocused,toggleRepPassBoxFocused] = useState(false);

    const userBoxHandler = () => {
        toggleUserBoxFoucused(
            !isUserBoxFocused
        )
    }

    const mailBoxHandler = () => {
        toggleMailBoxFocused(
            !isMailBoxFocused
        )
    }

    const mobileBoxHandler = () => {
        toggleMobileBoxFocused(
            !isMobileBoxFocused
        )
    }

    const passBoxHandler = () => {
        togglePassBoxFocused(
            !isPassBoxFocused
        )
    }

    const repPassBoxHandler = () => {
        toggleRepPassBoxFocused(
            !isRepPassBoxFocused
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View
                style={styles.header}
            >
                <Image 
                    style={{width:120,height:120}}
                    source={require('../images/list.png')}
                />
                <Text style={styles.create_accont}>
                    CREATE ACCOUNT
                </Text>
                <Text style={styles.desc}>
                    Create a new Account
                </Text>
            </View>
            <View style={styles.footer}>   
                <View style={styles.inputBox}>
                    <View style={styles.row}>
                        <Feather name="user" size={20} 
                           color={isUserBoxFocused?theme.PRIMARY_COLOR_MED:theme.PRIMARY_COLOR_DARK}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder={'username'}
                            onFocus={() => userBoxHandler()}
                            onBlur={() => userBoxHandler()}
                        />
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <View style={styles.row}>
                        <Feather 
                            name="mail" size={20} 
                            color={isMailBoxFocused?theme.PRIMARY_COLOR_MED:theme.PRIMARY_COLOR_DARK}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder={'email'}
                            onFocus={() => mailBoxHandler()}
                            onBlur={() => mailBoxHandler()}
                        />
                    </View>
                </View>

                <View style={styles.inputBox}>
                    <View style={styles.row}>
                        <Feather 
                            name="phone" size={20} 
                            color={isMobileBoxFocused?theme.PRIMARY_COLOR_MED:theme.PRIMARY_COLOR_DARK}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder={'mobile'}
                            onFocus={() => mobileBoxHandler()}
                            onBlur={() => mobileBoxHandler()}
                        />
                    </View>
                </View>

                <View style={styles.inputBox}>
                    <View style={styles.row}>
                        <Feather 
                            name="lock" size={20} 
                            color={isPassBoxFocused?theme.PRIMARY_COLOR_MED:theme.PRIMARY_COLOR_DARK}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder={'paasword'}
                            onFocus={() => passBoxHandler()}
                            onBlur={() => passBoxHandler()}
                        />
                    </View>
                </View>

                <View style={styles.inputBox}>
                    <View style={styles.row}>
                        <Feather 
                            name="lock" size={20} 
                            color={isRepPassBoxFocused?theme.PRIMARY_COLOR_MED:theme.PRIMARY_COLOR_DARK}
                        />
                        <TextInput 
                            style={styles.input} 
                            placeholder={'repeat paasword'}
                            onFocus={() => repPassBoxHandler()}
                            onBlur={() => repPassBoxHandler()}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.signInText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.registerHere}>
                        Already a User? <Text style={{fontWeight:'bold'}}> Login </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container :{
        height:'100%',
        flex:1,
        backgroundColor:'white',
        paddingVertical:30
    },
    header : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    },
    footer : {
        // backgroundColor:'blue',
        flex:1,
        justifyContent:'flex-end',
        paddingVertical:40,
        paddingHorizontal:40
    },
    create_accont : {
        fontSize:30,
        fontWeight:'bold',
        marginBottom:10,
        color:theme.PRIMARY_COLOR_DARK
    },
    desc : {
        fontSize:18,
        color:theme.SECONDARY_COLOR_DARK
    },
    inputBox : {
        borderColor:theme.PRIMARY_COLOR_DARK,
        borderWidth:1,
        borderRadius:10,
        marginBottom:20
        // padding:10
    },
    row : {
        flexDirection:'row',
        padding:8,
        alignItems:'center',
    },
    input : {
        padding:10,
        flex:1,
        // backgroundColor:'blue'
    },
    signInButton : {
        backgroundColor:theme.SECONDARY_COLOR_DARK,
        borderRadius:10,
        padding:15,
        alignItems:'center',
        marginBottom:25
    },
    signInText : {
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
    registerHere : {
        fontSize:15,
        alignSelf:'center',
        marginBottom:20,
        color:theme.PRIMARY_COLOR_DARK
    }
});
module.exports = LoginScreen;