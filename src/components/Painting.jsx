import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function Painting({ paintings }) {
  const { paintingId } = useParams();
  const painting = paintings.find(p => p.id === paintingId);

  if (!painting) {
    return <p>Painting not found</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{painting.name}</h1>
      <img className="w-full object-cover mb-4" src={painting.url} alt={painting.name} />
      <h2 className="text-xl font-bold mb-2">Description</h2>
      <p>{painting.description}</p>
    </div>
  );
}


Painting.propTypes = {
  paintings: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
      })
  ).isRequired,
};


export default Painting;