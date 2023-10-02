import { StyleSheet } from "react-native"
import theme from "@Theme"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    descriptionContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: theme.spacing.xl
    },
    descriptionStyle: {
        fontSize: 16,
        fontFamily: theme.fonts.semiBold
    }
})

export default styles