import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";
import CreatePost from "./components/CreatePost";
import NavBar from "./components/NavBar";

export default function App() {
    return (
        <SafeAreaView style={Styles.mainContainer}>
            <NavBar />
            <CreatePost />
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#f5f5f5",
    },
});
