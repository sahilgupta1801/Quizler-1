import React,{useState} from 'react';
import { Text, View, StyleSheet, ScrollView,ImageBackground, Dimensions , Image, StatusBar} from 'react-native';
import { TouchableOpacity , FlatList } from 'react-native';

function TopSheet(props) {

    const [openModal,setOpenModal] = useState(false);
    const {width,height} = Dimensions.get('window');
    const Categories = [{},{},{},{},{},{}];
    //fill this object before rendering or you can either use useEffect to get data from an API

    const [ViewHeight,setViewHeight] = useState(165);
    function openView(){
        const sizeRowHeight = 165;
        const rows = Math.ceil(Categories.length/4);
        const totalSize = rows * sizeRowHeight;
        const maxSize = height * 0.95;
        if(totalSize >= maxSize){
            setViewHeight(maxSize);
        }
        else{
            setViewHeight(totalSize);
        }
    }
    function closeView(){
        setViewHeight(165);
    }


    return (
        <View style={[styles.modalize,{height:ViewHeight}]}>
                <View style={{width:'95%',alignSelf:'center'}}>
                    <Text style={{fontWeight:'bold',marginTop:'5%'}}>All Categories</Text>
                        <FlatList 
                            numColumns={4}
                            data={openModal?Categories:Categories.slice(0,4)}
                            renderItem={({item})=>(
                                <View style={{width:'25%'}}>
                                    <View style={{backgroundColor:'white',marginVertical:20}}>
                                        {/* <Image source={item.image} style={{width:"100%",height:70}} resizeMode="contain"/> */}
                                        <Text style={{fontWeight:'bold',fontSize:13,textAlign:'center',color: 'blue',width:'100%',paddingTop:'6%'}}> Hello </Text>
                                    </View>                
                                </View>
                            )}
                            keyExtractor={(item)=>item.name}
                        />

                </View>
                <TouchableOpacity style={{width:'20%',alignSelf:'center'}}onPress={()=>{
                    openModal?closeView():openView();
                    setOpenModal(openModal?false:true);
                }}>
                {openModal==false&&(
                    <TouchableOpacity style={{width:'100%',alignItems:'center'}}>
                        <Image source={require('../../assets/left-arrow.png')} style={{width:60,height:40}} resizeMode="contain"/>
                    </TouchableOpacity>
                )}
                {openModal&&(
                    <TouchableOpacity style={{width:'100%',alignItems:'center',marginTop:35}}>
                        <Image source={require('../../assets/left-arrow.png')} style={{width:60,height:40,transform:[{rotate:'180deg'}]}} resizeMode="contain"/>
                    </TouchableOpacity>
                )}
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    modalize: {
        position: "absolute",
        top: 0,
        backgroundColor: "white",
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        width:'97%',
        alignSelf:'center',
        zIndex:9998,
        shadowColor:'black',
        shadowOpacity:1,
        shadowRadius:20,
        elevation:45
      },
})

export default TopSheet;