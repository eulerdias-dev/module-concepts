import { RouteConfig } from 'vue-router';

export default class RouterConfig {
    public obterRotas(): RouteConfig[] {
        const contexto = require.context('@/modules/features', true, /router.ts$/i);
        return contexto
            .keys()
            .map(contexto)
            .flatMap((ctx: any) => ctx.default);
    }
}