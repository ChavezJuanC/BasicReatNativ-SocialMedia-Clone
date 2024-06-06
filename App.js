import {
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Platform,
    FlatList,
    View,
} from "react-native";
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
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <SafeAreaView style={Styles.mainContainer}>
            <NavBar />
            <FlatList
                ListHeaderComponent={
                    <CreatePost
                        postList={fetchedData}
                        setPostList={setFetchedData}
                    />
                }
                data={fetchedData}
                renderItem={({ item }) => (
                    <Post
                        userName={`UserName${item.id}`}
                        postBody={item.body}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
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

/*
Handle overflow, Handle POST request for New Post
*/
