import React, { Component, useState } from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

import { TouchableOpacity, TextInput, FlatList } from 'react-native-gesture-handler';
import themeStyle from '../../../themes/theme.style';
import Feather from 'react-native-vector-icons/Feather';
import { ListItem } from 'native-base';

class Chats extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading:false,
            data:[],
            temp:[],
            error:null,
            search:null
        }
    }

    componentDidMount() {
        this.getData();
        console.log("did mount called");
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
        }
    };

    setResult = (res) => {
      this.setState({
          ...this.state,
          data: [...this.state.data, ...res],
          temp: [...this.state.temp, ...res],
          error: res.error | null,
          loading: false
      });  
      console.log(this.state);
    };

    render() {
        return(
            // <Text>Chats</Text>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.chatsHeaderText}>Chats</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.curOnlineView}>
                        <TouchableOpacity>
                            <Feather name="search" size={20}/>
                        </TouchableOpacity>
                        <TextInput placeholder="search" style={styles.searchBoxText}></TextInput>
                    </View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={ ({ item }) => (
                            <ListItem title={item.name} subtitle={item.email}/>
                        )}
                    />
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
        flex:1,
        paddingHorizontal:30,
        justifyContent:'center'
    },
    footer : {
        flex:6,
        backgroundColor:'white',
        borderTopEndRadius:30,
        paddingTop:30
    },
    chatsHeaderText :{
        fontWeight:'bold',
        fontSize:40,
        color:'white'
    },
    curOnlineView : {
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
    onlineCard :{
        flexDirection:'column',
        alignItems:'center',
        marginHorizontal:10
    },
    chatUserImage:{
        width:70,
        height:70,
        borderRadius:35
    },
    chatUserName : {
        fontSize:15,
        color:themeStyle.SECONDARY_COLOR_DARK,
        fontWeight:'200'
    }
});

module.exports = Chats;