//bloco de importação de componentes
import React from  "react";
import { View, Text } from "react-native";
import styles from "./style"
//bloco de criação do título do apk
export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App - Vida Saudável</Text>
        </View>
    );
}