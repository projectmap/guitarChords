import React, { useEffect, useState } from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import chordsJson from "./assets/chordsJson/chords.json"
import {chordsListObj} from './data/chordsList'

function ChordsShapes() {
    const [chordVariationNo,setChordVariationNo]=useState(0)
    const [showList,setShowList]=useState(false)
    const [searchedSingleChordFamily,setSearchedSingleChordFamily]=useState([])
    const [filteredChords,setFilteredChords]=useState([])
    const[datatoshowfromfilter,setdatatoshow]=useState(false)
    const [selectedChordName,setSelectedChordName]=useState('A')
 const [showGuitarHole,setShowGuitarHole]=useState(true)
    const [selectedChordData,setSelectedChordData]=useState({highestFreetNo:1,positions:[],totalVariations:1})

    const strings2=[5,4,3,2,1,0]
    const strings=[1,2,3,4,5]
    const freetIndicators={3:true,5:true,7:true,9:true,12:true,15:true,17:true,19:true}

    const updateChordVariation=(updateType)=>{
        
if(updateType==='inc'&&selectedChordData.totalVariations!==chordVariationNo+1){
    setChordVariationNo(prevState=>prevState+1)
}else if(updateType==='dec'&&chordVariationNo>0){
    setChordVariationNo(prevState=>prevState-1)
}
    }


    const checkIfUserIsSearching=(text)=>{
        console.log('searching',text)
        if(!text){
            setShowList(false)

        }else{
            setShowList(true)
            setShowGuitarHole(false)
        }
    }


    const hideGuitarHole=()=>{
        setShowGuitarHole(false)
    }

useEffect(()=>{
    const _variationNo=chordsJson.EADGBE[selectedChordName].length
    console.log('just selected',_variationNo)
    if(selectedChordName){
        const positionArray=   chordsJson.EADGBE[selectedChordName][chordVariationNo].p.split(',')
        .map(item => (isNaN(item) ? 0 : Number(item)));
        let highestfreet=Math.max(...positionArray)
        setSelectedChordData(({positions:positionArray,highestFreetNo:highestfreet,totalVariations:_variationNo}))
    }
  
},[selectedChordName,chordVariationNo])
console.log(selectedChordData,'chord data')

    const handleChordSelection=(item)=>{
      
   
   setSelectedChordName(item)
  console.log(item,'selected')
    setShowList(false)
     setShowGuitarHole(true)
     setChordVariationNo(0)

    }

    const filterChords=(text)=>{
        if(text){
            setdatatoshow(true)
        }else{
            setdatatoshow(false)
        }
        let filteredChords=searchedSingleChordFamily.filter(item=>item.includes(text))
        console.log('filtered',searchedSingleChordFamily,'abc'.includes('a'))
        setFilteredChords(filteredChords)
     
    }
  
    const updateSearchedChords=(text)=>{
        checkIfUserIsSearching(text)
        if(text.length===1){
            console.log('using')
            setdatatoshow(false)
       
        }else{
         

            console.log('filtering',text.length,text.toString())
            setdatatoshow(true)
            let filteredChordsLocal
            

                filteredChordsLocal=searchedSingleChordFamily?.filter(item=>item.toString().toLowerCase().includes(text?.toString().toLowerCase()))
         setFilteredChords(filteredChordsLocal)  
      
        }
       
        
        setSearchedSingleChordFamily(chordsListObj[text.toLowerCase()])
       
        console.log(text,'chords')
        
    }
    // const strings=[{stringNo:6},{stringNo:5},{stringNo:4},{stringNo:3},{stringNo:2},{stringNo:1}]
  return (
   <View style={styles.chordsInfoContainer}>
<View style={styles.chordsInfoHeader}>
    <View>
<TextInput  onBlur={()=>setShowGuitarHole(true)} onFocus={()=>hideGuitarHole()} onChangeText={(text)=>updateSearchedChords(text)} style={{backgroundColor:'white',marginTop:4, backgroundColor:'#2d2d2d',borderRadius:12, color: '#1BD79E',fontSize:16}}   placeholderTextColor="#1BD79E"  placeholder='Search your chords here......'/>

{showList&&<View style={styles.chordsModal}>
   
   <FlatList
    numColumns={7}
    keyExtractor={(item, index) => index+item}
     contentContainerStyle={styles.chordlistContainer} 
     style={styles.searchedChordsContainer} data={datatoshowfromfilter? filteredChords:searchedSingleChordFamily}  renderItem={({item})=><TouchableOpacity onPress={()=>handleChordSelection(item)}><View><Text style={styles.searchedChordsName}>{item}
    </Text></View></TouchableOpacity>}/>
    </View>}
    </View>

<View style={styles.allstrings}>
  <View style={styles.chordnameNvaritation}>
<Text style={styles.selectedChordNameText}>{selectedChordName}</Text>

<View style={styles.variationsContainer}>
    <View style={{...styles.arrow,...{opacity:chordVariationNo===0?0.6:1}}}><Text onPress={()=>updateChordVariation('dec')} style={styles.selectedChordNameTextArrow}>{'-'}</Text></View>
    <Text style={{...styles.selectedChordNameVariationText,...styles.margin12}}>Variation: {chordVariationNo+1}</Text>
    <View  style={{...styles.arrow,...{opacity:chordVariationNo===selectedChordData.totalVariations-1?0.6:1}}}><Text onPress={()=>updateChordVariation('inc')} style={styles.selectedChordNameTextArrow}>{'+'}</Text></View>
    <View/>
</View>
  </View>
    
   
   
   <View style={styles.stringNfreetContainer}>
<FlatList  style={styles.stringsContainer} data={strings} renderItem={({item,index})=><View style={styles.stringsWrapper}>

 {index===0&&<View style={styles.stringNoContainer}>
    <Text style={styles.stringText}>6</Text> 
    <Text style={styles.stringText}>5</Text> 
    <Text style={styles.stringText}>4</Text> 
    <Text style={styles.stringText}>3</Text> 
    <Text style={styles.stringText}>2</Text>
    <Text style={styles.stringText}>1</Text></View>

 }   
<FlatList horizontal contentContainerStyle={styles.fritContainer} 
style={styles.fritContainerInner} 
data={strings2} renderItem={({item:data,index:idx})=><View  style={styles["string"+(data)]}>

    {idx===3&&selectedChordData.highestFreetNo<6&&freetIndicators?.[item]&&<View style={styles.freetNoIndicator}/>}
    {idx===3&& freetIndicators?.[selectedChordData.highestFreetNo-4+item]&&selectedChordData.highestFreetNo>5&&<View style={styles.freetNoIndicator}/>}
{
selectedChordData.positions[idx]===selectedChordData.highestFreetNo-4+item&&
<Text
 style={styles.stringPositionIndicator}
></Text>}

    {idx===5&&<Text style={styles.stringNo}>{selectedChordData.highestFreetNo<6?item: selectedChordData.highestFreetNo-4+item}</Text>}</View>}/>
  
    </View>}/>

</View>

{showGuitarHole&&<View style={styles.guitarholeContainer}><View style={styles.guitarHole}></View></View>}

</View>
</View>
   </View>
  )
}
const styles = StyleSheet.create({
    freetNoIndicator:{
        borderColor:'white',
        backgroundColor:'white',
        transform: [{ rotate: '45deg' }],
        borderWidth:2,
        height:12,
        width:12,
        position:'absolute',
        right:20,
        top:36
    },
    margin12:{
        marginLeft:12,
        marginRight:12
    },
    variationsContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:8
    },
    arrow:{
        height:24,
        width:24,
        backgroundColor:'white',
        borderRadius:12,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    
    },
    chordnameNvaritation:{
        display:'flex',
        flexDirection:'row'
    },
  
    stringNfreetContainer:{
        alignItems:'center',
        zIndex:9
    },

    selectedChordNameText:{
        color: '#1BD79E',
        fontSize:20,
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:8
    },  
     selectedChordNameVariationText:{
        color: '#1BD79E',
        fontSize:20,
        marginRight:'auto',
        marginLeft:'auto',
     
    },
    selectedChordNameTextArrow:{
        color: '#1BD79E',
        fontSize:18,
    
        
    },

    stringNoContainer:{
        borderWidth:2,
        display:'flex',
        flexDirection:'row',
        gap:40,
        width:262
       
    },
    stringText:{
        color:'white',
    },
    chordsModal:{
        borderWidth:2,
        height:300,
        zIndex:9,
        backgroundColor:'black'
    },


    chordlistContainer:{
       
        width: '100%',
       
        alignItems:'flex-start',
        justifyContent:'center',
        
       
    },
    searchedChordsContainer:{
  
        paddingTop:8,
        paddingRight:4,
        paddingLeft:4,
        paddingBottom:4,
        backgroundColor:'#2d2d2d',
        borderRadius:12
        
       
    },
    searchedChordsName:{
        color: '#1BD79E',
        fontSize:18,
    marginLeft:8
},
    fritContainer:{
       
        height:100,
       
        display:'flex',
        justifyContent:'flex-end',
        gap:50,
       
        
        

        
     
    },
    fritContainerInner:{
        borderColor:'white',
        borderBottomWidth:6,
        height:100,
        width:265,
        borderTopWidth:2,

    


        
     
    },
  
    guitarholeContainer:{
       
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        alignItems:'center',
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
   
     backgroundColor:'#000000'
    },
    chordsInfoHeader: {
      
        flex:1,
        position:'relative'
    },
    stringsContainer:{
       
        marginTop:8,
        marginLeft:'auto',
        marginRight:'auto',
        
    },
  
    string:{
     borderLeftWidth:2,
        borderColor:'white',
        position:'relative'
        
    },
    string0:{
        borderLeftWidth:1,
           borderColor:'white',
           position:'relative',
      
           
       },
    string1:{
        borderLeftWidth:1,
           borderColor:'white',
           position:'relative'
           
       },
       string2:{
        borderLeftWidth:2,
           borderColor:'white',
           position:'relative'
           
       },
       string3:{
        borderLeftWidth:2,
           borderColor:'white',
           position:'relative'
           
       },
       string4:{
        borderLeftWidth:4,
           borderColor:'white',
           position:'relative'
           
       },
       string5:{
        borderLeftWidth:4,
           borderColor:'white',
           position:'relative'
           
       },
    
    strings2:{
        height:100,
        marginTop:4,
        borderWidth:2,
        borderLeftColor:'#fff',
    },
    stringNoLast:{
        color:'white',
        position:'absolute',
        left:0,
        top:0
    },
    stringNo:{
        color:'#ffff',
        position:'absolute',
        right:12,
        top:32,
     
    },
    stringPositionIndicator:{
        color:'white',
        width:8,
        position:'absolute',
        fontSize:16,
        left:-7,
        top:38,
        backgroundColor:'#1BD79E',
        width:12,
        height:12,
        borderRadius:6
        
    },
    allstrings:{
    //    borderColor:'white' ,
    //    borderWidth:2,
       flex:1,
       zIndex:99,
      
    }
});
export default ChordsShapes