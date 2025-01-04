import './Photo.css';

export default function Photo({props}) {
    return (
        <li className="photo-card">
            <div>
                <img src={props.imagem} alt={props.alt} />
            </div>
            <div className="photo-info">
                <h2>{props.titulo}</h2>
            </div>
        </li>
    );
}

