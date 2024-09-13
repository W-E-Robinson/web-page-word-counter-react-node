import { type Context, type ServiceSchema, Errors } from 'moleculer';
import axios, { AxiosError } from 'axios';

import countInformation from '../utils/counting';

const counterServiceSchema: ServiceSchema = {
    name: 'counter',
    actions: {
        count: {
            async handler(ctx: Context<{ url: string }>) {
                const { url } = ctx.params;

                if (!URL.canParse(url)) {
                    const message = `Supplied URL '${url}' cannot be parsed.`;
                    this.logger.error(message);
                    throw new Errors.MoleculerClientError(
                        message,
                        400,
                        'Bad Request',
                    );
                }

                try {
                    const response = await axios.get(url);
                    const html = response.data;

                    const { wordCount, wordsList } = countInformation(html);
                    this.logger.info(`Responding with data for URL: ${url}. Total word Count: ${wordCount}`);
                    return {
                        url,
                        wordCount,
                        wordsList,
                    };
                } catch (error) {
                    if (error instanceof AxiosError) {
                        throw new Errors.MoleculerServerError(
                            error.message ?? 'Unknown axios error',
                            error.status ?? 500,
                            error.code ?? 'Unknown axios type',
                        );
                    } else {
                        throw new Errors.MoleculerServerError(
                            (error as Error).message ?? 'Unknown error',
                            500,
                            'Internal Server Error',
                        );
                    }
                }
            },
        },
    },
};

export default counterServiceSchema;
