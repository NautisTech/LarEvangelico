import { publicApiClient, type RequestConfig } from '../client'

class MailerAPI {
    private baseUrl = '/public/mailer'

    /**
     * Enviar Email do Mailer
     * @example
     * ```ts
     * const result = await mailerAPI.enviarEmail({
     *   to: 'destinatario@exemplo.com',
     *   subject: 'Teste rápido',
     *   text: 'Olá! Este é um email de teste enviado via API.'
     * })
     * ```
     */
    async enviarEmail(
        dados: {
            to: string;
            subject: string;
            text: string;
        },
        config?: RequestConfig
    ): Promise<Response> {
        return publicApiClient.post<Response>(
            `${this.baseUrl}/send`,
            {
                ...dados
            },
            {
                ...config
            }
        )
    }
}

export const mailerAPI = new MailerAPI()