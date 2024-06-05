import { View, Image, Text, StyleSheet } from "react-native";

const Post = () => {
    return (
        <View style={Styles.postContainer}>
            <View styl={Styles.userContainer}>
                <>
                    <Image
                        style={Styles.userImg}
                        source={{ uri: "https://picsum.photos/200" }}
                    />
                </>

                <Text style={Styles.userName}>UserName</Text>
            </View>
            <>
                <Text style={Styles.postBody}>Post body would go here!</Text>
            </>
        </View>
    );
};

const Styles = StyleSheet.create({
    postContainer: {
        borderWidth: 2,
    },
    userContainer: {},
    userImg: { width: 60, height: 60, borderRadius: 30
     },
    userName: {},
    postBody: {},
});

export default Post;
