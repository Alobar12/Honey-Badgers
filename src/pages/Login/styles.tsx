import { StyleSheet } from "react-native";
import theme from "@Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: theme.spacing.l,
        backgroundColor: theme.colors.white
    },
    usernameStyle: {
        borderWidth: 1,
        borderColor: theme.colors.darkGray,
        borderRadius: 4,
        width: "100%",
        padding: theme.spacing.l,
        marginBottom: theme.spacing.l,
        color: theme.colors.black
    },
    buttonStyle: {
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: theme.colors.orange,
        padding: theme.spacing.l
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: theme.spacing.xxl,
        marginTop: theme.spacing.l
    },
    buttonTitle: {
        fontSize: 16,
        fontFamily: theme.fonts.bold,
        color: theme.colors.white
    }
})

export default styles