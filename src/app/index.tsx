import { Color } from "expo-router";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:35,fontWeight:"bold"}}> Students Grade Manager</Text>
     <Text> Name</Text>
     <TextInput style={styles.textInput} placeholder="Enter Name"></TextInput>
     <Text> Grade</Text>
     <TextInput style={styles.textInput} placeholder="Enter Grade"></TextInput>
     <View style={styles.button}>

      <Button  title="Add" ></Button>
    <button style={styles.buttonStyle}>
      <Text style={{color:"blue",}}>Delete Selected</Text>
    </button>

     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textInput:{
   borderWidth:2,
   borderColor:"grey",
   borderStyle:"solid",
   borderRadius:7,
   marginTop:5,
   marginBottom:5,
  },
  button:{
    flexDirection:"row",
    gap:5,
    
  },
  buttonStyle:{
    
    backgroundColor:"white",
    
    
    
  }
});
