import rcEndPolioLogoW from '@/assets/rotary-end-polio-w.png';
import rcEndPolioLogo from '@/assets/rotary-end-polio.png';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const handleRegistrationClick = () => {
	window.open('https://forms.gle/EZMB8BxwhjbcrdU28', '_blank');
};

const Navigation = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? 'sticky-nav shadow-lg ' : 'bg-transparent '
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-22">
					<div className="flex items-center space-x-2">
						{isScrolled ? (
							<img
								alt="San Juanico Rotary Club logo"
								src={rcEndPolioLogoW}
								width={200}
								height={550}
								className="w-55 md:w-70 h-15 md:h-20"
							/>
						) : (
							<img
								alt="San Juanico Rotary Club logo"
								src={rcEndPolioLogoW}
								width={200}
								height={550}
								className="w-55 md:w-70 h-15 md:h-20"
							/>
						)}
					</div>

					{/* Desktop Navigation */}
					<div className=" flex items-center space-x-8">
						<Button
							onClick={handleRegistrationClick}
							className="gradient-bg text-white hover:opacity-90 hover:cursor-pointer shadow-lg"
						>
							Register Now
						</Button>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navigation;
