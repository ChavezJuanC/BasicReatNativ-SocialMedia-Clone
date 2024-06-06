import {
    View,
    StyleSheet,
    TextInput,
    Pressable,
    Text,
    Alert,
} from "react-native";
import { useState } from "react";

const CreatePost = ({ setPostList, postList }) => {
    const [isPosting, setIsPosting] = useState(false);
    const [postContent, setPostContent] = useState("");

    const handdlePosting = async () => {
        setIsPosting(true);

        if (postContent.length > 300) {
            setIsPosting(false);
            return Alert.alert(
                "Max Character Limit",
                `You have exceeded the allowed 300 character count by ${
                    postContent.length - 300
                } charters`
            );
        }

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: "Post title",
                    body: postContent,
                    id: postList.length + 1,
                }),
            }
        );

        const newPost = await res.json();
        setPostList([newPost, ...postList]);
        console.log(newPost);
        setPostContent("");
        setIsPosting(false);
    };

    return (
        <View style={Styles.newPostContainer}>
            <TextInput
                style={Styles.newPostTextField}
                multiline
                value={postContent}
                onChangeText={setPostContent}
                placeholder="What's on your mind?"
            />
            <View style={Styles.pressableView}>
                <Pressable style={Styles.postButton} onPress={handdlePosting}>
                    <Text style={Styles.buttonText}>
                        {isPosting ? "Posting..." : "Post"}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    newPostContainer: {
        padding: 20,
    },
    newPostTextField: {
        height: 110,
        borderWidth: 2,
        borderColor: "#303030",
        backgroundColor: "white",
        borderRadius: 10,
        textAlignVertical: "top",
        paddingVertical: 10,
        paddingHorizontal: 8,
        fontWeight: "500",
        fontSize: 15,
    },
    pressableView: {
        flexWrap: "wrap-reverse",
        paddingHorizontal: 6,
        paddingTop: 8,
    },
    postButton: {
        height: 30,
        width: 65,
        borderWidth: 2,
        borderColor: "#303030",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        elevation: 100,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 12,
        flex: 1,
        fontWeight: "700",
    },
});

export default CreatePost;
