import React,{useState} from 'react';
import { View,Image,StyleSheet, Text } from "react-native";
import Home from "./screens/Home";
import Navigator from "./routes/homestack";
import firestore from '@react-native-firebase/firestore'

export default function App(){
    return(
<Navigator/>
)
}

