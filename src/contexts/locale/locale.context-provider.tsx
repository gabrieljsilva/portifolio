import { LocaleContext, localeContextInitialValues } from "./locale-context";
import { ReactNode, useState } from "react";

interface LocateContextProviderProps {
	children: ReactNode;
}

export function LocaleContextProvider({
	children,
}: LocateContextProviderProps) {
	const [localeContext, setLocaleContext] = useState(
		localeContextInitialValues,
	);
	const setLocale = (locale: Locale) =>
		setLocaleContext({ ...localeContext, locale });

	return (
		<LocaleContext.Provider value={{ ...localeContext, setLocale }}>
			{children}
		</LocaleContext.Provider>
	);
}
