import React, { useState } from 'react';
import { View, ImagePropTypes, Image, Text, TouchableOpacity, SnapshotViewIOS } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Icon
import { set } from 'react-native-reanimated';

const CustomTextInput = (props) => {
    const [onActive, setOnActive] = useState(false);
    const [password, setPassword] = useState('');

    const Check = (value) => {
        if (value === "") {
            setOnActive(false);
            props.value;
        } else {
            setOnActive(true);
        }
    }

    return (
        <View>
            <Text style={styled.label}>{props.title}</Text>
            <View>
                <TextInput style={ (onActive ? styled.textActive : styled.text)} onChangeText={(value) => Check(value)}/>
            </View>
        </View>
    );
}

const styled = {
    label: {
        fontSize: 11,
        color: "#D0C8B9",
        marginBottom: 9
    },
    text: {
        fontFamily: "Hind-Medium" ,
        borderBottomWidth: 1,
        fontSize: 15,
        padding: 0,
        paddingRight: 40,
        borderColor: "#D0C8B9"
    },
    textActive: {
        fontFamily: "Hind-Medium" ,
        borderBottomWidth: 2,
        fontSize: 15,
        padding: 0,
        paddingRight: 40,
        borderColor: "#62615E"
    }

}

export default CustomTextInput;