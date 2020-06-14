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

const LoginScreen = ({navigation}) => {

    const [isUserBoxFocused,toggleUserBoxFoucused] = useState(false);
    const [isPassBoxFocused,togglePassBoxFocused] = useState(false);

    const userBoxHandler = () => {
        toggleUserBoxFoucused(
            !isUserBoxFocused
        )
    }

    const passBoxHandler = () => {
        togglePassBoxFocused(
            !isPassBoxFocused
        )
    }

    return (
        <View style={styles.container}>
            <View
                style={styles.header}
            >
                <Image 
                    style={{width:200,height:200}}
                    source={require('../images/profile.png')}
                />
                <Text style={styles.welcome}>
                    Welcome!
                </Text>
                <Text style={styles.desc}>
                    Sign In to Continue
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
                            placeholder={'username or email'}
                            onFocus={() => userBoxHandler()}
                            onBlur={() => userBoxHandler()}
                        />
                    </View>
                    <View style={{height:1,backgroundColor:'gray'}}/>
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
                <TouchableOpacity style={styles.signInButton}
                    onPress = {() => navigation.navigate('BaseScreen')}
                >
                    <Text style={styles.signInText}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {navigation.navigate("Register")}}
                >
                    <Text style={styles.registerHere}>
                        Not a User? <Text style={{fontWeight:'bold'}}>Register here</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        height:'100%',
        flex:1,
        backgroundColor:'white',
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
    welcome : {
        fontSize:50,
        fontWeight:'bold',
        marginBottom:10,
        color:theme.PRIMARY_COLOR_DARK
    },
    desc : {
        fontSize:18,
        color:theme.SECONDARY_COLOR_DARK
    },
    inputBox : {
        backgroundColor:theme.BACKGROUND_COLOR_LIGHT,
        borderColor:theme.PRIMARY_COLOR_DARK,
        borderWidth:1,
        borderRadius:10,
        marginBottom:30
        // padding:10
    },
    row : {
        flexDirection:'row',
        padding:10,
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