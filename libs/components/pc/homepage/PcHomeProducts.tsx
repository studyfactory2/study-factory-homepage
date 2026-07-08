import Link from 'next/link';
import type { MouseEvent } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_PRODUCT_PROMOS } from '../../../config';

const playPromoVideo = (event: MouseEvent<HTMLElement>) => {
	const video = event.currentTarget.querySelector('video');
	void video?.play();
};

const pausePromoVideo = (event: MouseEvent<HTMLElement>) => {
	const video = event.currentTarget.querySelector('video');

	if (!video) return;
	video.pause();
	video.currentTime = 0;
};

const PcHomeProducts = () => {
	return (
		<Box component="section" className="pc-home-products">
			<Stack direction="row" justifyContent="space-between" className="pc-section-head pc-section-head--row">
				<Stack>
					<Typography component="span" className="section-kicker">
						Product Ecosystem
					</Typography>
					<Typography component="h2">운영 경험을 제품으로 확장합니다.</Typography>
				</Stack>
				<Typography component="p">
					공간에서 반복되는 예약, 출석, 상담, 루틴 문제를 직접 겪고 제품으로 만듭니다. Research Lab은 운영을 아는
					제품 개발 스튜디오입니다.
				</Typography>
			</Stack>

			<Stack direction="row" className="pc-home-products__promos">
				{HOME_PRODUCT_PROMOS.map((promo) => (
					<Box
						component={Link}
						href={promo.href}
						key={promo.slug}
						className="pc-home-products__promo"
						onMouseEnter={playPromoVideo}
						onMouseLeave={pausePromoVideo}
					>
						<Box className="pc-home-products__visual" aria-hidden="true">
							{promo.video ? (
								<video muted loop playsInline preload="metadata">
									<source src={promo.video} type="video/mp4" />
								</video>
							) : (
								<Stack className="pc-home-products__visual-fallback">
									<span />
									<span />
									<span />
								</Stack>
							)}
						</Box>

						<Stack className="pc-home-products__promo-copy">
							<Typography component="span">{promo.kicker}</Typography>
							<Typography component="strong">{promo.name}</Typography>
							<Typography component="h3">{promo.title}</Typography>
							<Typography component="p">{promo.body}</Typography>

							<Stack direction="row" className="pc-home-products__points">
								{promo.points.map((point) => (
									<Typography key={point} component="em">
										{point}
									</Typography>
								))}
							</Stack>

							<Stack direction="row" alignItems="center" className="pc-home-products__cta">
								{promo.cta}
								<ArrowOutwardIcon fontSize="small" />
							</Stack>
						</Stack>
					</Box>
				))}
			</Stack>

			<Stack direction="row" className="pc-home-products__lab">
				<Typography component="strong">Study Factory Research Lab</Typography>
				<Typography component="p">
					우리는 공부 공간을 운영하고, 그 운영에서 발견한 문제를 웹사이트, PWA, 내부 시스템으로 다시 만듭니다.
				</Typography>
				<Box component={Link} href="/research-lab">
					Research Lab 보기
				</Box>
			</Stack>
		</Box>
	);
};

export default PcHomeProducts;
