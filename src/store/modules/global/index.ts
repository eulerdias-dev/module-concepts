import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({
    namespaced: true,
    name: 'global',
    store,
    dynamic: true,
})
export class GlobalModule extends VuexModule {
    private loading = false;

    public get getLoading() {
        return this.loading;
    }

    @Mutation
    public setLoading(status: boolean) {
        this.loading = status;
    }
}

export default getModule(GlobalModule);