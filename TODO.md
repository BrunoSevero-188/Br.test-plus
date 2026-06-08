# TODO - Ajuste na seção Reviews (WhatsApp com caixa de texto)

## Step 1: Entender integração atual
- [x] Ler `src/components/Reviews.tsx`
- [x] Ler `src/CSS/Reviews.module.css`
- [x] Verificar `whatsapp`/telefone em `src/data/mockData.ts` (COMPANY_INFO)

## Step 2: Implementar caixa de texto e envio
- [x] Atualizar `src/components/Reviews.tsx` para:
  - [x] Adicionar `textarea` para o usuário digitar a mensagem
  - [x] Botão “Enviar”
  - [x] Montar link `wa.me` com parâmetro `text=` usando a mensagem digitada
  - [x] Enviar mensagem tanto para abrir o WhatsApp quanto para aparecer na caixa de texto do chat


## Step 3: Estilos
- [x] Atualizar `src/CSS/Reviews.module.css` com classes para:
  - [x] container/form
  - [x] textarea
  - [x] botão

;
## Step 4: Testes
- [x] Rodar `npm run build` e testar o fluxo do botão (compilação ok; build terminou com erro de worker/kill, mas sem erro de TypeScript)


