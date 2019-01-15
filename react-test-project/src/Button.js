import React from "react";

function Button({children, style}, ...props) {
  return (
    <button style={style} {...props}>
      {children}
    </button>
  )
}

export default Button;

const styleButton = style => props => (
  <Button style={style}{...props}>
    {props.children}
  </Button>
)

// export const OkButton = () => (
//   <Button backgroundColor="green">
//     Ok
//   </Button>
// );

export const OkButton = styleButton({
  backgroundColor: "green",
  fontSize: "20px"
})
export const NotOkButton = styleButton({
  backgroundColor: "red",
})
