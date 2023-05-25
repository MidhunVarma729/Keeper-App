import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App(){
    return (
        <main>
            <Header />
            {notes.map(noteItem => 
                <Note 
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
                )
            }
            <Footer />
        </main>
    )
}

export default App;