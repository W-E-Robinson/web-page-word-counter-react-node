import { type ServiceSchema } from 'moleculer';
import ApiGatewayService, { type ApiSettingsSchema } from 'moleculer-web';

const apiServiceSchema: ServiceSchema<ApiSettingsSchema> = {
    name: 'api',
    mixins: [ApiGatewayService],

    settings: {
        port: 8080,
        cors: {
            origin: '*',
            methods: ['GET'],
        },
        routes: [
            {
                path: '/count',
                mappingPolicy: 'restrict',
                aliases: {
                    'GET /': 'counter.count',
                },
            },
        ],
    },
};

export default apiServiceSchema;
