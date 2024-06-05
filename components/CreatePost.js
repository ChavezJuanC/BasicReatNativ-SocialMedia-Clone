import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import { useState } from "react";

const CreatePost = () => {
    const [isPosting, setIsPosting] = useState(false);
    const [postContent, setPostContent] = useState("");

    const handdlePosting = () => {
        setIsPosting(true);
        console.log(postContent);

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
        padding: 6,
    },
    postButton: {
        height: 30,
        width: 65,
        borderWidth: 2,
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
