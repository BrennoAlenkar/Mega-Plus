import './Sessao.css';

const Sessao = ({ imagem, titulo, descricao, imagemPosicao, children  }) => {
    return (
        <section className='sessao'>
            {imagemPosicao === 'left' && <img src={imagem} alt="Foto de um computador" />}
            <div className='sessao-textos'>
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                {children}
            </div>
            {imagemPosicao === 'right' && <img src={imagem} alt="Foto de um computador"  />}
        </section>
    );
}

export default Sessao;