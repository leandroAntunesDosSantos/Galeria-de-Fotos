import './SearchBar.css';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [text, setText] = useState("");

    function handleChange(event) {
        const novoTexto = event.target.value;
        setText(novoTexto);
        onSearch(novoTexto);
    }

    function handleResetClick() {
        setText("");
        onSearch("");
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
                placeholder="Digite o nome: " 
                onChange={handleChange}
            />
            <button type='reset' onClick={handleResetClick}>🗙</button>
        </form>
    );
}
