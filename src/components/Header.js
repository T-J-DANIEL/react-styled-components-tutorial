import { StyledHeader } from "./styles/Header.styled"
//note the capitalized styled component important!
// passing in props? pass it in usual way eg bg="red" and access within via template literals
export default function Header(){
    return (
      <StyledHeader >
          <h1>Hubble</h1>
      </StyledHeader>
    )
}