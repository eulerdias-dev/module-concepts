import Vue from 'vue';
import vuetify from './vuetify';
import VuetifyDialog from 'vuetify-dialog';

const dialogConfigurations = {
    context: {
        vuetify,
    },
    confirm: {
        actions: {
            false: 'Não',
            true: {
                text: 'Sim',
                color: 'primary',
            },
        },
    },
    warning: {
        actions: {
            false: 'Cancelar',
            true: {
                text: 'Ok',
                color: 'primary',
            },
        },
    },
    error: {
        actions: {
            false: 'Fechar',
        },
    },
    prompt: {
        actions: {
            false: 'Cancelar',
            true: {
                text: 'Ok',
                color: 'primary',
            },
        },
    },
};

Vue.use(VuetifyDialog, dialogConfigurations);

export default {};
