const EditTimer = props => {
  return (
    <>
      <input
        type='number'
        min="0"
        id='minutes'
        aria-label='Minutes'
        defaultValue={props.minutes}
        onChange={e => props.setMinutes(e.target.value)}
      />
      {/* <span id='minutes'>{props.minutes < 10 ? `0${props.minutes}` : props.minutes}</span> */}
      <span>:</span>
      <input
        type='number'
        min="0"
        id='secondes'
        aria-label='Secondes'
        defaultValue={props.secondes}
        onChange={e => props.setSecondes(e.target.value)}
      />
      {/* <span id='secondes'>{props.secondes < 10 ? `0${props.secondes}` : props.secondes}</span> */}
    </>
  );
};

export default EditTimer;
