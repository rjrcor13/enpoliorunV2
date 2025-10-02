import endPolioLogo from '@/assets/end-polio-logo.png';
import endpoliorunlogo from '@/assets/endpoliorun.png';
import rcEndPolioLogoW from '@/assets/rotary-end-polio-w.png';
import rcLogo from '@/assets/rotary-logo-w.png';
import { Button } from '@/components/ui/button';
import { Image } from '@imagekit/react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Route, Users } from 'lucide-react';
import React from 'react';
import Countdown from './Countdown';

//const endpoliorunUrl = 'end_polio_run.png'; // ⬅️ CONFIRM THIS PATH
// const endpoliorunUrl = `https://ik.imagekit.io/zoiyj5rqq/endpoliorun/${endpoliorun}`;

const HeroSection = () => {
	const scrollToRegistration = () => {
		const element = document.getElementById('registration');
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};
	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden bg-cover bg-center "
		>
			<div className="absolute inset-0 hero-pattern"></div>
			<div className="absolute inset-0 gradient-black-bg_ bg-black  opacity-20"></div>
			<div className="container mx-auto px-4 text-center relative z-10 ">
				<motion.div
					initial={{
						opacity: 0,
						y: 50,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.8,
					}}
					className="max-w-4xl mx-auto"
				>
					{/* Logos */}
					<div className="flex justify-center items-center space-x-8 mb-8">
						<motion.div
							initial={{
								scale: 0,
							}}
							animate={{
								scale: 1,
							}}
							transition={{
								delay: 0.2,
								duration: 0.6,
							}}
							className=""
						>
							{/* <Image
								src={`/endpoliorun/${endpoliorunUrl}`}
								alt="End Polio Run 2026 Logo"
								className="p-2"
								loading="lazy"
								transformation={[{ width: 900, quality: 100 }]}
							/> */}
							<img
								src={endpoliorunlogo}
								alt="end polio run"
								width={500}
								height={300}
								className="p-2"
							/>
						</motion.div>
					</div>

					<motion.h2
						initial={{
							opacity: 0,
							y: 30,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							delay: 0.8,
							duration: 0.8,
						}}
						className="text-3xl md:text-6xl font-bold mb-6 text-orange-400"
					>
						<p className="text-shadow-lg">RUN TO END POLIO</p>
					</motion.h2>

					<motion.div
						initial={{
							opacity: 0,
							y: 30,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							delay: 1.2,
							duration: 0.8,
						}}
						className="text-3xl md:text-3xl font-bold mb-6 text-white"
					>
						<p className="text-shadow-lg">02.08.26</p>
					</motion.div>

					{/* CTA Button */}
					<motion.div
						initial={{
							opacity: 0,
							scale: 0.8,
						}}
						animate={{
							opacity: 1,
							scale: 1,
						}}
						transition={{
							delay: 1.4,
							duration: 0.6,
						}}
					>
						<Countdown />

						<Button
							onClick={scrollToRegistration}
							size="xl"
							className="gradient-bg text-white text-xl px-12 py-4 rounded-lg hover:scale-105 transition-transform shadow-2xl hover:cursor-pointer"
						>
							Register Now
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Decorative Elements */}
		</section>
	);
};
export default HeroSection;
