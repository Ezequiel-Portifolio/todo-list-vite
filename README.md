# ✅ Todo List - Vite + React + TypeScript

Um gerenciador de tarefas moderno, rápido e funcional desenvolvido com **React 19**, **Vite** e **TypeScript**. Este projeto foi refatorado para seguir as melhores práticas de componentização e organização de código.

---

## ✨ Funcionalidades

- **Gerenciamento de Tarefas**: Adicione, edite, marque como concluído ou exclua tarefas rapidamente.
- **Persistência Local**: Seus dados ficam salvos no seu navegador (**LocalStorage**), então você não perde nada ao atualizar a página.
- **Filtros Inteligentes**: Visualize apenas as tarefas que importam (Todas, Ativas ou Concluídas).
- **Limpeza Rápida**: Botão dedicado para remover todas as tarefas concluídas de uma só vez.
- **Interface Moderna**: Design limpo, responsivo e com feedback visual instantâneo.

---

## 🛠️ Tecnologias Utilizadas

- [React 19](https://react.dev/) - Biblioteca para interfaces de usuário.
- [Vite](https://vitejs.dev/) - Build tool extremamente rápido.
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança e produtividade.
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Estilização moderna com variáveis e design system minimalista.

---

## 📂 Estrutura do Projeto

A estrutura de pastas foi organizada para separar responsabilidades e facilitar a escalabilidade:

```text
src/
├── assets/          # Arquivos estáticos (imagens, ícones)
├── components/      # Componentes reutilizáveis do sistema
│   ├── TodoForm.tsx # Formulário de adição de tarefas
│   ├── TodoItem.tsx # Item individual com lógica de edição e toggle
│   └── TodoList.tsx # Listagem e iteração das tarefas
├── App.css          # Estilização global e variáveis CSS
├── App.tsx          # Orquestrador de estado e layout principal
├── types.ts         # Definições de tipos (interfaces) TypeScript
├── main.tsx         # Ponto de entrada da aplicação
└── index.css        # Estilos base de reset
```

---

## ⚙️ Como Funciona a Lógica

### 💾 Persistência de Dados

Utilizamos o hook `useEffect` para sincronizar o estado `todos` com o `localStorage`. Na inicialização, o `useState` executa uma função de leitura para recuperar os dados salvos anteriormente.

### 🔄 Fluxo de Estado

O estado principal reside no `App.tsx` (Single Source of Truth), sendo distribuído via _props_ para os componentes filhos. Isso garante que a interface reflita o estado real dos dados instantaneamente.

### ✏️ Edição em Tempo Real

Ao clicar no botão de edição, o `TodoItem` alterna para um modo de entrada de texto. A alteração é confirmada ao pressionar `Enter` ou ao perder o foco do campo (`onBlur`).

---

## 🚀 Como Iniciar

1. **Instale as dependências**:

   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

3. **Acesse no navegador**:
   Geralmente em `http://localhost:5173`.

---

## 📋 Próximos Passos (Backlog)

- [ ] Adicionar suporte a categorias ou tags.
- [ ] Implementar datas de entrega (Deadlines).
- [ ] Adicionar temas Dark/Light mode.
- [ ] Implementar animações com Framer Motion.

---

Desenvolvido para fins de aprendizado e produtividade! 🚀
