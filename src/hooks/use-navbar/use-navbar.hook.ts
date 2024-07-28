import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { NavbarItemProps } from "../../components/navbar/fragments";

export function useNavbar(items: Array<Omit<NavbarItemProps, "active">>) {
	const location = useLocation();

	const memoizedItems: NavbarItemProps[] = useMemo(() => {
		return items.map((item) => {
			const isActive = item.path === location.pathname;
			const navBarItem: NavbarItemProps = {
				...item,
				active: isActive,
			};
			return navBarItem;
		});
	}, [items, location.pathname]);

	return {
		items: memoizedItems,
	};
}
