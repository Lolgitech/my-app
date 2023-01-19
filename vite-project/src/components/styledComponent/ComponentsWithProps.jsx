function ComponentWithPropsVariationA(props) {
    return (
        <header className="header">
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        </header>
    )
}

function ComponentWithPropsVariationB(props) {
//javascript destructuring
const {title, subTitle} = props

return (
    <header className="header">
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
    </header>
)
}
function ComponentWithPropsVariationC({
 
  title, 
  subTitle 
}) {

  return (
    <header className="header">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  );
}

export default ComponentWithPropsVariationA
