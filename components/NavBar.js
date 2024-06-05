import { View, Text, StyleSheet } from "react-native";

const NavBar = () => {
    return (
        <View style={Styles.navView}>
            <Text style={Styles.navText}>TheBookSpace</Text>
            <Text style={Styles.navText}>////</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    navView: {
        borderWidth: 5,
        borderColor: "#3b5998",
        backgroundColor: "#3b5998",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    navText: {
        color: "white",
        fontSize: 20,
        fontWeight: "900",
    },
});

export default NavBar;
