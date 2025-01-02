import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import propTypes from 'prop-types';

const MyButton = ({title = "default", ...props}) => {
    // props.title = 'xxx';
    console.log(props);
    return (
        <TouchableOpacity
            style = {{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => alert("Click!!")}>
            
            <Text style={{fontSize: 24}}>
                {props.children || title}</Text>
        </TouchableOpacity>
    );
};

// MyButton.defaultProps = {
//     title: 'Btn',
// };
MyButton.propTypes = {
    title: propTypes.string,
};

export default MyButton;