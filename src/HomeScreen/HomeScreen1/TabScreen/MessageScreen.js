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
import { ListItem, Row } from 'native-base';

class MessageScreen extends Component {

    state = {
        onlineBoxVisible:true,
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
    };
    componentDidMount(){
        this.getData();
    }

    toggleOnlineBoxVisiblity = () => {
        if(this.state.onlineBoxVisible){
            this.setState({
                onlineBoxVisible:false
            });
        }
        else{
            this.setState({
                onlineBoxVisible:true
            });
        }
    };

    render() {
        return(
            // <Text>Chats</Text>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Feather name="menu" size={20} color={'white'}
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                        <Text style={styles.chatsHeaderText}>Chats</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <ScrollView style={styles.footerContainer}>
                        {this.state.onlineBoxVisible &&
                        <View style={styles.onlineCardView}>
                            <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>ONLINE USERS</Text>
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
                        </View>}
                        <View style={styles.searchBoxView}>
                            <TouchableOpacity>
                                <Feather name="search" size={20}/>
                            </TouchableOpacity>
                            <TextInput placeholder="search" style={styles.searchBoxText}
                                onFocus={this.toggleOnlineBoxVisiblity}
                                onBlur={this.toggleOnlineBoxVisiblity}
                            ></TextInput>
                        </View>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={item => item.id}
                            renderItem={ ({ item }) => (
                               <TouchableOpacity style={styles.chatRowView}
                                    onPress={() => this.props.navigation.navigate('ChatScreen')}
                               >
                                   <Image style={styles.chatUserImage}/>
                                   <View style={styles.chatTextSection}>
                                        <Text style={{fontWeight:'bold',marginBottom:10}}>{item.name}</Text>
                                        <Text>It is a long established fact that a reader will be distracted</Text>
                                   </View>
                                   <View style={styles.chatInfoSection}>
                                       <Text>12:04 AM</Text>
                                   </View>
                               </TouchableOpacity>
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
        backgroundColor:themeStyle.PRIMARY_COLOR_LIGHT,
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
        fontSize:35,
        color:'white',
        marginLeft:20
    },
    searchBoxView : {
        flexDirection:'row',
        paddingHorizontal:20,
        marginHorizontal:10,
        backgroundColor:themeStyle.BACKGROUND_COLOR_LIGHT,
        borderRadius:5,
        alignItems:'center'
    },
    searchBoxText :{
        marginHorizontal:10,
        flex:1
    },
    onlineCardView : {
        height:120,
        justifyContent:'flex-start',
        marginBottom:10
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
        backgroundColor:themeStyle.SECONDARY_COLOR_LIGHT,
    },
    chatUserName : {
        textAlign:'center',
        fontSize:12,
        color:themeStyle.SECONDARY_COLOR_DARK,
        fontWeight:'200',
    },
    chatRowView :{
        flex:1,
        flexDirection:'row',
        paddingVertical:20,
        paddingHorizontal:10
    },
    chatTextSection :{
        flex:5,
        // backgroundColor:'red',
        marginLeft:10,
        flexDirection:'column',
    },
    chatInfoSection : {
        flex:1,
        flexDirection:'column',
        // backgroundColor:'cyan'
    },
});

module.exports = MessageScreen;