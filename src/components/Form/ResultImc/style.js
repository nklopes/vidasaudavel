//bloco de importação de componentes
import { StyleSheet } from "react-native";
//cria um objeto de estilo para o componente
const styles = StyleSheet.create({
//define estilo do contêiner
    resultImc:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width:"100%",
    },
//define o estilo da informação do texto
    information:{
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },
//define o estilo do numberImc 
    numberImc:{
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    }
});
//exporta o objeto de estilo para uso em outros componentes
export default styles