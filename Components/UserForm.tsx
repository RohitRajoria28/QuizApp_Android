import  { useState } from 'react';
import React, { Component } from 'react'
import { Form, FormItem } from 'react-native-form-component';
import { FormEvent } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Routes, Route, useNavigate } from "react-router-native";
import { StyleSheet, Text, View, AppRegistry,TextInput,Button } from "react-native";

import JavaScript from './JavaScript';
import Java from './Java';

import Reactjs from './Reactjs';

interface ContactInfo {
  language: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const UserForm = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    language: '',
    name: '',
    email: '',
    phoneNumber: '',
  });
  let navigate=useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(contactInfo);
    if(contactInfo.language==='JavaScript'){
      navigate('/JavaScript',{ state: {contactInfo}})
    }
    if(contactInfo.language==='Reactjs'){
      navigate('/Reactjs',{ state: {contactInfo}})
    }
    if(contactInfo.language==='JAVA'){
      navigate('/Java',{ state: {contactInfo}})
    }
   
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QUIZ APP</Text>
      <View style={styles.pickerContainer}>
        <Picker
          mode="dropdown"
          placeholder="Selected Language"
          selectedValue={contactInfo.language}
          onValueChange={(value) =>
            setContactInfo({ ...contactInfo, language: value })
          }
        >
          <Picker.Item label="Select Language" value="" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="Reactjs" value="Reactjs" />
          <Picker.Item label="JAVA" value="JAVA" />
        </Picker>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={contactInfo.name}
        onChangeText={(value) =>
          setContactInfo({ ...contactInfo, name: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={contactInfo.email}
        onChangeText={(value) =>
          setContactInfo({ ...contactInfo, email: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={contactInfo.phoneNumber}
        onChangeText={(value) =>
          setContactInfo({ ...contactInfo, phoneNumber: value })
        }
      />
      <Button
        style={styles.button}
        title="Start test"
        onPress={handleSubmit}
        disabled={
          contactInfo.language === '' ||
          contactInfo.name === '' ||
          contactInfo.email === '' ||
          contactInfo.phoneNumber === ''
        }
      />
    </View>
  );
  // return (
  //   <View  >
  //      <Text> QUIZ APP </Text>
  //     <Text >
  //       <Picker
  //         mode="dropdown"
  //         placeholder="Selected Language"
  //         selectedValue={contactInfo.language}
  //         onValueChange={(value:any) => setContactInfo({...contactInfo, language: value})}
  //       >
  //         <Picker.Item label="Select Language" value="" />
  //         <Picker.Item label="JavaScript" value="JavaScript" />
  //         <Picker.Item label="Reactjs" value="Reactjs" />
  //         <Picker.Item label="JAVA" value="JAVA" />
  //       </Picker>
  //     </Text>
  //     <Text>
  //       <TextInput
  //         placeholder="Name"
  //         value={contactInfo.name}
  //         onChangeText={(value:any) =>
  //           setContactInfo({ ...contactInfo, name: value })
  //         }
  //       />
  //     </Text>
  //     <Text>
  //       <TextInput
  //         placeholder="Email"
  //         keyboardType="email-address"
  //         value={contactInfo.email}
  //         onChangeText={(value:any) =>
  //           setContactInfo({ ...contactInfo, email: value })
  //         }
  //       />
  //     </Text>
  //     <Text>
  //       <TextInput
  //         placeholder="Phone Number"
  //         keyboardType="phone-pad"
  //         value={contactInfo.phoneNumber}
  //         onChangeText={(value:any) =>
  //           setContactInfo({ ...contactInfo, phoneNumber: value })
  //         }
  //       />
  //     </Text>
      
      
    
  //   <Button title = "Start test"  onPress = {handleSubmit} disabled={contactInfo.language==='' || contactInfo.name==='' || contactInfo.email==='' || contactInfo.phoneNumber===''} />
      
          
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default UserForm;
