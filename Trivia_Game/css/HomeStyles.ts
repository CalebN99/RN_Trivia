import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682B4",
    alignItems: "center",
  },

  header: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    marginTop: 150,
    borderColor: "#1F4E78",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    width: 150,
  },
  picker: {
    height: 5,
    width: 300,
    margin: 5,
  },
  diff_container: {
    color: "white",
    textAlign: "center",
    marginTop: 200,
  },
  difficulty: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    borderColor: "#1F4E78",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
});
