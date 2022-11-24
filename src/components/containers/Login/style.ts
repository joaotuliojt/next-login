import { styled } from "../../../../stitches.config";

export const Container = styled("main", {
  height: "100vh",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  "@bp1": {
    placeItems: "center",
    gridTemplateColumns: "auto"
  }
})

export const leftContent = styled("div", {
  backgroundColor: "$grayLight",
  display: "grid",
  placeItems: "center",
  "svg": {
    width: "100%"
  },
  "@bp1": {
    display: "none"
  }
})

export const rightContainer = styled("div", {
  paddingBottom: "50px",
  display: "grid",
  placeItems: "center",
  color: "$black",
  ".form-container": {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  ".sign-in": {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  "@bp1": {
    height: "100%"
  }
})

export const FormHeader = styled("header", {
  color: "$black",
  width: "100%",
  fontFamily: "$serif",
  ".welcome": {
    marginBottom: "6px",
    fontWeight: 400,
    fontSize: "$2"
  },
  ".make-login": {
    fontWeight: 700,
    fontSize: "$3",
    marginBottom: "40px"
  }
})

export const Form = styled("form", {
  width: "100%",

})

export const InputContainer = styled("div", {
  label: {
    display: "block",
    fontFamily: "$sansSerif",
    fontWeight: 400,
    marginBottom: "12px"
  },
  input: {
    padding: "16px 20px",
    width: "350px",
    borderRadius: "5px",
    border: "1px solid $grayDark",
    outline: "none"
  },
  "#email": {
    marginBottom: "12px"
  },
  "#password": {
    marginBottom: "30px"
  },
})

export const FormActions = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "26px",
  ".checkbox": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  "#remember": {
    appearance: "none",
    "-webkit-appearance": "none",
    width: "15px",
    height: "15px",
    cursor: "pointer",
    borderRadius: "50%",
    border: "1px solid $grayDark",
    background: "$grayLight",
    verticalAlign: "middle",
    position: "relative",
  },
  "#remember::after": {
    content: "",
    display: "block",
    width: "8px",
    height: "8px",
    backgroundColor: "$black",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    opacity: "0"
  },
  "#remember:checked::after": {
    opacity: 1
  },
  label: {
    color: "$black",
    fontWeight: 400,
    fontFamily: "$sansSerif"
  },
  a: {
    color: "$blue",
    fontWeight: 400,
    fontFamily: "$sansSerif",
  }
})
export const ButtonsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
})

export const Button = styled("button", {
  padding: "16px 0",
  height: "50px",
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

export const Footer = styled("footer", {
  fontFamily: "$sansSerif",
  color: "$black",
  fontSize: "$2",
  a: {
    color: "$blue"
  }
})