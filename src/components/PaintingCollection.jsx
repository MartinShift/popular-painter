import 'jquery'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function PaintingCollection({ paintings }) {
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      items={3}
      margin={10}
      nav
    >
      {paintings.map((painting, index) => (
        <div className="item" key={index}>
          <Link to={`/collection/${painting.id}`}>
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">{painting.name}</h1>
              <img className="w-full object-cover mb-4" src={painting.url} alt={painting.name} />
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p>{painting.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </OwlCarousel>
  );
}
PaintingCollection.propTypes = {
    paintings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};
export default PaintingCollection;