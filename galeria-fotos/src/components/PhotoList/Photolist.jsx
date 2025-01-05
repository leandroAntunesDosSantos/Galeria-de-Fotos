import './PhotoList.css';
import { useState } from 'react';
import dbPhotos from '../../dbFotos/dbFotos';
import Photo from '../Photo/Photo';
import SearchBar from '../SearchBar/SearchBar';

export default function PhotoList() {
    const [buscarFotos, setBuscaFotos] = useState(dbPhotos);
    const [textoBusca, setTextoBusca] = useState("");

    function handleSearch(text) {
        setTextoBusca(text);
        const busca = dbPhotos.filter((photo) => {
            return photo.titulo.toLowerCase().includes(text.toLowerCase());
        });
        setBuscaFotos(busca);
    }

    return (
        <>
        <div className="container mt20">
            <SearchBar onSearch={handleSearch} />
        </div>
        <main id="photo" className="container mt20">
            <ul className="photo-cards mb20 mt20">
                {buscarFotos.length > 0 ? (
                    buscarFotos.map((photo) => (
                        <Photo 
                            key={photo.id} 
                            props={photo} 
                        />
                    ))
                ) : (
                    <li className='not-found'>Não encontramos nenhuma foto com o título "{textoBusca}"</li>
                )}
            </ul>
        </main>
        </>
    );
}













// export default function PhotoList() {
//     return (
//     <main id="photo" className="container mt20">
//         <SearchBar />
//           <ul className="photo-cards mb20 mt20">
//             {
//                 dbPhotos.map((photo) => (
//                     <Photo 
//                         key={photo.id} 
//                         props={photo} 
//                     />
//             ))}
//           </ul>
//     </main>
//     );
// }