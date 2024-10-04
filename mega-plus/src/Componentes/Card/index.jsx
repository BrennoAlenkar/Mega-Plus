import './Card.css'

const Card = () => {
    return (
        <section className='card'>
        <img className='card-img' src="/imagens/tv.png" alt="Imagem de uma tv" />
        <img src="/imagens/computador.png" alt="Imagem de um computador" />
        <img src="/imagens/celular.png" alt="Imagem de um celular" />
        </section>
    )
}

export default Card