# Naped

![Screenshot](screenshot.png)

> Naped: Uma página de notícias e publicações do mundo geek.

## Tópicos Principais

> Sobre o código e estrutura dos arquivos

- Pastas e Regras
- Arquivos
- Ferramentas
- Padrões

### Pastas e Regras -

=> Cada pasta será colocada de forma organizada em `assets`, para facilitar a manutenção do código.

=> A pasta `debug` terá apenas um/alguns arquivos `debug.txt`; também criado para organização e guardar atividades rotineiras.

=> Cada pasta terá o nome correspondete dos arquivos. Ex.: A pasta `css` terá outras pastas css ou arquivos css.

> Dê atenção a pasta global em CSS, ela terá arquivos que influênciam todas as páginas HTML.

=> A pasta `IMG` terá subpastas com arquivos `.png` ou `.svg`. Seguirá também as regras gerais.

### Arquivos -

=> Os arquivos seão separados e organizados em pastas correspondentes. Portanto uma outra pasta não será afetada.

=> O arquivo(s) `.txt` na pasta `debug` será informativo, ajustado para manutenção e instrução do código.

=> Arquivos terão seu nome correspondente, isso significa que de forma prática; `noticias.html` é à página de noticias. E seu(s) arquivo(s) css terão a pasta raíz com o mesmo nome.

### Ferramentas -

=> As ferramentas utilizadas serão:

- [X] HTML
- [X] CSS
- [X] JS
- [X] FIGMA
- [X] GIT
- [X] VSCODE

### Padrões -

> O site terá váriaveis de controle do código de forma padrão.

- Cores
- Fontes

1. **-Cores-**

> // CORES UTILIZADAS NO ROOT - VCC

```
--purple: #8257E6;
--purple-100: #a179ff;
--purple-200: #6a47bb;

--white: #FEFBFB;
--white-100: #FFFFFF;
--white-200: #C4C4C4;

--gray: #282830;
--gray-100: #3b3b43;
--gray-200: #191920;

--dark: #13131F;
--dark-100: #13131f8e;
--dark-200: #11111b;
```

=> As cores `PAI`, como por exemplo `--dark: #13131F;` terá 100 de tom mais claro e 200 mais escuro, dessa cor. Logo, entenda que a variável sem número, é a principal. As demais são herdadas por essa cor principal.

2. **-Fontes-**

> // FONTES UTILIZADAS NO ROOT - VCC

```
--inter: 'Inter';
--deca: 'Lexend Deca';
```
=> API Google fonts

```
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

> Clone esse repositório no seu terminal com :

```
git clone https://github.com/ErickNoGit/Front-end.git
```