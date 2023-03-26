import { StyleSheet } from "react-native"
export default styles=StyleSheet.create({
container:{
  width:200,
  height:56,
  backgroundColor:'#24242e',
  position:'absolute',
  bottom:22,
  alignSelf:'center',
  alignItems:'center',
  borderRadius:32,
  justifyContent:'center',
  paddingHorizontal:16,
  flexDirection:'row'
},
value:{
  color:'#c4c4cc',
  marginRight:7,
},
tracker:{
  flex:1,
  height:3,
  borderRadius:3,
  backgroundColor:'#505059'
},
progress:{
  height:3,
  backgroundColor:'#8257e5',
}
})