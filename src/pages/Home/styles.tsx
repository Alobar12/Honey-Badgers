import { StyleSheet } from "react-native";
import theme from "@Theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    locationButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: theme.spacing.l,
        padding: 5,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: theme.colors.orange
    },
    locationContainer: {
        width: "100%",
        paddingHorizontal: theme.spacing.s
    },
    bottomSheetStyle: {
        backgroundColor: theme.colors.white,
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationTitle: {
        fontSize: 16,
        fontFamily: theme.fonts.semiBold,
        color: theme.colors.darkGray
    },
    ascStyle: {
        flex: 1,
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.orange,
        padding: theme.spacing.s
    },
    descStyle: {
        flex: 1,
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.orange,
        marginRight: theme.spacing.s,
        padding: theme.spacing.s
    },
    sortContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: theme.spacing.s,
        marginBottom: theme.spacing.m
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default styles