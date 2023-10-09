import React from 'react'
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet, Text } from 'react-native';

export default function loaders() {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(255,255,255,0.75)"
            source={require("../assets/loading.json")}
            animationStyle={styles.lottie}
            speed={100}
        >
            <Text>Loding...</Text>
        </AnimatedLoader>
    );
}
const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
    }
});