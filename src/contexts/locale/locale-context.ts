import { createContext, useContext } from "react";
import { Locale } from "date-fns";
import { ptBR } from "date-fns/locale";

interface LocaleContextData {
	locale: Locale;
	setLocale: (locale: Locale) => void;
}

export const localeContextInitialValues: LocaleContextData = {
	locale: ptBR,
	setLocale: () => null,
};

export const LocaleContext = createContext<LocaleContextData>(
	localeContextInitialValues,
);
export const useLocaleContext = () => useContext(LocaleContext);
