import { CreateEmailOptions, Resend } from "resend";

interface ProviderOptions {
  apiKey: string;
}

interface Settings {
  defaultFrom: string;
  defaultReplyTo: string;
}

interface EmailOptions {
  from?: string;
  to: string;
  cc?: string;
  bcc?: string;
  replyTo?: string;
  subject: string;

  // Either text or html is required
  text?: string;
  html?: string;
}

export default {
  init: (providerOptions: ProviderOptions, settings: Settings) => {
    const resend = new Resend(providerOptions.apiKey);

    return {
      send: async (options: EmailOptions) => {
        const { from, to, cc, bcc, replyTo, subject, text, html, ...params } =
          options;

        const _data: CreateEmailOptions = {
          from: from || settings.defaultFrom,
          to,
          cc: cc || "",
          bcc: bcc || "",
          replyTo: replyTo || settings.defaultReplyTo,
          subject,
          text: text || "",
          html: html || "",
          ...params,
        };

        if (!text && !html) {
          throw new Error("text or html is required");
        }

        const { data, error } = await resend.emails.send(_data);

        if (error) throw error;

        return data;
      },
    };
  },
};
