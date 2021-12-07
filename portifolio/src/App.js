import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="interface">
        <header id="menu">
            <ul>
              <li><a href="#section1" target="_self" rel="next">Home</a></li>
              <li><a href="#section2" target="_self" rel="next">Sobre</a></li>
              <li><a href="#section3" target="_self" rel="next">Portfólio</a></li>
              <li><a href="blog/index.html" target="_self" rel="next">Blog</a></li>
              <li><a href="#section4" target="_self" rel="next">Contato</a></li>
            </ul>
        </header>
        <div id="section1">
            <h1 id="first_h1">HOME</h1>
            <h2>Criação de sites e lojas E-Commerce</h2>
            <p>Desenvolvimento de lojas virtuais para pequenas startups com tecnologias e qualidades de grandes empresas brasileiras. Arquitetura Search Engine Optimization (SEO) voltada para os padrões do Google, onde faz com que o seu site e a sua loje ganhem mais visibilidade e acesso.</p>
        </div>
        <div id="section2">
            <h1>MINHAS REDES SOCIAIS</h1>
            <h2>Quem sou eu?</h2>
            <img src="imagens/Eu-150.png" alt="Minha foto"/>
            <p>Meu nome é <strong>Lucas Pereira</strong>, sou estudante de Ciência da Computação na Universidade de Brasília, Trainee na CJR e Professor de inglês para crianças de 2 a 5 anos de idade. Sou entusiasta da área de segurança da informção e busco estar sempre me atualizando e aprendendo novas habilidades e tecnologias. Iniciei esse projeto de desenvolver um portfólio pessoal para falar um pouco sobre o meu dia-a-dia e trazer para perto quem não tem a chance de me encontrar pessoalmente em momentos oportunos, também criei para obter e colocar em práticas novos conhecimentos que são de altíssima importância para um profissional de desenvolvimento web em geral.</p>
            <h2>Quer falar comigo?</h2>
            <ul>
                <li><a href="https://github.com/lucsap" target="_blank" rel="external"><img src="imagens/icone-github-blue.png" alt="GitHub Icon"/> /lucsap</a> Acessa meu repositório no GitHub</li>
                <li><a href="https://www.instagram.com/_lucsap/?hl=pt-br" target="_blank" rel="external"><img src="imagens/icone-instagram-blue.png" alt="Instagram Icon"/> /_lucsap</a> Me segue lá in Instagram</li>
                <li><a href="https://www.linkedin.com/in/lucsap/" target="_blank" rel="external"><img src="imagens/icone-linkedin-blue.png" alt="LinkedIn Icon"/> /lucsap</a> Me adiciona lá no LinkedIn</li>
                <li><a href="https://twitter.com/_lucsap" target="_blank" rel="external"><img src="imagens/icone-twitter-blue.png" alt="Twitter Icon"/> /_lucsap</a> Me segue lá no Twitter</li>
                <li><a href="https://www.facebook.com/lucsapp/" target="_blank" rel="external"><img src="imagens/icone-facebook-blue.png" alt="Facebook Icon"/> /lucsapp</a> Me acompanha lá no Facebook</li>
            </ul>
        </div>
        <div id="section3">
          <h1>PORTFÓLIO</h1>
          <picture/>
            <source media="(min-width:790px)" srcset="imagens/closed-800.jpg"/>
            <source media="(min-width:394px)" srcset="imagens/closed-440.jpg"/>
            <img src="imagens/closed-440.jpg" alt="Foto Em-breve" style="width: auto;"/>
          <picture/>
        </div>
        <div id="section4">
          <h1>CONTATO</h1>
          <div style="margin: auto; max-width: 400px; font-size: 22px;">
            <p>Envie uma mensagem</p>
            <a style="text-decoration: none; font-size: 17px;" href="https://wa.me/5561995014366" target="_blank">WhatsApp: (61) 99501-4366</a>
            <a style="text-decoration: none; font-size: 17px;" href="mailto:lucaspework@gmail.com">lucaspework@gmail.com</a>
            <br/>
            <a style="text-decoration: none; font-size: 15px;" href="https://instagram.com/_lucsap" target="_blank">Instagram - @_lucsap</a>
          </div>
        </div>
        <footer id="rodape">
          <p>&copy; Copyright 2021 - by Lucas Pereira</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
