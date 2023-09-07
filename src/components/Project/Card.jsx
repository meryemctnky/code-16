import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useFavorites, useProject } from '../../contexts';

const ProjectCard = (props) => {
  const { _id, title, img, desc, openModal } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const { setModalData } = useProject();
  const { addItem } = useFavorites();
  const navigate = useNavigate();

  const seeMore = () => {
    navigate(`/projects/${_id}`, { replace: true });
    const projectData = {
      _id,
      title,
      img,
      desc,
    };
    setModalData(projectData);
    openModal();
  };

  const handleClick = () => {
    addItem(title);
    setIsFavorite(true);
  };

  const favoriteButtonClass = isFavorite
    ? 'btn btn-danger rounded-circle text-white float-end border shadow-sm'
    : 'btn btn-white rounded-circle text-danger float-end border shadow-sm';

  return (
    <>
      <div className='card custom-card zoom-in box-shadow'>
        <Link to='/' className='text-decoration-none'>
          <img src={img} className='card-img-top img-fluid object-fit-cover' alt={name} />
        </Link>
        <div className='card-body d-flex flex-column justify-content-between'>
          <h5 className='fw-bold'>{title}</h5>
          <p className='card-text fw-light'>{desc.length > 100 ? `${desc.slice(0, 130)}...` : desc}</p>
          <div className='flex flex-column '>
            <button className='btn seeMore-btn' onClick={() => seeMore()}>
              See More
            </button>
            <button className={favoriteButtonClass} onClick={handleClick}>
              <FiHeart className='fs-5' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
