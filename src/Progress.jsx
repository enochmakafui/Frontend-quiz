function Progress({ max, value }) {
  return (
    <div className='progress-container'>
      <progress max={max} value={value} />
    </div>
  );
}

export default Progress;
