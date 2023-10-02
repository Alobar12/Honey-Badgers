import { StyleSheet } from "react-native";
import theme from "@Theme";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderColor: theme.colors.orange,
        marginBottom: theme.spacing.m,
        backgroundColor: "#f5f5f5",
        paddingBottom: 10
    },
    topContainerStyle: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: theme.spacing.l
    },
    imageStyle: {
        width: 100,
        height: 100
    },
    bottomContainerStyle: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: theme.spacing.l
    },
    counterButtonsStyle: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 8,
        padding: theme.spacing.s
    },
    increaseStyle: {
        fontFamily: theme.fonts.bold,
        fontSize: theme.spacing.xl,
        borderRightWidth: 1,
        paddingRight: 6
    },
    decreaseStyle: {
        fontFamily: theme.fonts.bold,
        fontSize: theme.spacing.xl,
        paddingRight: 4,
        marginLeft: 6
    }
})

export default styles