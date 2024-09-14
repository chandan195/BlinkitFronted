import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View  >
      <Text  style={{backgroundColor:"red"}}>App this is react native</Text>
      <Text >App this is react native</Text>

      <View  >
     <Text style={styles.heading}>App this is react native</Text>
     <Text >App this is react native</Text>
     <Text >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, aliquid magni, earum ad magnam inventore ullam deserunt molestiae, fugiat eos eius expedita cupiditate. Mollitia quia similique, quisquam, officiis odio suscipit ipsa earum repellat eum beatae voluptatibus est quidem, deleniti vitae tempora. Ipsam quia et cupiditate laborum similique quae aliquam modi.</Text>
   </View>
    </View>
    
  )
}


const styles = StyleSheet.create({
  heading:{
    color:"white",
    alignItems: "center",
    textAlign: "center",
    width:45
  }

})
export default App