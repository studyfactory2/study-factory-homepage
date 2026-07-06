import { Stack } from "@mui/material";
import { BRAND, EXAM_TYPES } from "../../../config";

const PcHomeHero = () => {
	return (
		<Stack className="home-page">
			<section className="home-hero" aria-label="Study Factory hero">
				<div className="hero-media" aria-hidden="true">
					{BRAND.heroVideoUrl ? (
						<video autoPlay muted loop playsInline className="hero-video">
							<source src={BRAND.heroVideoUrl} type="video/mp4" />
						</video>
					) : (
						<div className="hero-video-placeholder">
							<span>Hero film pending</span>
						</div>
					)}
					<div className="hero-overlay" />
				</div>

				<div className="container">
					<div className="hero-content">
						<span className="hero-kicker">{BRAND.nameEn}</span>
						<h1>{BRAND.headline}</h1>
						<strong>{BRAND.nameKo}</strong>
						<p>{BRAND.taglineKo}</p>
						<div className="hero-actions">
							<a href="#contact" className="primary-action">
								상담 예약
							</a>
							<a href="#research-lab" className="secondary-action">
								Research Lab
							</a>
						</div>
					</div>

					<div className="exam-strip" aria-label="Supported exam types">
						{EXAM_TYPES.map((exam) => (
							<span key={exam}>{exam}</span>
						))}
					</div>
				</div>
			</section>
		</Stack>
	);
};

export default PcHomeHero;
