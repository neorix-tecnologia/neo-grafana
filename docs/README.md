# NeoGrafana

Versão do [Grafana](https://github.com/grafana/grafana.git) com alterações na UI para seu uso isolado junto a plataforma [Neoman](https://neoman.com.br).

## Buscar Alterações da Versão Original

1. Liste todas as origens a partir do comando `git remote -v`, você deve ver como resultado algo assim:

```bash
origin https://github.com/neorix-tecnologia/grafana.git (fetch)
origin https://github.com/neorix-tecnologia/grafana.git (push)
upstream https://github.com/grafana/grafana.git (fetch)
upstream DISABLE (push)
```

2. Certifique-se que o [repositório original](https://github.com/grafana/grafana.git) esteja listado, caso não, o adicione como remoto para buscar potenciais alterações:

```bash
git remote add upstream https://github.com/grafana/grafana.git
git remote set-url --push upstream DISABLE
```

3. Quando você quiser extrair alterações, basta buscar o remoto e fazer o rebase em cima do seu trabalho:

```bash
git fetch upstream
git rebase upstream/master
```

4. Resolva os conflitos, se houver!

## Guia de Desenvolvimento
https://github.com/grafana/grafana/blob/HEAD/contribute/developer-guide.md
