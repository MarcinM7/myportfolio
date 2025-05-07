import { useNavigate } from "react-router-dom";

export default function Project() {
  const navigate = useNavigate();
    return (
    <>

      <h1>Projekty</h1>

      <div className="Section-wrapper">
      
        <section className="project-section" onClick={() =>  navigate('/js-projects')}>
          <div>
            <img src="./src/assets/JavaScript-logo.png"></img>
          </div>
          <article>Poznaj moc czystego JavaScriptu! W tej sekcji prezentuję projekty zbudowane bez żadnych frameworków
           – tylko solidny, ręcznie napisany kod JS. Od interaktywnych aplikacji
            po zaawansowane rozwiązania webowe, każdy projekt demonstruje 
            możliwości natywnego języka skryptowego, który napędza współczesną sieć.
           </article>
        </section>
        
        <section>
          <div>
            <img src="./src/assets/vue-logo.png" />
          </div>
          <article>
            <a>Odkryj elegancję Vue.js! Ta kolekcja projektów pokazuje, 
              jak wykorzystuję ten intuicyjny framework do tworzenia responsywnych, 
              wydajnych i pięknych interfejsów użytkownika. Dzięki reaktywnemu podejściu i komponentowej architekturze Vue.js,
              aplikacje te łączą nowoczesne praktyki programistyczne z płynnym doświadczeniem użytkownika.</a>
          </article>
        </section>

        <section>
          <div>
            <img src="./src/assets/react-logo.png" />
          </div>
          <article>
            <a>Zanurz się w ekosystemie React! Tutaj znajdziesz moje najbardziej dynamiczne projekty
               wykorzystujące najpopularniejszy framework frontendowy.
               Od zaawansowanych aplikacji SPA po progresywne aplikacje webowe – każda implementacja 
               demonstruje potencjał komponentowego podejścia React do budowania interaktywnych interfejsów przyszłości.</a>
          </article>
        </section>

      </div>
      
    </>
)
  }
  