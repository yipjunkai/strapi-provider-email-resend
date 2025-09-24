# strapi-provider-email-resend

A Strapi email provider plugin for sending emails with [Resend](https://resend.com).

## Features

- Clean, modern integration with [Resend](https://resend.com)
- Minimal configuration required—just your API key
- Built with Strapi v5 support
- MIT Licensed

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
