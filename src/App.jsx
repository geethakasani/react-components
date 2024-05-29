import './App.css';

import GallaryFooter from './components/GallaryFooter';
import GalleryHeader from './components/GalleryHeader';
import GallaryBody from './components/GallaryBody';

function App() {
  return (
    <div>
     <GalleryHeader/>
      <div>
       <GallaryBody/>
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
