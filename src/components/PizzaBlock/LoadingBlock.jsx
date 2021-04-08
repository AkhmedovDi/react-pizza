import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={260}
    height={460}
    viewBox="0 0 260 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="126" r="118" /> 
    <rect x="0" y="261" rx="0" ry="0" width="280" height="24" /> 
    <rect x="0" y="303" rx="10" ry="10" width="280" height="84" /> 
    <rect x="-2" y="405" rx="11" ry="11" width="100" height="44" /> 
    <rect x="146" y="404" rx="11" ry="11" width="120" height="44" />
  </ContentLoader>
)

export default MyLoader