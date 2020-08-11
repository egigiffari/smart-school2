import React, { useState } from 'react';
import { View, ImagePropTypes, Image, Text, TouchableOpacity, SnapshotViewIOS } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// Icon
import eyeIcon from "../../assets/icons/Icon-feather-eye.png";
import eyeCloseIcon from "../../assets/icons/Icon-feather-eye-off.png";
import { set } from 'react-native-reanimated';

const PasswordInput = (props) => {
    const [hidePass, setHidePass] = useState(true);
    const [showEyeIcon, setShowEyeIcon] = useState(eyeIcon);
    const [onActive, setOnActive] = useState(false);
    const [password, setPassword] = useState('');

    const Check = (value) => {
        if (value === "") {
            setOnActive(false);
            props.password;
        } else {
            setOnActive(true);
        }
    }


    return (
        <View>
            <Text style={styled.label}>Password</Text>
            <View>
                <TextInput style={ (onActive ? styled.textActive : styled.text) } secureTextEntry={hidePass} onChangeText={(value) => Check(value)}/>
                <TouchableOpacity style={styled.icon} onPress={
                    () => {
                        (hidePass ? setHidePass(false) : setHidePass(true));
                        (showEyeIcon == eyeIcon ? setShowEyeIcon(eyeCloseIcon) : setShowEyeIcon(eyeIcon));
                    }
                        }>
                    <Image  source={showEyeIcon} />
                </TouchableOpacity>
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
        borderBottomWidth: 1,
        fontSize: 15,
        padding: 0,
        paddingRight: 40,
        borderColor: "#D0C8B9"
    },
    icon: {
        width: 20,
        position: "absolute",
        right: 10,
        top: 5 
    },
    textActive: {
        borderBottomWidth: 2,
        fontSize: 15,
        padding: 0,
        paddingRight: 40,
        borderColor: "#62615E"
    }

}

export default PasswordInput;