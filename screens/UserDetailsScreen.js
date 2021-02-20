import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
  Alert,
  Modal,
} from 'react-native';

import * as firebase from 'firebase';
import db from '../config';
import { Header } from 'react-native-elements';

export default class UserDetailsScreen extends React.Component{
  constructor(){
    super();
    this.state={
      exchangeId: this.navigation.getParams("exchangeId"),
      userId: firebase.auth().currentUser.email,
      userContact:"",
      userAddress:'',
      userName:'',
      item_name:"",
      requestStatus:''
    }
  }

   getUserDetails(){
       db.collection("users").where("email_id","==",this.state.exchangeId).get()
       .then((snapshot)=>{snapshot.forEach((doc)=>{
           this.setState({
               userName:doc.data().first_name,
               userContact:doc.data().phoneNo,
               userAddress:doc.data().address
           })
       })});
   }

    addBarters=()=>{
        db.collection("My_Barters").add({
            item_name: this.state.item_name,
            userId: this.state.userId,
            userName:this.state.userName,
            userContact:this.state.userContact,
            userAddress:this.state.userAddress,
            requestStatus:'exchanger interested'
        })
    }

  render(){
    return(
      <View>
      </View>
    )
  }
}