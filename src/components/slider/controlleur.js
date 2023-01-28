import "./controlleur.scss";

export const SampleNextArrow = (props) => {
  const {onClick} = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}

export const SamplePrevArrow = (props) => {
  const {onClick} = props;
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}