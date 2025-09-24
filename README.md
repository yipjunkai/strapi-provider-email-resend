# Strapi Provider Email Resend

`strapi-provider-email-resend` is a Strapi email provider plugin for sending emails with [Resend](https://resend.com).

## Installation

```bash
pnpm install strapi-provider-email-resend
```

## Configuration

In your `config/plugins.ts` file, add the following:

```ts
export default ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'strapi-provider-email-resend',
      providerOptions: {
        apiKey: env('RESEND_API_KEY'),
      },
      settings: {
        defaultFrom: 'your-email@example.com',
        defaultReplyTo: 'your-email@example.com',
      },
    },
  },
  // ...
});
```
