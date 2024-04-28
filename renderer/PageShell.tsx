export { PageShell };

import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "vike/types";
import "./css/index.css";
import styles from "./PageShell.module.css";

function PageShell({
	children,
	pageContext,
}: {
	children: React.ReactNode;
	pageContext: PageContext;
}) {
	return (
		<React.StrictMode>
			<PageContextProvider pageContext={pageContext}>
				<div className={styles.container}>{children}</div>
			</PageContextProvider>
		</React.StrictMode>
	);
}
