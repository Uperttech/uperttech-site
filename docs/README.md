# Documentação

## Variáveis ambiente

Por padrão, todas as variáveis ​​de ambiente carregadas estão disponíveis apenas no ambiente Nodejs, o que significa que não serão expostas ao browser.

Para expor uma variável ao navegador, você deve prefixar a variável com `NEXT_PUBLIC_`.
> Ex: NEXT_PUBLIC_SITE_URL=http://localhost:3001

#### Arquivo `.env.local`

Ficam as variáveis que não podem serem compartilhadas no repositório e que são consideradas secretas. Por exemplo, a key do Recaptcha.



#### Arquivo `.env`

Ficam as variáveis que podem serem carregadas em todos os ambientes. Independentemente do ambiente, serão utilizados os mesmos valores das variáveis. Esse arquivo não está incluso no `.gitignore`, ou seja, seu conteúdo estará disponível no repositório.

#### Arquivo `.env.development`

Ficam as variáveis que serão carregadas apenas em ambiente de desenvolvimento, mas seu conteúdo estará disponível nos arquivos do repositório.

#### Arquivo `.env.production`

Ficam as variáveis que serão carregadas apenas em ambiente de produção, mas seu conteúdo estará disponível nos arquivos do repositório.
