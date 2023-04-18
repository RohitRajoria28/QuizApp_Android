import { StatusBar } from 'expo-status-bar';

import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter,Routes, Route, Link } from "react-router-native";
import UserForm from './Components/UserForm';
import JavaScript from './Components/JavaScript';
import Java from './Components/Java';
import Reactjs from './Components/Reactjs';
import ReportCard from './Components/ReportCard';


export default function App() {
  return (
    <NativeRouter>
      <Routes>
      <Route  path="/" element={<UserForm/>} />
      <Route  path="/JavaScript" element={<JavaScript/>} />
      <Route  path="/Java" element={<Java/>} />
      <Route  path="/Reactjs" element={<Reactjs/>} />
      <Route  path="/ReportCard" element={<ReportCard/>} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
