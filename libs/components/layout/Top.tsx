import Link from "next/link";
import { BRAND, NAV_ITEMS } from "../../config";

const Top = () => {
	return (
		<header id="top">
			<nav className="navbar" aria-label="Main navigation">
				<div className="container">
					<Link href="/" className="brand-link" aria-label="Study Factory home">
						<span className="brand-en">{BRAND.nameEn}</span>
						<span className="brand-ko">{BRAND.nameKo}</span>
					</Link>

					<div className="nav-links">
						{NAV_ITEMS.map((item) => (
							<a key={item.href} href={item.href}>
								{item.label}
							</a>
						))}
					</div>

					<div className="nav-actions">
						<button type="button" className="language-btn">
							KO
						</button>
						<a className="consult-link" href="#contact">
							상담 예약
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Top;
