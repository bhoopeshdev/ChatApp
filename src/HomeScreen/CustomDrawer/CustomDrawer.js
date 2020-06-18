import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import themeStyle from '../../themes/theme.style';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                <View style={styles.profileView}>
                    <Image style={styles.userImage}/>
                    <View style={styles.UserDescSection}>
                        <Text style={styles.userName}>User Name</Text>
                        <Text style={styles.userID}>user.name1</Text>
                    </View>
                </View>
                <View style={styles.divider}/>
                <TouchableOpacity style={styles.drawerItem}>
                    <Feather name="home" size={20} style={styles.drawerItemIcon} color={themeStyle.PRIMARY_COLOR_MED}/>
                    <Text style={styles.drawerItemName}>Home</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.drawerItem}>
                    <Feather name="user" size={20} style={styles.drawerItemIcon} color={themeStyle.SECONDARY_COLOR_MED}/>   
                    <Text style={styles.drawerItemName}>Profile</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={styles.drawerItem}>
                    <Feather name="settings" size={20} style={styles.drawerItemIcon} color={themeStyle.SECONDARY_COLOR_DARK}/>
                    <Text style={styles.drawerItemName}>Settings</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.drawerItem}>
                    <Feather name="book" size={20} style={styles.drawerItemIcon} color={themeStyle.PRIMARY_COLOR_LIGHT}/>
                    <Text style={styles.drawerItemName}>About US</Text>
                </TouchableOpacity>
                
            </ScrollView>
            <TouchableOpacity style={styles.bottomSection}>
                <SimpleLineIcons name="logout" size={20} style={{marginLeft:20}}/>
                <Text style={{marginLeft:30,fontWeight:'bold',fontSize:20}}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomSection: {
        paddingVertical:20,
        flexDirection:'row',
        alignItems:'center',
        borderTopColor:'lightgrey',
        borderTopWidth:1
    },
    profileView : {
        paddingHorizontal:15,
        paddingVertical:20,
        alignItems:'center',
        // flexDirection:'row',
        // backgroundColor:themeStyle.PRIMARY_COLOR_DARK,
    },
    UserDescSection : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    userImage :{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:themeStyle.SECONDARY_COLOR_LIGHT,
        borderColor:'white',
        borderWidth:2
    },
    userName : {
        fontSize:25,
        fontWeight:'bold',
        // color:'grey',
    },
    userID: {
        color:'grey',
        fontSize:18,
    },
    divider : {
        height:1,
        backgroundColor:'lightgrey',
        marginHorizontal:20
    },
    drawerItem : {
        flexDirection:'row',
        paddingHorizontal:40,
        paddingVertical:25,
        flex:1,
        // backgroundColor:'red'
    },
    drawerItemIcon : {
        flex:1,
    },
    drawerItemName : {
        flex:4,
        fontWeight:'bold',
        fontSize:20,
        color:'grey',
        // backgroundColor:'red',
        // textAlign:'center',
    }
});

module.exports = CustomDrawer;