const DropdownButton = ({lines}) => {
  return [...Array(parseInt(lines))].map((_, i) => (
    <div className='line' key={i}></div>
  ));
};

export default DropdownButton;
