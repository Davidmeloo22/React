# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- 
import { useState } from "react";

export default function Main() {
  // Funções tradicionais
  // function Mensagem() {
  //   console.log("Sou uma função tradicional");
  // }

  // Mensagem();
  // Arrow functions ou Funções de Flecha
  // const ExibirMsg = () =>  console.log("Sou outra arrow function")
  // ExibirMsg();

  // const Soma = (valor1, valor2) => {
  //   console.log(valor1 + valor2)
  //   console.log(valor1 * valor2)
  // }
  // Soma(45, 67);

  // const ExibirNome = (nome) => console.log(`OI MUITO PRAZER ME CHAMO ${nome}`);
  // ExibirNome("Silas");

  // Hooks -> São funcionalidades(métodos) que já vem por padrão do próprio React, essas funcionalidades vão facilitar a escrita da nossa lógica e a interação do usuário com a página, cada HOOK tem a sua determinada função.

  // useState -> Ele é um hook responsável por guardar um estado(dado) e atualizar esse mesmo estado(dado ou uma informação)...nome de usuário, telefone, cep, cpf, rg, cartão de crédito, idade, senha....

  // Contador, para mostrar pop-up, uma tela de login, para modificar estilo, animação, criar uma calculadora, relógio, lista de tarefas, uma página de filmes.....

  // Sintaxe
  // nome -> é o nosso estado, ele que irá guardar a nossa infomação
  // setNome -> é o método responsável por mudar o estado nome
  const [nome, setNome] = useState("");

  const [fruta, setFruta] = useState("uva");

  const MudarFruta = () => setFruta("Laranja");

  const MudarNome = () => setNome("Fernanda");

  return (
    <main>
      <h1>{nome}</h1>
      <button onClick={MudarNome}>Trocar nome</button>
      <h2>{fruta}</h2>
      <button onClick={MudarFruta}>Mudar Fruta</button>
    </main>
  );
}
 -->
