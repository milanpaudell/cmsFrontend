
/** const Button = (passedValue) => {
 * console.log(passedValue)
 * return (
 * <button style={{height:"50px",width:"100px",backgroundColor:color}} >{passedValue.title }</button>
 * )
 * }
 */


const Button = (props) => {
    const title = props.title
    const color = props.color
    // const subTitle = props.subTitle
    // const {title} = props
    // const {title,subTitle} = props
 
  return (
   <div style={{border:"1px solid red"}}>
     <button style={{height:"50px",width:"100px",backgroundColor:color}} >{title }</button>
    {/* <p>{subTitle}</p> */}
   </div>
  )
}

export default Button