import { Header, Body } from "../main/styles";

function Main() {
  return (
    <>
      <Body>
        <Header>
          <ul className="list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Portifólio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </Header>
        <div>
          <h1>HOME</h1>
          <h2>Criação de sites e lojas E-Commerce</h2>
          <p>
            Desenvolvimento de lojas virtuais para pequenas startups com
            tecnologias e qualidades de grandes empresas brasileiras. Arquitetura
            Search Engine Optimization (SEO) voltada para os padrões do Google,
            onde faz com que o seu site e a sua loje ganhem mais visibilidade e
            acesso.
          </p>
        </div>
        <div>
          <h1>MINHAS REDES SOCIAIS</h1>
          <h2>Quem sou eu?</h2>
          <p>
            Meu nome é Lucas Pereira, sou estudante de Ciência da Computação na
            Universidade de Brasília, Trainee na CJR e Professor de inglês para
            crianças de 2 a 5 anos de idade. Sou entusiasta da área de segurança
            da informção e busco estar sempre me atualizando e aprendendo novas
            habilidades e tecnologias. Iniciei esse projeto de desenvolver um
            portfólio pessoal para falar um pouco sobre o meu dia-a-dia e trazer
            para perto quem não tem a chance de me encontrar pessoalmente em
            momentos oportunos, também criei para obter e colocar em práticas
            novos conhecimentos que são de altíssima importância para um
            profissional de desenvolvimento web em geral.
          </p>
          <h2>Quer falar comigo?</h2>
          <div>
            <h1>Icones de redes sociais</h1>
          </div>
        </div>
        <div>
          <h1>PORTIFÓLIO</h1>
          <div>
            <h2>Projetos</h2>
          </div>
        </div>
        <div>
          <h1>Contato</h1>
          <p>Envie uma mensagem</p>
          <p>WhatsApp: (61) 99501-4366</p>
          <p>lucaspework@gmail.com</p>
          <p>Instagram - @_lucsap</p>
        </div>
        <footer>© Todos os direitos reservados - Lucas Pereira</footer>
      </Body>
    </>
  );
}

export default Main;