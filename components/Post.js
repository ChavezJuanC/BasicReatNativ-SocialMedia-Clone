import { View, Image, Text, StyleSheet } from "react-native";

const Post = ({ userName, postBody }) => {

    return (
        <View style={Styles.postContainer}>
            <View style={Styles.userContainer}>
                <Image
                    style={Styles.userImg}
                    source={{ uri: "https://picsum.photos/200" }}
                />
                <Text style={Styles.userName}>{userName}</Text>
            </View>
            <>
                <Text style={Styles.postBody}>{postBody}</Text>
            </>
        </View>
    );
};

const Styles = StyleSheet.create({
    postContainer: {
        maxHeight: 250,
        borderColor: "black",
        backgroundColor: "white",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        overflow: "scroll"
    },
    userContainer: {
        flexDirection: "row",
    },
    userImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    userName: {
        textAlignVertical: "center",
        padding: 15,
        fontSize: 17,
        fontWeight: "500",
    },
    postBody: {
        padding: 10,
    },
});

export default Post;
