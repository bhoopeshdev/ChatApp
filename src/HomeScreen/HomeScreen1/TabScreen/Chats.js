import React, { Component, useState } from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

import { TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import themeStyle from '../../../themes/theme.style';
import Feather from 'react-native-vector-icons/Feather';
import { ListItem } from 'native-base';

class Chats extends Component {

    state = {
        loading:false,
        data:[],
        temp:[],
        error:null,
        search:null
    }

    getData  = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        this.setState({
            loading:true
        });
        try {
            const response = await fetch(url);
            const json = await response.json();
            this.setResult(json);
        } catch (error) {
            this.setState({
                loading:false,
                error:"Error Loading Users."
            });
            console.log(this.state.error);
        }
    };

    setResult = (res) => {
      this.setState({
          data: [...this.state.data, ...res],
          temp: [...this.state.temp, ...res],
          error: res.error | null,
          loading: false
      });  
      console.log("updated state",this.state.data);
    };
    componentDidMount(){
        this.getData();
    }

    render() {
        return(
            // <Text>Chats</Text>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.chatsHeaderText}>Chats</Text>
                </View>
                <View style={styles.footer}>
                    <ScrollView style={styles.footerContainer}>
                    <View style={styles.searchBoxView}>
                        <TouchableOpacity
                            onPress={this.getData}
                        >
                            <Feather name="search" size={20}/>
                        </TouchableOpacity>
                        <TextInput placeholder="search" style={styles.searchBoxText}></TextInput>
                    </View>
                    <View style={{padding:10}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>ONLINE USERS</Text>
                    </View>
                    <View style={styles.onlineCardView}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.data}
                            keyExtractor={item => item.id}
                            renderItem={ ({ item }) => (
                                <View style={styles.onlineCard}>
                                    <Image style={styles.chatUserImage}/>
                                    <Text style={styles.chatUserName}>{item.name}</Text>
                                </View>
                            )}
                        />
                    </View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={ ({ item }) => (
                            <View style={styles.chatTextSection}>
                                <Image style={styles.chatUserImage}/>
                                <View style={styles.chatText}>
                                    <View style={styles.chatHeaderText}>
                                        <Text style={{fontSize:15,fontWeight:'bold'}}>{item.name}</Text>
                                        <Text style={{fontWeight:'200',fontSize:12}}>01:01 PM</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.chatInitialsText}>chat inials</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </ScrollView>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:themeStyle.PRIMARY_COLOR_DARK,
    },
    header : {
        paddingHorizontal:30,
        justifyContent:'center',
        height:100
    },
    footer : {
        backgroundColor:'white',
        borderTopEndRadius:30,
        paddingTop:30
    },
    footerContainer : {
        marginTop:15
    },
    chatsHeaderText :{
        fontWeight:'bold',
        fontSize:40,
        color:'white'
    },
    searchBoxView : {
        flexDirection:'row',
        paddingHorizontal:20,
        marginHorizontal:10,
        backgroundColor:themeStyle.BACKGROUND_COLOR_LIGHT,
        borderRadius:30,
        alignItems:'center'
    },
    searchBoxText :{
        marginHorizontal:10,
        flex:1
    },
    onlineCardView : {
        height:120,
        justifyContent:'flex-start',
    },
    onlineCard :{
        paddingVertical:5,
        paddingHorizontal:10,
        width:90,
        // backgroundColor:'red',
    },
    chatUserImage:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:themeStyle.PRIMARY_COLOR_DARK,
    },
    chatUserName : {
        textAlign:'center',
        fontSize:12,
        color:themeStyle.SECONDARY_COLOR_DARK,
        fontWeight:'200',
    },
    chatTextSection : {
        flexDirection:'row',
        marginVertical:10,
        padding:5,
        // justifyContent:'center'
    },
    chatText : {
        flexDirection:'column',
    },
    chatHeaderText : {
        flexDirection:'row',
        marginLeft:20,
        marginTop:5,
        flexDirection:'row',
        height:20,
        alignContent:'center',
        // backgroundColor:'red',
    },
    chatInitialsText : {
        marginLeft:20,
        // backgroundColor:'red',
        height:40,
        alignSelf:'center'
    }
});

module.exports = Chats;