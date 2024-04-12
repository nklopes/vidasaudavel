//bloco de importação de componentes
import { StyleSheet } from "react-native";
//Cria um objeto styles chamando o método "create" do módulo "StyleSheet"
const styles = StyleSheet.create({
    boxTitle:{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    textTitle:{
        color: "#FF0043",
        fontSize: 24,
        fontWeight: "bold",
    }
});

export default styles