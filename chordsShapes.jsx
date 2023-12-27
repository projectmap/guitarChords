import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler';

function ChordsShapes() {
    const strings2=[1,1,1,1,1]
    const strings=[1,1,1,1,1]
    // const strings=[{stringNo:6},{stringNo:5},{stringNo:4},{stringNo:3},{stringNo:2},{stringNo:1}]
  return (
   <View style={styles.chordsInfoContainer}>
<View style={styles.chordsInfoHeader}>
<TextInput placeholder='Search your chords here......'/>
<View style={styles.allstrings}>
    <View></View>
    {/* <SectionList  keyExtractor={(item, index) =>  index} sections={strings} renderItem={({item})=><View  style={styles.strings2}><Text style={styles.stringNo}></Text></View>}  renderSectionHeader={({item}) => (
        <Text style={styles.header}>test</Text>
      )}/> */}
<FlatList  style={styles.stringsContainer} data={strings} renderItem={({item})=><FlatList horizontal style={styles.fritContainer} data={strings2} renderItem={()=><View  style={styles.strings}><Text style={styles.stringNo}>s</Text></View>}/>}/>
</View>
<View style={styles.guitarholeContainer}><View style={styles.guitarHole}></View></View>

</View>
   </View>
  )
}
const styles = StyleSheet.create({
    fritContainer:{
        borderColor:'white',
        borderBottomWidth:6,
        height:100,
        borderRightWidth:2,
        // borderRightColor:'yellow'
     
    },
    freeBoard:{
        borderColor:'yellow',
        borderWidth:2
    },
    guitarholeContainer:{
        borderColor:'red',
        borderWidth:2,
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        alignItems:'center'
    },
    guitarHole:{
        borderColor:'black',
        borderWidth:2,
        width:300,
        height:300,
        borderRadius:200,
        backgroundColor:'#2d2d2d',
       
    },
    chordsInfoContainer: {
        flex:1,
      borderWidth:2,
     borderColor:'red',
     backgroundColor:'#000000'
    },
    chordsInfoHeader: {
        borderWidth:2,
        borderColor:'green',
        flex:1,
        position:'relative'
    },
    stringsContainer:{
        // borderColor:'pink',
        borderWidth:2,
        alignSelf:'center',   
        marginLeft:35,
        borderColor:'red',
        
      
    },
  
    strings:{
        // height:'100%',
     width:60,
            borderWidth:2,
        borderLeftColor:'white',
        
        
    },
    strings2:{
        height:100,
        marginTop:4,
        borderWidth:2,
        borderLeftColor:'#fff',
    },
    stringNo:{
        color:'#ffff'
    },
    allstrings:{
       borderColor:'green' ,
       borderWidth:2,
       flex:1,
       zIndex:9
    }
});
export default ChordsShapes