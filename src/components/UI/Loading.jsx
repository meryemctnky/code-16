const Loading = () => {
  return (
    <div className='text-center m-5 p-5'>
      <div className='spinner-border text-success' role='status' style={{ width: '6rem', height: '6rem' }}>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
