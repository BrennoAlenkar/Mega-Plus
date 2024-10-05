import './Card.css'

const Card = () => {
    return (
        <section className='card'>
            <h3>Disponível nos seus dispositivos favoritos</h3>
            <div className='rodade-card'>
                <div>
                    <img src="/imagens/tv.png" alt="Imagem de uma tv" />
                    <h4>TV</h4>
                </div>
                <div>
                    <img src="/imagens/computador.png" alt="Imagem de um computador" />
                    <h4>Computadores</h4>
                </div>
                <div>
                    <img src="/imagens/celular.png" alt="Imagem de um celular" />
                    <h4>Celulares e tablets</h4>
                </div>
            </div>
        </section>
    )
}

export default Card