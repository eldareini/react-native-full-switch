import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, I18nManager } from 'react-native';
import { PropTypes } from 'prop-types';
const { isRTL } = I18nManager;

const Switch = ({
    isOn,
    onChange,
    trackWidth,
    trackHeight,
    curserWidth,
    curserHeight,
    space,
    disable,
    opacity,
    trackOnColor,
    trackOffColor,
    vertical,
    text,
    reversed,
    textStyle,
    trackStyle,
    curserOnColor,
    curserOffColor,
    curserStyle,
    disableOnCurserColor,
    disableOffCurserColor,
    duration,
    disableOnTrackColor,
    disableOffTrackColor,
    renderChildCurser }) => {





    const endValue = vertical ? (trackHeight - curserHeight) - space : (trackWidth - curserWidth) - space
    const startPoint = reversed ? isOn ? endValue : space : isOn ? space : endValue

    const animation = useRef(new Animated.Value(startPoint)).current

    useEffect(() => {

        const toValue = reversed ? isOn ? space : endValue : isOn ? endValue : space;

        Animated.timing(animation, { toValue, duration, useNativeDriver: true }).start();

    }, [isOn]);

    const handlePress = () => {
        if (!disable)
            onChange(!isOn)
    }




    return <TouchableOpacity activeOpacity={opacity} onPress={handlePress}>
        <View
            style={[
                {
                    borderRadius: trackWidth / 2,
                    justifyContent: "center"
                },
                trackStyle,
                {
                    width: trackWidth,
                    height: trackHeight,
                    backgroundColor: isOn ?
                        disable ? disableOnTrackColor : trackOnColor
                        : disable ? disableOffTrackColor : trackOffColor,
                }
            ]}>
            <Text style={[{ textAlign: 'center', transform: [{ rotate: vertical ? '90deg' : '0deg' }] }, textStyle]}>{text}</Text>
            <Animated.View
                style={
                    [
                        styles.circleStyle,
                        { borderRadius: curserWidth / 2 },
                        curserStyle,

                        vertical ? { transform: [{ translateY: animation }], top: 0 } : isRTL ? { transform: [{ translateX: animation }], right: 0 } : { transform: [{ translateX: animation }], left: 0 },
                        {
                            backgroundColor: isOn ?
                                disable ? disableOnCurserColor : curserOnColor
                                : disable ? disableOffCurserColor : curserOffColor,
                            width: curserWidth,
                            height: curserHeight,
                            position: 'absolute'
                        },

                    ]}
            >
                {renderChildCurser}
            </Animated.View>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    circleStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        elevation: 1.5,
        alignSelf: 'center',
        backgroundColor: 'white',
    }

});

Switch.propTypes = {
    isOn: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    trackWidth: PropTypes.number,
    trackHeight: PropTypes.number,
    curserWidth: PropTypes.number,
    curserHeight: PropTypes.number,
    space: PropTypes.number,
    disable: PropTypes.bool,
    opacity: PropTypes.number,
    trackOnColor: PropTypes.string,
    trackOffColor: PropTypes.string,
    vertical: PropTypes.bool,
    text: PropTypes.string,
    reversed: PropTypes.bool,
    textStyle: PropTypes.object,
    trackStyle: PropTypes.object,
    curserOnColor: PropTypes.string,
    curserOffColor: PropTypes.string,
    curserStyle: PropTypes.object,
    disableOnCurserColor: PropTypes.string,
    disableOffCurserColor: PropTypes.string,
    duration: PropTypes.number,
    disableOnTrackColor: PropTypes.string,
    disableOffTrackColor: PropTypes.string,
    renderChildCurser: PropTypes.element
}

Switch.defaultProps = {
    isOn: false,
    onChange: () => { },
    trackWidth: 40,
    trackHeight: 24,
    curserWidth: 20,
    curserHeight: 20,
    space: 3,
    disable: false,
    opacity: 0.8,
    trackOnColor: "rgb(78,209,100)",
    trackOffColor: "rgb(223,223,223)",
    vertical: false,
    text: '',
    reversed: false,
    textStyle: {},
    trackStyle: {},
    curserOnColor: 'white',
    curserOffColor: 'white',
    curserStyle: {},
    disableOnCurserColor: "rgb(233,233,233)",
    disableOffCurserColor: "rgb(233,233,233)",
    duration: 500,
    disableOnTrackColor: "rgba(78,209,100, 0.6)",
    disableOffTrackColor: "rgba(223,223,223,0.6)",
    renderChildCurser: <></>
}





export default Switch