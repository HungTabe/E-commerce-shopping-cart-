
const LikeButtonComponent = (props) => {
    // eslint-disable-next-line react/prop-types
    const {dataHref} = props
    return (
      <div style={{marginTop: '8px'}}>
        <div className="fb-like" data-href={dataHref} data-width="" data-layout="" data-action="" data-size="" data-share="true"></div>
      </div>
    )
  }
  
  export default LikeButtonComponent