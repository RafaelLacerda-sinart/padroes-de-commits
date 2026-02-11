# Git Hook - Validação de Commit (Conventional Commits)

Este script Bash valida se a mensagem de commit segue o padrão **Conventional Commits**.

## Script

```bash
#!/usr/bin/env bash

# Path to the commit message file (provided by Git).
COMMIT_MSG_FILE=$1

# Read the commit message from the file.
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

CONVENTIONAL_COMMIT_REGEX='^(feat|fix|docs|style|refactor|test|chore|build|ci|perf|revert)(\([a-zA-Z0-9_.-]+\))?(!)?:\s.*$'

# Check if the commit message matches the regex
if ! [[ $COMMIT_MSG =~ $CONVENTIONAL_COMMIT_REGEX ]]; then
    echo "ERRO: A mensagem de commit não segue o formato do Conventional Commits."
    echo
    echo "O formato correto da mensagem de commit é obrigatório:"
    echo "  <tipo>(<escopo opcional>): <descrição>"
    echo
    echo "Os tipos válidos são:"
    echo "  feat:     Uma nova funcionalidade."
    echo "  fix:      Correção de um bug."
    echo "  docs:     Alterações na documentação."
    echo "  style:    Alterações de estilo de código (formatação, ponto-e-vírgula ausente, etc.)."
    echo "  refactor: Refatoração de código (nem corrige bug nem adiciona funcionalidade)."
    echo "  test:     Adicionar ou atualizar testes."
    echo "  chore:    Tarefas rotineiras como atualização de dependências ou ferramentas de build."
    echo "  build:    Alterações que afetam o sistema de build ou dependências externas."
    echo "  ci:       Alterações nos arquivos de configuração de CI ou scripts."
    echo "  perf:     Melhorias de desempenho."
    echo "  revert:   Reverter um commit anterior."
    echo
    echo "Exemplos:"
    echo "  feat(auth): adicionar funcionalidade de login"
    echo "  fix(api)!: resolver problema de timeout"
    echo "  docs(readme): atualizar instruções de instalação"
    echo
    exit 1
fi

exit 0
```
# 📚 Guia (Quase) Completo de Comandos Git

Este README contém os principais comandos do Git (porcelains e alguns plumbing), com explicações **muito breves** sobre o que cada um faz.

---

# 🔧 CONFIGURAÇÃO

- `git config` → Define configurações do Git.
- `git config --global user.name` → Define nome global.
- `git config --global user.email` → Define email global.
- `git config --list` → Lista configurações.
- `git help <comando>` → Ajuda detalhada.
- `git <comando> --help` → Manual do comando.

---

# 📁 CRIAÇÃO E CLONAGEM

- `git init` → Inicia repositório.
- `git clone <url>` → Clona repositório remoto.
- `git clone <url> <dir>` → Clona em pasta específica.

---

# 📌 STATUS E INSPEÇÃO

- `git status` → Mostra estado atual.
- `git diff` → Mostra mudanças não commitadas.
- `git diff --staged` → Mostra mudanças staged.
- `git show` → Mostra detalhes de commit.
- `git log` → Histórico de commits.
- `git log --oneline` → Histórico resumido.
- `git log --graph` → Histórico com gráfico.
- `git shortlog` → Resumo por autor.
- `git describe` → Descreve commit com base em tag.
- `git blame <arquivo>` → Mostra autor por linha.
- `git reflog` → Histórico de referências.

---

# ➕ ADICIONAR / REMOVER

- `git add <arquivo>` → Adiciona ao stage.
- `git add .` → Adiciona tudo.
- `git add -A` → Adiciona todas mudanças.
- `git rm <arquivo>` → Remove arquivo.
- `git rm --cached <arquivo>` → Remove do versionamento.
- `git mv <antigo> <novo>` → Move/renomeia arquivo.

---

# 💾 COMMITS

- `git commit -m "msg"` → Cria commit.
- `git commit -am "msg"` → Add + commit.
- `git commit --amend` → Edita último commit.
- `git revert <commit>` → Cria commit desfazendo outro.

---

# 🌿 BRANCHES

- `git branch` → Lista branches.
- `git branch <nome>` → Cria branch.
- `git branch -d <nome>` → Deleta branch.
- `git branch -D <nome>` → Força deleção.
- `git branch -m <novo>` → Renomeia branch.
- `git checkout <branch>` → Troca branch.
- `git checkout -b <branch>` → Cria e troca.
- `git switch <branch>` → Alternativa moderna ao checkout.
- `git switch -c <branch>` → Cria e troca.

---

# 🔀 MERGE / REBASE

- `git merge <branch>` → Junta branch.
- `git merge --no-ff` → Força commit de merge.
- `git rebase <branch>` → Reaplica commits.
- `git rebase -i` → Rebase interativo.
- `git rebase --continue` → Continua rebase.
- `git rebase --abort` → Cancela rebase.
- `git cherry-pick <commit>` → Aplica commit específico.

---

# 🌎 REMOTOS

- `git remote` → Lista remotos.
- `git remote -v` → Mostra URLs.
- `git remote add origin <url>` → Adiciona remoto.
- `git remote remove <nome>` → Remove remoto.
- `git fetch` → Baixa mudanças.
- `git pull` → Fetch + merge.
- `git push` → Envia commits.
- `git push -u origin <branch>` → Define upstream.
- `git push --force` → Força envio.
- `git push --force-with-lease` → Força com segurança.

---

# ⏪ RESET E RESTORE

- `git reset` → Remove do stage.
- `git reset --soft` → Volta commit mantendo stage.
- `git reset --mixed` → Volta commit mantendo arquivos.
- `git reset --hard` → Remove tudo até commit.
- `git restore <arquivo>` → Restaura arquivo.
- `git restore --staged <arquivo>` → Remove do stage.

---

# 📦 STASH

- `git stash` → Guarda alterações temporariamente.
- `git stash list` → Lista stashes.
- `git stash apply` → Aplica stash.
- `git stash pop` → Aplica e remove.
- `git stash drop` → Remove stash.
- `git stash clear` → Limpa todos.

---

# 🏷️ TAGS

- `git tag` → Lista tags.
- `git tag <nome>` → Cria tag leve.
- `git tag -a <nome>` → Cria tag anotada.
- `git tag -d <nome>` → Remove tag.
- `git push --tags` → Envia tags.

---

# 🧩 SUBMÓDULOS

- `git submodule add <url>` → Adiciona submódulo.
- `git submodule init` → Inicializa.
- `git submodule update` → Atualiza.
- `git submodule deinit` → Remove configuração.

---

# 🛠️ MANUTENÇÃO

- `git clean -f` → Remove arquivos não rastreados.
- `git clean -fd` → Remove pastas também.
- `git gc` → Otimiza repositório.
- `git fsck` → Verifica integridade.

---

# 🌳 WORKTREE

- `git worktree add` → Nova árvore de trabalho.
- `git worktree list` → Lista worktrees.
- `git worktree remove` → Remove worktree.

---

# ⚙️ PLUMBING (Internos)

- `git hash-object` → Gera hash de objeto.
- `git cat-file` → Mostra conteúdo de objeto.
- `git ls-tree` → Lista árvore.
- `git write-tree` → Cria objeto tree.
- `git commit-tree` → Cria commit manualmente.
- `git update-index` → Atualiza index.
- `git read-tree` → Lê árvore para index.
- `git symbolic-ref` → Manipula refs simbólicas.
- `git rev-parse` → Resolve revisões.
- `git rev-list` → Lista commits.
- `git pack-objects` → Cria packfile.
- `git unpack-objects` → Extrai packfile.

---


