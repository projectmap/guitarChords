import React, { useState } from 'react'
import { Modal, SectionList, StyleSheet, Text, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import chordsJson from "./assets/chordsJson/chords.json"
import {chordsListObj} from './data/chordsList'

function ChordsShapes() {
    const [chords,setChords]=useState([])
    const [openChordModal,setOpenChordModal]=useState(false)
    const [searchedSingleChordFamily,setSearchedSingleChordFamily]=useState([])
    const [filteredChords,setFilteredChords]=useState([])
    const[datatoshowfromfilter,setdatatoshow]=useState(false)

    const strings2=[1,1,1,1,1]
    const strings=[1,1,1,1,1]

    const filterChords=(text)=>{
        if(text){
            setdatatoshow(true)
        }else{
            setdatatoshow(false)
        }
        let filteredChords=searchedSingleChordFamily.filter(item=>item.includes(text))
        console.log(filterChords,'filtered',searchedSingleChordFamily,'abc'.includes('a'))
        setFilteredChords(filteredChords)
     
    }
  
    const updateSearchedChords=(text)=>{
        if(text.length===1){
            console.log('using')
            setdatatoshow(false)
       
        }else{
         

            console.log('filtering',text.length,text.toString())
            setdatatoshow(true)
            let filteredChordsLocal
            // if(searchedSingleChordFamily){

                filteredChordsLocal=searchedSingleChordFamily?.filter(item=>item.toString().toLowerCase().includes(text?.toString().toLowerCase()))
         setFilteredChords(filteredChordsLocal)  
        // }else{
        //     filteredChordsLocal=filteredChords?.filter(item=>item.toLowerCase().includes(text?.toLowerCase()))
        //     setFilteredChords(filteredChordsLocal)  
        //     }
        }
        // text.length?setOpenChordModal(true):setOpenChordModal(false)
        
        setSearchedSingleChordFamily(chordsListObj[text.toLowerCase()])
        // setdatatoshow(chordsListObj[text])
        // for(val of chordsJson.EADGBE) {
        //     console.log(val,'obj value'
        // }
      
        // const chordsData={a:[chordsJson]}
        // const foundChords=chordsJson
        console.log(text,'chords')
        // setChords()
    }
    // const strings=[{stringNo:6},{stringNo:5},{stringNo:4},{stringNo:3},{stringNo:2},{stringNo:1}]
  return (
   <View style={styles.chordsInfoContainer}>
<View style={styles.chordsInfoHeader}>
    <View>
<TextInput onChangeText={(text)=>updateSearchedChords(text)} style={{backgroundColor:'white'}} placeholder='Search your chords here......'/>

<View style={styles.chordsModal}>
    {/* <Modal visible={openChordModal}><Text>hello</Text> */}
    {/* <TextInput onChangeText={(text)=>filterChords(text)} style={{backgroundColor:'white'}} placeholder='Filter your chords here......'/> */}
    <FlatList
    numColumns={7}
    keyExtractor={(item, index) => index+item}
     contentContainerStyle={styles.chordlistContainer} 
     style={styles.searchedChordsContainer} data={datatoshowfromfilter? filteredChords:searchedSingleChordFamily}  renderItem={({item})=><View><Text style={styles.searchedChordsName}>{item}
    </Text></View>}/>
    {/* </Modal> */}
    </View>
    </View>

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
    chordsModal:{
        borderColor:'green',
        borderWidth:2,
        height:300,
        zIndex:4
        
       
    },


    chordlistContainer:{
       
        width: '100%',
       
        alignItems:'flex-start',
        justifyContent:'center',
        borderColor:'green',
        borderWidth:2,
        
       
    },
    searchedChordsContainer:{
        borderColor:'green',
        borderWidth:2,
       
    },
    searchedChordsName:{
        color: '#1BD79E',
        fontSize:18,
    marginLeft:8
},
    fritContainer:{
        borderColor:'white',
        borderBottomWidth:6,
        height:100,
        borderRightWidth:2,
        
     
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