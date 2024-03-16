import PropTypes from 'prop-types';

function FamousPainting({ painting }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{painting.name}</h1>
      <img className="w-full object-cover mb-4" src={painting.url} alt={painting.name} />
      <h2 className="text-xl font-bold mb-2">Description</h2>
      <p>{painting.description}</p>
    </div>
  );
}

FamousPainting.propTypes = {
  painting: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FamousPainting;