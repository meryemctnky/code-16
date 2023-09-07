const Slider = () => {
  return (
    <section>
      <div id='carouselExampleIndicators' className='carousel slide'>
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='https://akillisehir.bursa.bel.tr/wp-content/uploads/2018/02/AKILLI-SEHIR-BURSA-WEB-BANNER-yazili-3.jpg'
              className='d-block w-100'
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://www.zorlu.com.tr/akillihayat2030/assets/images/blog/Zorlu_Akilli_Sehirlerin_12_Ozelligi_970x548.jpg'
              className='d-block w-100'
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img
              src='https://www.karel.com.tr/sites/default/files/pictures/akilli-sehir-guvenlik-a.jpg'
              className='d-block w-100'
              alt='...'
            />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </section>
  );
};

export default Slider;
