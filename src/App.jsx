import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Biography from './components/Biography';
import FamousPainting from './components/FamousPainting';
import Painting from './components/Painting';
import PaintingCollection from './components/PaintingCollection';
import './index.css';

function App() {

  const painter = {
    name: "Pablo Picasso",
    description: "Pablo Picasso was a Spanish painter, sculptor, printmaker, ceramicist and stage designer who spent most of his adult life in France.",
    history: "Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/9/98/Pablo_picasso_1.jpg",
    pictures: [
      {
        id: 0,
        url: "https://i.guim.co.uk/img/media/fe0c413561537a9da4f9d4394c286516afb0f92c/0_1326_6565_3938/master/6565.jpg?width=465&dpr=1&s=none",
        name: "Owls",
        description: "One of Picasso's most famous works, Owls, was painted in 1907."
      },
      {
        id: 1,
        url: "https://www.sheknows.com/wp-content/uploads/2018/08/mxrnq51xyjnw0h6xxl1g.jpeg",
        name: "Violin",
        description: "Violin is a painting produced by Pablo Picasso in 1912."
      },
      {
        id: 2,
        url: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
        name: "Guernica",
        description: "Guernica is a painting by Pablo Picasso. It was created in response to the bombing of Guernica, a Basque Country village in northern Spain, by German and Italian warplanes at the behest of the Spanish Nationalist forces on 26 April 1937 during the Spanish Civil War."
      }
    ],
    FamousPaintingIndex: 0

  };
  


  return (
    <Router>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
              <NavLink to="/biography" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Biography</NavLink>
              <NavLink to="/famous-painting" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Famous Painting</NavLink>
              <NavLink to="/collection" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Collection</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
      <Route path="/" element={<Biography artistName={painter.name} portraitPath={painter.portrait} description={painter.description} history={painter.history}  />} />
        <Route path="/biography" element={<Biography artistName={painter.name} portraitPath={painter.portrait} description={painter.description} history={painter.history}  />} />
        <Route path="/famous-painting" element={<FamousPainting painting={painter.pictures[painter.FamousPaintingIndex]} />} />
        <Route path="/collection" element={<PaintingCollection paintings={painter.pictures} />} /> 
        <Route path="/paintings/:painting" element={<Painting paintings={painter.pictures} />} />
      </Routes>
    </Router>
  );
}

export default App;