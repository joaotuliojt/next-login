import { styled } from "../../../../stitches.config";

export const Container = styled("main", {
  height: "100vh",
  width: "100%",
  display: "grid",
  placeItems: "center",
  fontFamily: "$sansSerif",
  background: "$black",
  color: "#FFF",
  span: {
    color: "$blue"
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px"
  }
})
export const Profile = styled("main", {
  width: "120px",
  height: "120px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "50%"
})

export const Button = styled("button", {
  padding: "16px 0",
  height: "50px",
  width: "200px",
  textTransform: "uppercase",
  border: "none",
  outline: "none",
  borderRadius: "5px",
  fontSize: "$2",
  cursor: "pointer",
  transition: "all .2s ease",
  color: "#FFF",
  fontWeight: "700",
  fontFamily: "$sansSerif",
  "&:hover": {
    filter: "brightness(0.8)"
  },
  variants: {
    withIcon: {
      true: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px"
      }
    },
    typeButton: {
      primary: {
        backgroundColor: "$green",
      },
      secondary: {
        backgroundColor: "$black",
      }
    }
  }
})