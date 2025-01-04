import './SearchBar.css';
import { useState } from 'react';



export default function SearchBar({ onSearch }) {
    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleResetClick() {
        setText("");
        onSearch(text);
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSearch(text);
    }

    return (
        <form className="photo-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input
            value={text}
                type="text"
                placeholder="Digite o titulo do Post" 
                onChange={handleChange}
            />
            <button onClick={handleResetClick} type='reset'>🗙</button>
        </form>
    );

}
