import Vue from 'vue';
import VueI18n from 'vue-i18n';
import LocaleMessageObject = VueI18n.LocaleMessageObject;

import languageEn from "@/labels/languageEN";
import languageEs from "@/labels/languageES";

Vue.use(VueI18n);

const messages:{ [key: string]: LocaleMessageObject } = {
    en: languageEn,
    es: languageEs
}

export default new VueI18n({
    locale: 'es',
    messages: messages,
    fallbackLocale: 'es'
});
