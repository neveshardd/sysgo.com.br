---
description: Como habilitar Cloudflare Images para otimização de imagens
---

# Habilitar Cloudflare Images

Para que as imagens funcionem corretamente no seu site implantado no Cloudflare Workers, você precisa habilitar o Cloudflare Images na sua zona.

## Passos para habilitar:

### 1. Acesse o Dashboard do Cloudflare
- Vá para https://dash.cloudflare.com
- Faça login na sua conta

### 2. Selecione seu domínio
- Clique no domínio onde você implantou o projeto (sysgo)

### 3. Habilite Image Transformations
- No menu lateral, vá em **Speed** > **Optimization**
- Role até a seção **Image Optimization**
- Ative a opção **Image Resizing** ou **Transform Images**

### 4. Configure as origens permitidas (Recomendado)
Para maior segurança, restrinja quais origens podem ter suas imagens transformadas:

- Vá em **Images** > **Transformations**
- Configure **Allowed source origins** para incluir apenas seu domínio
- Exemplo: `https://sysgo.workers.dev` ou seu domínio customizado

### 5. Verifique o funcionamento
Após habilitar, suas imagens devem começar a funcionar automaticamente.

## Alternativa: Usar imagens sem otimização

Se você não quiser usar o Cloudflare Images (que pode ter custos adicionais), você pode desabilitar a otimização de imagens no Next.js:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};
```

**Nota:** Isso fará com que as imagens sejam servidas sem otimização, mas funcionarão normalmente.

## Custos

O Cloudflare Images tem um plano gratuito limitado. Veja os detalhes em:
https://developers.cloudflare.com/images/pricing/

## Documentação

Para mais informações, consulte:
- https://developers.cloudflare.com/images/transform-images/
- https://opennext.js.org/cloudflare/howtos/image
