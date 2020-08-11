import React, { useEffect } from "react";
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {CustomTextInput, PasswordInput} from "../../components";

const Login = () => {

    useEffect(() => {
        StatusBar.setHidden(false);
    }, []);

    return (
        <>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{ minHeight: 333, backgroundColor: "#73C7D8", marginBottom: -20, justifyContent: "center" }}>
                <Image style={{ width: 393, height: 266, alignSelf: "center", marginBottom: -30 }} source={require('../../assets/images/login_illustration.png')} />
            </View>
            <View style={{ flex: 1, backgroundColor: "#fff", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 30 }}>
                <ScrollView>
                    <Text style={{ fontFamily: "Roboto-Regular", fontSize: 20 }}>Masuk</Text>
                    <View style={{ marginTop: 45, marginBottom:38.3 }}>
                        <CustomTextInput title="Email" />
                        <View style={{marginBottom:18.3}} />
                        <PasswordInput />
                    </View>
                    <View style={{alignItems: "center"}}>
                        <TouchableOpacity>
                            <View style={{width:246, height: 41,backgroundColor: "#A6B6D1", justifyContent: "center", borderRadius:20}}>
                                <Text style={{textAlign:"center", color: "#fff", fontSize:13}}>Masuk</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{marginTop: 20}}>
                            <Text style={{textAlign:"center"}}>─────  Atau  ─────</Text>
                            <Text style={{textAlign:"center"}}>Masuk dengan akun</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", justifyContent: "space-between", marginBottom:44}}>
                        <TouchableOpacity>
                            <View style={{width:117, height: 35,flexDirection: "row", backgroundColor: "#fff", justifyContent: "center",alignItems:"center", borderRadius:20, borderColor: "#D2CDCD", borderWidth: 2}}>
                                <Image style={{marginRight:10}} source={require("./../../assets/icons/Icon-awesome-facebook.png")} />
                                <Text style={{textAlign:"center", color: "#413D3D", fontSize:13}}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{width:117, height: 35,flexDirection: "row", backgroundColor: "#fff", justifyContent: "center",alignItems:"center", borderRadius:20, borderColor: "#D2CDCD", borderWidth: 2}}>
                                <Image style={{marginRight:10}} source={require("./../../assets/icons/Icon-awesome-gmail.png")} />
                                <Text style={{textAlign:"center", color: "#413D3D", fontSize:13}}>Gmail</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent: "center"}}>
                        <Text style={{marginRight:10}}>Belum Ada Akun?</Text>
                        <TouchableOpacity>
                            <Text style={{color:"#E96F1C", fontWeight: "700", fontSize:16}}>Daftar Sekarang</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = {
    main : {

    },
}

export default Login;