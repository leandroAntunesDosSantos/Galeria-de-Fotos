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
                placeholder="Digite o nome personagem" 
                onChange={handleChange}
            />
            <button type='reset' onClick={handleResetClick}>🗙</button>
        </form>
    );

}




// import './SearchBar.css';
// import { useState } from 'react';

// export default function SearchBar({ onSearch }) {
//     const [text, setText] = useState("");

//     function handleChange(event) {
//         const newText = event.target.value;
//         setText(newText);
//         onSearch(newText); // Chama a função onSearch enquanto digita
//     }

//     function handleResetClick() {
//         setText("");
//         onSearch(""); // Reseta a busca
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         onSearch(text);
//     }

//     return (
//         <form className="photo-search-bar" onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 value={text} 
//                 onChange={handleChange} 
//                 placeholder="Search..." 
//             />
//             <button type="reset" onClick={handleResetClick}>Reset</button>
//             <button type="submit">Search</button>
//         </form>
//     );
// }
