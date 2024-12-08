import './App.css'
export function App (){
    return (
        <article className='tw-followCard'>
            <header>
                <img src="/img/michipro.png" alt="Wizard" />
                <div>
                    <strong>Wizard</strong>
                    <span>@Wizard</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}