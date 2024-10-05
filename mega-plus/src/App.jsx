import Botao from "./Componentes/Botao";
import Card from "./Componentes/Card";
import Navegacao from "./Componentes/Navegacao";
import Rodape from "./Componentes/Rodape";
import Sessao from "./Componentes/Sessao";
import Topo from "./Componentes/Topo";

function App() {
  return (
    <>
      <Topo />
      <Navegacao />

      <Sessao
        imagem="/imagens/img.png"
        titulo="Assista do seu jeito"
        descricao="Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de cursos não para de crescer."
        imagemPosicao="left"
      />

      <Sessao
        descricao="Só o Combo+ oferece Alura+ e Alura Língua juntos para você ter acesso a cursos de diversas áreas da tecnologia e aprender inglês ou espanhol, onde e como quiser."
        imagem="/imagens/telas.png"
        imagemPosicao="right"
      >
        <Botao /> {}
      </Sessao>

      <Sessao
        imagem="/imagens/Notebook.png"
        titulo="Baixe seus cursos"
        descricao="Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet."
        imagemPosicao="left"
      />

      <Card />
      <Rodape />
    </>
  );
}

export default App;