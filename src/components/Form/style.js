//bloco de importação de componentes
import { StyleSheet } from "react-native";
//cria um objeto de estilo para o componente
const styles = StyleSheet.create({
//define o estilo para o contexto do formulário contexto
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems: "center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },
//define o estilo para o contexto do formulário
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding: 10,
    },
//define o estilo para o contexto do formulário label
    formLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,

    },
//define o estilo dos campos de entrada
    input:{
        width:"90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
//define o estilo do texto do botão calculador
    textButtonCalculator:{
        fontSize: 20,
        color:"#ffffff",
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    }
});
//exporta o objeto de estilo para uso em outros componentes
export default styles