import { ReactNode } from "react";
import {
	Box,
	Dialog,
	DialogProps,
	Typography,
	IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export interface ModalProps extends DialogProps {
	title?: string;
	children: ReactNode;
	onClose: () => void;
	showCloseButton?: boolean;
}

export function Modal({
	title,
	open,
	onClose,
	children,
	showCloseButton = true,
	...props
}: ModalProps) {
	return (
		<Dialog {...props} open={open} onClose={onClose}>
			{(showCloseButton || title) && (
				<Box
					p={1}
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					width={"100%"}
				>
					<Typography variant={"body1"} fontSize={"1.75rem"} fontWeight={"700"}>
						{title}
					</Typography>
					{showCloseButton && (
						<IconButton onClick={onClose} size={"small"}>
							<Close />
						</IconButton>
					)}
				</Box>
			)}

			<Box width={"100%"} p={1}>
				{children}
			</Box>
		</Dialog>
	);
}
