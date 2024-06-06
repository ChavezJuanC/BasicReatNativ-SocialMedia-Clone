import { StyleSheet, StatusBar, SafeAreaView, Platform } from "react-native";
import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import NavBar from "./components/NavBar";
import Post from "./components/Post";

export default function App() {
    const [fetchedData, setFetchedData] = useState([]);

    const fetchPosts = async () => {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const data = await res.json();
        setFetchedData(data);
        console.log(fetchedData);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <SafeAreaView style={Styles.mainContainer}>
            <NavBar />
            <CreatePost />
            <Post
                userName={"Bryant Martinez"}
                postBody={
                    "Post body would go here!Post body would go here!Post bodywould go here!Post body would go here!Post body would gohere!"
                }
            />
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
