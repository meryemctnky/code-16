import { categories } from '../../constants';

const Categories = () => {
  return (
    <section className='categories container'>
      <div className='row g-4 py-4 row-cols-1 row-cols-sm-3 row-cols-lg-6 text-center'>
        {categories.map((categorie, index) => (
          <div className='categorie col fade-left py-4' key={index}>
            <div className='d-inline-flex align-items-center justify-content-center fs-4 mb-3'>{categorie.icon}</div>
            <h5 className='fs-5 text-body-emphasis'>{categorie.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
