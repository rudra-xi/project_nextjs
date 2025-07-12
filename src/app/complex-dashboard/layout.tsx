import Notifications from "./@notifications/page";
import Analytics from "./@analytic/page";
import Revenue from "./@revenue/page";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			{children}
			<Notifications />
			<Analytics />
			<Revenue />
		</section>
	);
}
