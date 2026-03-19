"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateCarousel from './CertificateCarousel';

// Text cards removed — this component now only shows the photo carousel

export default function EducationLottie() {
	const [photoIndex, setPhotoIndex] = useState(0);

	const photos = [
		"/assets/images/First.png",
		"/assets/images/Two.png",
		"/assets/images/Three.png",
		"/assets/images/Four.png",
		"/assets/images/Five.png",
		"/assets/images/Six.png",
		"/assets/images/Seven.png",
		"/assets/images/Eight.png",
		"/assets/images/Nine.png",
	];

	// text card auto-advance removed

	useEffect(() => {
		const id = setInterval(() => {
			setPhotoIndex((p) => (p + 1) % photos.length);
		}, 3000);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="w-full max-w-4xl mx-auto">
			<div className="relative">
				{/* text cards removed; showing photo carousel below */}

				{/* Photo transit card */}
				<div className="mt-25">
					<div className="w-full max-w-3xl mx-auto">
						<div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
							<AnimatePresence initial={false} mode="wait">
								<motion.img
									key={photoIndex}
									src={photos[photoIndex]}
									alt={`photo-${photoIndex}`}
									className="w-full h-96 object-cover bg-gray-100 dark:bg-gray-900"
									initial={{ opacity: 0, x: 30 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -30 }}
									transition={{ duration: 0.5 }}
								/>
							</AnimatePresence>

							{/* Photo dots */}
							<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
								{photos.map((p, i) => (
									<button
										key={i}
										onClick={() => setPhotoIndex(i)}
										className={`w-2 h-2 rounded-full ${i === photoIndex ? 'bg-acid-lime' : 'bg-white/60'}`}
										aria-label={`Show photo ${i + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Certificate transit card */}
				<div className="mt-6">
					<div className="w-full max-w-3xl mx-auto">
						<div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
							<CertificateCarousel />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

