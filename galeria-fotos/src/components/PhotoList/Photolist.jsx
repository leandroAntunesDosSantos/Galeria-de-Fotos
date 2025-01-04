import './PhotoList.css';
import dbPhotos from '../../dbFotos/dbFotos';
import Photo from '../Photo/Photo';

export default function PhotoList() {
    return (
    <main id="photo" className="container mt20">
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