import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from '../components';
import { useFavorites } from '../contexts';

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();

  return (
    <div className='favorites'>
      <main className='container'>
        <div className='row'>
          <div className='col my-3'>
            <h2 className='fw-bold mb-2 py-2 text-center'>FAVORITES</h2>
            {favorites.length > 0 ? (
              favorites.map((item, i) => <Table key={i} item={item} i={i} />)
            ) : (
              <div className='d-flex flex-column align-items-center justify-content-center p-5 border'>
                <p className='lead pt-5'>Your favorites is empty!</p>

                <button
                  className='btn btn-primary btn-lg px-4 mt-2 mb-5'
                  onClick={() => {
                    navigate('/projects');
                  }}
                >
                  Go Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Favorites;
