import styled from "styled-components"
/*
corresponding styled component for the Header component
we import this into our regular Header component NOT INTO APP
note the capitalized styled component important!
we can also nest within this block: see the 
 h1{
      color:blue;
  }
we can even add states with the & representing 'this' element:
  &:hover{
      background-color:green;
  }
similar to sass

passing in props?access it via 'template literals variable' - background:${props=>props.bg}; or even destructure with {bg}=>bg

themes?styles that you want in a global space that can be easily changed
we first import theme provider in App we set up a theme object and then we can access it here VIA PROPS as long as the 'real' component is wrapped within the provider eg  ${({theme}) => theme.colors.header };
*/
const StyledHeader = styled.header`
  background-color: ${({theme}) => theme.colors.header };
  padding: 40px 0;
`

export { StyledHeader }
//you could put more than one styled component in here as long as you export each one, eg all the header items could be styled in here.
//like a button that takes props but can appera as different colors dependeant on props
//flex container/ container is a good styled compnent idea with & > div,&>ul{flex:1};
//main goal as seen as not using classes we can still style html nested element remember
//media quaries work fine, we can even put a pixel value in to theme and pull it down eherever we need
//nice to have a json of text content/pics that we can map through and create cards for each
//we can use props and even numbered cards to get alternat image text styles foe eahc by having the function fro eeven values as props
// we can use install react-icons imprt from react-icons/fa then use FaTwitter in brackets we can then use as single bracket components