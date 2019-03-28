===========================
Desenvolvimento de Software
===========================

Este é o Git da disciplina de Desenvolvimento de Software. Aqui será compartilhado o material produzido em sala de aula assim como tarefas, wiki e discussões. Este arquivo contêm informações básicas sobre a disciplina e o plano de ensino do semestre.


Informações básicas
===================

Curso: 
    Engenharia de Software
Professor: 
    Fábio Macêdo Mendes
Disciplina: 
    Desenvolvimento de Software
Semestre/ano: 
    01/2019
Carga horária: 
    60 h
Créditos: 
    04


Ementa
======

- Práticas de programação em ambientes gráficos e lúdicos; 
- Organização e processamento de dados; 
- Introdução à arquitetura de software; 
- Introdução aos conceitos de Engenharia de Software.


Horário das aulas e atendimento
===============================

Aulas teóricas e de exercícios: terças e quintas-feiras às 14h 
Atendimento e monitoria: a definir


Informações importantes
========================

Este curso utiliza GitHub + Google classroom para gerenciar o curso. A comunicação com a turma é feita através do Google Classroom ou por issues no repositório do Github. Habilite a funcionalidade "Watch" no repositório para receber notificações sobre atualizações.

Google Classroom:
    http://classroom.google.com/ - Código de inscrição: 3bkhgg
Github:
    http://github.com/fabiommendes/desenvolvimento-de-software/


Critérios de avaliação
======================

Cada aluno será avaliado com uma nota numérica onde a conversão entre a pontuação e a menção final é feita da forma usual: 9,0pts+: SS, 7,0pts+: MS, 5,0pts+: MM, 3,0pts+: MI e < 3,0 pts II. A distribuição de pontos segue os pesos:

+---------------------+-----+
| Provas              | 30% |
+---------------------+-----+
| Exercícios e testes | 45% |
+---------------------+-----+
| Projeto final       | 25% |
+---------------------+-----+

A nota referente às "provas" é igual à média de duas provas (uma realizada no início do semestre e uma prova substitutiva realizada no final). Os "exercícios" e testes consistem em atividades de programaçãorealizadas em sala de aula individualmente ou em dupla. Finalmente, a nota de projeto se refere a um projeto de software realizado em grupo durante todo o semestre.

A turma será dividida em "coaches" e "trainees", onde os primeiros são alunos matriulados que estão no final do curso e serão responsáveis por coordenar um grupo de trainees no desenvolvimento de um produto de software.


Prova substitutiva e faltas
---------------------------

O curso possui 2 provas, P1 e P2. O(a) estudante que realizar a P1 e optar por não realizar a P2 ficará com uma nota final nas provas igual a 0.80 P1. Caso realize as duas provas, a nota final será igual à média aritmética. No caso de uma falta justificada, a nota final será calculada com base em apenas uma das provas.

O aluno pode faltar até 7 vezes em um semestre. Faltas com justificativa médica não serão abonadas, exceto em casos excepcionais. Os alunos reprovados por falta ficarão com uma menção igual a SR.


Código de ética e conduta
-------------------------

Algumas avaliações serão realizadas com auxílio do computador no laboratório de informática. Todas as submissões serão processadas por um programa de detecção de plágio. Qualquer atividade onde for detectada a presença de plágio será anulada sem a possibilidade de substituição. Não será feita qualquer distinção entre o aluno que forneceu a resposta para cópia e o aluno que obteve a mesma.

As mesmas considerações também se aplicam às provas teóricas e atividades entregues no papel.


Prepare-se
==========

O curso utiliza alguns pacotes e ferramentas para os quais cada estudante deverá providenciar a instalação o mais cedo o possível. O curso requer Python 3.6+ com alguns pacotes instalados e um ambiente de desenvolvimento Javascript/Typescript 

* Pip: Gerenciador de pacotes do Python (sudo apt-get install python3-pip)
* Npm: Gerenciador de pacotes Javascript (sudo apt-get install nodejs)
* Jupyter notebook/nteract/Google colab: Ambiente de programação científica (sudo apt-get install jupyter-notebook, ou https://nteract.io)

Não é estritamente necessário, mas vale a pena instalar as seguintes ferramentas:

* virtualenvwrapper: isola ambientes de desenvolvimento para não contaminar o resto do seu sistema
* flake8: busca erros de estilo e programação no seu código
* black: corrige alguns destes erros automaticamente
* pytest, pytest-cov: criação de testes unitários
* Editores de código/IDE:
    Utilize o seu favorito. Caso precise de uma recomendação, seguem algumas:
    
 * PyCharm Educacional - IDE com ótimos recursos de introspecção e refatoração, mas adora memória RAM. Possui uma versão livre e uma versão profissional paga, mas que é gratuita para estudantes.
 * VSCode - um bom meio termo entre uma IDE e um editor de código leve. Criado para Javascript, mas possui bons plugins para Python e várias outras linguagens.
 * Vi/Vim - herança dos anos 70 que nunca morre ;) Instale os plugins para Python e Typescript.

DICA: em todos os casos, prefira instalar os pacotes Python utilizando o apt-get ou o mecanismo que sua distribuição fornece e somente se o pacote não existir, instale-o utilizando o pip. Se utilizar o pip, faça a instalação de usuário utilizando o comando ``pip3 install <pacote> --user``.


Cronograma de atividades
========================

+--------+-------+------------------------------------------------------------+
| Semana | Data  |                            Aula                            |
+========+=======+============================================================+
| 1      | 14/03 | Início das aulas – Apresentação do curso                   |
|        |       |                                                            |
|        |       | * Métodos de desenvolvimento de software                   |
|        |       | * Panorama do curso                                        |
|        |       | * Ferramentas e linguagens de programação                  |
|        |       | * Jupyter notebook                                         |
+--------+-------+------------------------------------------------------------+
| 2      | 19/03 | Introdução ao Python                                       |
|        |       |                                                            |
|        |       | * Tipos básicos e estruturas de dados                      |
|        |       | * Definindo funções                                        |
|        |       | * Estruturas de controle                                   |
|        |       | * Iteração em listas e dicionários                         |
+--------+-------+------------------------------------------------------------+
|        | 21/03 | Orientação a objetos                                       |
|        |       |                                                            |
|        |       | * Declaração de classes                                    |
|        |       | * Métodos vs funções                                       |
|        |       | * Métodos especiais                                        |
|        |       | * Reaproveitamento de código e herança                     |
+--------+-------+------------------------------------------------------------+
| 3      | 26/03 | Programação funcional                                      |
|        |       |                                                            |
|        |       | * Funções como valores                                     |
|        |       | * Funções como objetos/Objetos como funções                |
|        |       | * Funções de segunda ordem (map, filter, reduce)           |
|        |       | * Lambdas e closures                                       |
+--------+-------+------------------------------------------------------------+
|        | 28/03 | Processamento de dados                                     |
|        |       |                                                            |
|        |       | * Compreensão de listas e dicionários                      |
|        |       | * Geradores                                                |
|        |       | * Lazy vs eager                                            |
|        |       | * Listas infinitas                                         |
+--------+-------+------------------------------------------------------------+
| 4      | 02/04 | **Avaliação: Python básico**                               |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
|        | 04/04 | Introdução ao Data Science                                 |
|        |       |                                                            |
|        |       | * Gráficos, vetores e matrizes                             |
|        |       | * Carregando dados com o Pandas                            |
|        |       | * Processando dados públicos                               |
|        |       | * Pnad 2018                                                |
+--------+-------+------------------------------------------------------------+
| 5      | 09/04 | Inteligência de Máquina                                    |
|        |       |                                                            |
|        |       | * Pipeline de tratamento de dados                          |
|        |       | * Visualização de grandes volumes de dados                 |
|        |       | * Agrupamento e classificação                              |
|        |       | * Identificação de padrões                                 |
+--------+-------+------------------------------------------------------------+
|        | 11/04 | Laboratório social: dados sobre o Brasil                   |
|        |       |                                                            |
|        |       | * Quem são os ricos do país?                               |
|        |       | * Como a renda está distribuída?                           |
|        |       | * Quanto as mulheres e negros recebem menos que os         |
|        |       | e brancos?                                                 |
+--------+-------+------------------------------------------------------------+
| 6      | 16/04 | Introdução ao desenvolvimento de Jogos                     |
|        |       |                                                            |
|        |       | * Eventos, loop principal, gráficos                        |
|        |       | * Forças, velocidades e tempo                              |
|        |       | * Criando um platformer com a FGArcade                     |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
|        | 18/04 | Laboratório de Jogos: Super Mario FGA                      |
|        |       |                                                            |
|        |       | * Definindo elementos em uma fase                          |
|        |       | * Entradas do usuário                                      |
|        |       | * Menus e outras telas de jogo                             |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
| 7      | 23/04 | Introdução ao desenvolvimento Web                          |
|        |       |                                                            |
|        |       | * HTML + CSS                                               |
|        |       | * Criando HTML em Python                                   |
|        |       | * Utilizando o navegador para investigar/editar HTML e CSS |
|        |       | * Personalizando sua internet                              |
+--------+-------+------------------------------------------------------------+
|        | 25/04 | Typescript/Javascript                                      |
|        |       |                                                            |
|        |       | * Sintaxe básica                                           |
|        |       | * Objetos e arrays                                         |
|        |       | * Funções                                                  |
|        |       | * Estruturas de controle                                   |
+--------+-------+------------------------------------------------------------+
| 8      | 30/04 | DOM/jQuery/Go horse                                        |
|        |       |                                                            |
|        |       | * Iteração com o navegador                                 |
|        |       | * Encontrando elementos na página                          |
|        |       | * Registrando eventos                                      |
|        |       | * Manipulando a DOM                                        |
+--------+-------+------------------------------------------------------------+
|        | 02/05 | Servidor web                                               |
|        |       |                                                            |
|        |       | * Flask                                                    |
|        |       | * Templates e Jinja2                                       |
|        |       | * JSON                                                     |
|        |       | * Cloud Functions                                          |
+--------+-------+------------------------------------------------------------+
| 9      | 07/05 | Laboratório Web: quão bem você está?                       |
|        |       |                                                            |
|        |       | * Mostrando gráficos                                       |
|        |       | * Lidando com formulários                                  |
|        |       | * Buscando informação no servidor                          |
|        |       | * Deploy                                                   |
+--------+-------+------------------------------------------------------------+
|        | 09/05 | **Avaliação: Python intermediário**                        |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
| 10     | 14/05 | Gerência de projetos                                       |
|        |       |                                                            |
|        |       | * Repositórios, Git e Github                               |
|        |       | * Mantendo a história do projeto                           |
|        |       | * Boas práticas (mantendo a sanidade da equipe)            |
|        |       | * Ferramentas                                              |
+--------+-------+------------------------------------------------------------+
|        | 16/05 | Planejamento de projeto                                    |
|        |       |                                                            |
|        |       | * Definição das equipes                                    |
|        |       | * Github projects (Kanban)                                 |
|        |       | * Planejamento das Issues                                  |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
| 11     | 21/05 | Instrumentação                                             |
|        |       |                                                            |
|        |       | * Integração contínua                                      |
|        |       | * Métricas de qualidade                                    |
|        |       | * Identificando potenciais problemas                       |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
|        | 23/05 | **Atividade: Capture the flag**                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
| 12     | 28/05 | *Não haverá aula*                                          |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
|        | 30/05 | **PROVA: Programação e Desenvolvimento de Software**       |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
| 13     | 04/06 | Ergonomia, design e UX                                     |
|        |       |                                                            |
|        |       | * Hierarquia de informação                                 |
|        |       | * Feedback                                                 |
|        |       | * Heurísticas de Nielsen                                   |
|        |       | * Interfaces do passado e do futuro                        |
+--------+-------+------------------------------------------------------------+
|        | 06/06 | Testes automatizados                                       |
|        |       |                                                            |
|        |       | * Ferramentas de testes                                    |
|        |       | * Desenvolvimento orientado a testes                       |
|        |       | * Cobertura de código                                      |
|        |       | * O que testar?                                            |
+--------+-------+------------------------------------------------------------+
| 14     | 11/06 | Arquitetura de software                                    |
|        |       |                                                            |
|        |       | * Noções básicas de arquitetura e acoplamento              |
|        |       | * Crescimento da complexidade do software                  |
|        |       | * Como se planejar para o futuro?                          |
|        |       | * Boas práticas para criação de APIs                       |
+--------+-------+------------------------------------------------------------+
|        | 13/06 | Arquitetura orientada a objetos                            |
|        |       |                                                            |
|        |       | * Responsabilidades                                        |
|        |       | * Encapsulamento                                           |
|        |       | * Mutabilidade                                             |
|        |       | * Acoplamento                                              |
+--------+-------+------------------------------------------------------------+
| 15     | 18/06 | Simulando tipos nativos (meta-protocolo de objetos)        |
|        |       |                                                            |
|        |       | * Módulos collections.abc                                  |
|        |       | * Acesso a atributos                                       |
|        |       | * Iteração                                                 |
|        |       | * Tamanho, serialização, etc                               |
+--------+-------+------------------------------------------------------------+
|        | 20/06 | Code smells                                                |
|        |       |                                                            |
|        |       | * Como identificá-los                                      |
|        |       | * Smells mais comuns em iniciantes                         |
|        |       | * Árvore sintática de um código “vivo”                     |
|        |       | * Meta programação                                         |
+--------+-------+------------------------------------------------------------+
| 16     | 25/06 | Aplicações poliglotas                                      |
|        |       |                                                            |
|        |       | * Cruzando a barreira entre Python e Js                    |
|        |       | * Funções remotas                                          |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
|        | 27/06 | Frameworks                                                 |
|        |       |                                                            |
|        |       | * Vantagens e desvantagens                                 |
|        |       | * VDOM e outras modas                                      |
|        |       | * Criando HTML com Javascript                              |
|        |       | * Mithril                                                  |
+--------+-------+------------------------------------------------------------+
| 17     | 02/07 | Laboratório de álgebra linear                              |
|        |       |                                                            |
|        |       | * CSS e transformações de matrizes                         |
|        |       | * Transformações em gráficos                               |
|        |       | * Identificando cruzamento de linhas e pontos              |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
|        | 04/07 | **ENTREGA DOS TRABALHOS FINAIS**                           |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
| 18     | 09/07 | Revisão de nota                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+
|        | 11/07 |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
|        |       |                                                            |
+--------+-------+------------------------------------------------------------+


Obs.: O cronograma está sujeito a alterações.
