import { StyleSheet } from "react-native";
import theme from "@Theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: theme.spacing.l,
    backgroundColor: theme.colors.orange,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#6a6972",
    alignItems: "center",
    marginBottom: theme.spacing.l,
  },
  imageStyle: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  addCartButton: {
    alignItems: "flex-end",
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainerStyle: {
    width: "100%",
  },
  descriptionContainer: {
    backgroundColor: theme.colors.white,
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8
  },
  title: {
    fontFamily: theme.fonts.semiBold,
    fontSize: 16,
    color: theme.colors.black
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  detailsButtonContainer: {
    flex: 1
  },
  addedCartStyle: {
    fontFamily: theme.fonts.semiBold,
    fontSize: 16,
    color: theme.colors.black
  },
  addCartStyle: {
    fontFamily: theme.fonts.semiBold,
    fontSize: 16,
    color: theme.colors.white
  }
});

export default styles;
