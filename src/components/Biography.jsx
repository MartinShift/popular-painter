import PropTypes from 'prop-types';

function Biography({ artistName, portraitPath, description, history }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{artistName}</h1>
            <img className="w-64 h-64 object-cover mb-4" src={portraitPath} alt="Artist Portrait" />
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="mb-4">{description}</p>
            <h2 className="text-xl font-bold mb-2">History</h2>
            <p>{history}</p>
        </div>
    );
}

Biography.propTypes = {
    artistName: PropTypes.string.isRequired,
    portraitPath: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired
};

export default Biography;
