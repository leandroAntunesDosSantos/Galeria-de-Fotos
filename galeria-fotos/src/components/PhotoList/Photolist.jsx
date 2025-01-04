import './PhotoList.css';
import dbPhotos from '../../dbFotos/dbFotos';
import Photo from '../Photo/Photo';
import SearchBar from '../SearchBar/SearchBar';

export default function PhotoList() {
    return (
    <main id="photo" className="container mt20">
        <SearchBar />
          <ul className="photo-cards mb20 mt20">
            {
                dbPhotos.map((photo) => (
                    <Photo 
                        key={photo.id} 
                        props={photo} 
                    />
            ))}
          </ul>
    </main>
    );
}