// import { Image } from '@imagekit/react';
// import { motion } from 'framer-motion';
// import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
// import React from 'react';

// // Animation for fade-in
// const footerVariants = {
// 	hidden: { opacity: 0, y: 30 },
// 	show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// // --- Data Setup ---

// // Rotary International (Main Initiative Owner)
// const mainInitiative = {
// 	name: 'Rotary International: End Polio Now',
// 	logoPath: 'rotary-end-polio-w.png', // Path to the main Rotary logo
// 	link: 'https://www.rotary.org/en/our-causes/ending-polio',
// };

// // Primary Organizers (Specific Clubs)
// const organizers = [
// 	{
// 		name: 'Rotary Club of San Juanico',
// 		logoPath: 'rcsanjuanico.png',
// 		link: 'https://example.com/rc-sanjuanico',
// 	},
// 	{
// 		name: 'Rotaract Club Partner',
// 		logoPath: 'rotaracsj.png',
// 		link: 'https://example.com/rotaract',
// 	},
// 	{
// 		name: 'Interact Club Partner',
// 		logoPath: 'rotaract.png',
// 		link: 'https://example.com/interact',
// 	},
// 	{
// 		name: 'Interact Club Partner',
// 		logoPath: 'interact.png',
// 		link: 'https://example.com/interact',
// 	},
// ];

// // Sponsors (Remain the same, adjust paths as needed)
// const sponsors = [
// 	{ name: 'Platinum Sponsor', path: 'PLATINUM_SPONSOR.png', link: '#' },
// 	{ name: 'Gold Sponsor', path: 'GOLD_SPONSOR.png', link: '#' },
// 	{ name: 'Silver Sponsor', path: 'SILVER_SPONSOR.png', link: '#' },
// 	{ name: 'Bronze Sponsor', path: 'BRONZE_SPONSOR.png', link: '#' },
// 	{ name: 'Media Partner', path: 'MEDIA_PARTNER.png', link: '#' },
// 	{ name: 'Venue Partner', path: 'VENUE_PARTNER.png', link: '#' },
// ];

// const Footer = () => {
// 	return (
// 		<motion.footer
// 			id="footer"
// 			variants={footerVariants}
// 			initial="hidden"
// 			whileInView="show"
// 			viewport={{ once: true }}
// 			className="bg-gradient text-white pt-16 pb-8 border-t border-red-700"
// 		>
// 			<div className="container mx-auto px-6">
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-50 mb-12">
// 					<div className="flex flex-col items-center md:items-start text-center md:text-left">
// 						<h4 className="text-lg font-bold text-yellow-400 text-shadow-lg mb-3 uppercase tracking-wider">
// 							A Project for
// 						</h4>
// 						<Image
// 							src={`/endpoliorun/${mainInitiative.logoPath}`}
// 							alt={mainInitiative.name}
// 							className="w-auto h-16 mb-4"
// 							loading="lazy"
// 							transformation={[{ height: 100, quality: 80 }]}
// 						/>
// 						<p className="text-sm text-white max-w-xs md:max-w-none text-shadow-md">
// 							Joining hands to make history and eradicate polio worldwide. Every
// 							step counts!
// 						</p>
// 						<a
// 							href={mainInitiative.link}
// 							target="_blank"
// 							rel="noopener noreferrer"
// 							className="mt-3 text-purple-300 hover:text-red-400 font-semibold text-sm transition-colors"
// 						>
// 							Learn more about End Polio Now &rarr;
// 						</a>
// 					</div>

// 					{/* Contact Info */}
// 					<div className="text-center md:text-left">
// 						<h4 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider text-shadow-lg">
// 							Contact Us
// 						</h4>
// 						<ul className="space-y-3 text-whitetext-base">
// 							<li className="flex items-center justify-center md:justify-start text-shadow-md">
// 								<Mail className="w-5 h-5 text-white mr-3 flex-shrink-0" />
// 								<a
// 									href="mailto:endpoliorun26@gmail.com"
// 									className="hover:text-red-400 transition-colors"
// 								>
// 									endpoliorun26@gmail.com
// 								</a>
// 							</li>
// 							<li className="flex items-center justify-center md:justify-start text-shadow-md">
// 								<Phone className="w-5 h-5 text-white mr-3 flex-shrink-0" />
// 								<a
// 									href="tel:+639123456789"
// 									className="hover:text-red-400 transition-colors"
// 								>
// 									+63 917 183 5818
// 								</a>
// 							</li>
// 							<li className="flex items-start justify-center md:justify-start text-shadow-md">
// 								<MapPin className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
// 								<span>
// 									RC San Juanico Club House, New Bus Terminal, Abucay , Tacloban
// 									City, Philippines
// 								</span>
// 							</li>
// 						</ul>
// 					</div>

// 					{/* Social Media */}
// 					<div className="text-center md:text-left">
// 						<h4 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider text-shadow-lg">
// 							Follow Us
// 						</h4>
// 						<ul className="flex justify-center md:justify-start space-x-6">
// 							<li>
// 								<a
// 									href="#"
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="text-white hover:text-red-400 transition-colors"
// 								>
// 									<Facebook className="w-7 h-7" />
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>

// 				{/* Mid Section: Organizers (Specific Clubs) */}
// 				<div className="mb-12">
// 					<div className="flex justify-center items-center my-8 gap-4">
// 						<Image
// 							src={`/endpoliorun/run-logo.png`}
// 							alt="end polio now logo"
// 							className=" h-auto max-h-20 w-20 "
// 							loading="lazy"
// 							transformation={[{ width: 300, quality: 70 }]}
// 						/>
// 						<Image
// 							src={`/endpoliorun/end-polio-logo.png`}
// 							alt="end polio now logo"
// 							className=" h-auto max-h-20 w-20 "
// 							loading="lazy"
// 							transformation={[{ width: 300, quality: 70 }]}
// 						/>
// 					</div>
// 					<h3 className="text-center text-xl md:text-2xl font-bold mb-8 text-yellow-400 uppercase tracking-widest text-shadow-lg">
// 						Organized By
// 					</h3>

// 					<div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
// 						{organizers.map((org, index) => (
// 							<a
// 								key={index}
// 								href={org.link}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className=" w-32 h-16 md:w-40 md:h-20 flex flex-col items-center justify-center p-2 transition-transform hover:scale-105 group"
// 							>
// 								<Image
// 									src={`/endpoliorun/${org.logoPath}`}
// 									alt={org.name}
// 									className="w-full h-auto max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
// 									loading="lazy"
// 									transformation={[{ width: 300, quality: 70 }]}
// 								/>
// 								{/* <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors text-center">
// 									{org.name}
// 								</span> */}
// 							</a>
// 						))}
// 					</div>
// 				</div>

// 				{/* Bottom Section: Sponsors */}
// 				{/* <div className="mb-12">
// 					<h3 className="text-center text-xl md:text-2xl font-bold mb-8 text-gray-400 uppercase tracking-widest">
// 						Our Valued Partners & Sponsors
// 					</h3>
// 					<div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
// 						{sponsors.map((sponsor, index) => (
// 							<a
// 								key={index}
// 								href={sponsor.link}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="block w-28 h-14 md:w-36 md:h-18  items-center justify-center p-1 transition-transform hover:scale-105"
// 							>
// 								<Image
// 									src={`/endpoliorun/${sponsor.path}`}
// 									alt={sponsor.name}
// 									className="w-full h-auto max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
// 									loading="lazy"
// 									transformation={[{ width: 250, quality: 70 }]}
// 								/>
// 							</a>
// 						))}
// 					</div>
// 				</div> */}

// 				{/* Copyright */}
// 				<div className="text-center pt-8 border-t border-gray-50 text-sm text-white mt-8">
// 					&copy; {new Date().getFullYear()} Rotary End Polio Run. All rights
// 					reserved.
// 				</div>
// 			</div>
// 		</motion.footer>
// 	);
// };

// export default Footer;

import { Image } from '@imagekit/react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

// Animation for fade-in
const footerVariants = {
	hidden: { opacity: 0, y: 30 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// --- Data Setup ---

// Rotary International (Main Initiative Owner)
const mainInitiative = {
	name: 'Rotary International: End Polio Now',
	logoPath: 'rotary-end-polio-w.png', // Path to the main Rotary logo
	link: 'https://www.rotary.org/en/our-causes/ending-polio',
};

// Primary Organizers (Specific Clubs)
const organizers = [
	// {
	// 	name: 'Rotary Club of San Juanico',
	// 	logoPath: 'rcsanjuanico.png',
	// 	link: '#',
	// },
	{
		name: 'Rotaract Club Partner',
		logoPath: 'ROTARACTSJ.png',
		link: '#',
	},
	{
		name: 'Interact Club Partner',
		logoPath: 'rotaract.png',
		link: '#',
	},
	{
		name: 'Interact Club Partner',
		logoPath: 'INTERACTSPSPS.png',
		link: '#',
	},
];

const Footer = () => {
	return (
		<motion.footer
			id="footer"
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="bg-gradient text-white pt-16 pb-8 border-t border-red-700"
		>
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-gray-50 mb-12">
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<h4 className="text-lg font-bold text-yellow-400 text-shadow-lg mb-3 uppercase tracking-wider">
							A Project for
						</h4>
						<Image
							src={`/endpoliorun/${mainInitiative.logoPath}`}
							alt={mainInitiative.name}
							className="w-auto h-16 mb-4"
							loading="lazy"
							transformation={[{ height: 100, quality: 80 }]}
						/>
						<p className="text-sm text-white max-w-xs md:max-w-none text-shadow-md">
							Joining hands to make history and eradicate polio worldwide. Every
							step counts!
						</p>
						<a
							href={mainInitiative.link}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-3 text-purple-300 hover:text-red-400 font-semibold text-sm transition-colors"
						>
							Learn more about End Polio Now &rarr;
						</a>
					</div>

					{/* Contact Info */}
					<div className="text-center md:text-left">
						<h4 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider text-shadow-lg">
							Contact Us
						</h4>
						<ul className="space-y-3 text-white text-base">
							<li className="flex items-center justify-center md:justify-start text-shadow-md">
								<Mail className="w-5 h-5 text-white mr-3 flex-shrink-0" />
								<a
									href="mailto:endpoliorun26@gmail.com"
									className="hover:text-red-400 transition-colors"
								>
									endpoliorun26@gmail.com
								</a>
							</li>
							<li className="flex items-center justify-center md:justify-start text-shadow-md">
								<Phone className="w-5 h-5 text-white mr-3 flex-shrink-0" />
								<a
									href="tel:+639123456789"
									className="hover:text-red-400 transition-colors"
								>
									+63 917 183 5818
								</a>
							</li>
							<li className="flex items-start justify-center md:justify-start text-shadow-md">
								<MapPin className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-1" />
								<span>
									RC San Juanico Club House, New Bus Terminal, Abucay , Tacloban
									City, Philippines
								</span>
							</li>
						</ul>
					</div>

					{/* Social Media */}
					<div className="text-center md:text-left">
						<h4 className="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider text-shadow-lg">
							Follow Us
						</h4>
						<ul className="flex justify-center md:justify-start space-x-6">
							<li>
								<a
									href="#"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-red-400 transition-colors"
								>
									<Facebook className="w-7 h-7" />
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Mid Section: Organizers (Specific Clubs) */}
				<div className="mb-12">
					<div className="flex justify-center items-center my-8 gap-4">
						<Image
							src={`/endpoliorun/run-logo.png`}
							alt="end polio now logo"
							className=" h-auto max-h-20 w-20 "
							loading="lazy"
							transformation={[{ width: 300, quality: 70 }]}
						/>
						<Image
							src={`/endpoliorun/end-polio-logo.png`}
							alt="end polio now logo"
							className=" h-auto max-h-20 w-20 "
							loading="lazy"
							transformation={[{ width: 300, quality: 70 }]}
						/>
					</div>
					<h3 className="text-center text-xl md:text-2xl font-bold mb-8 text-yellow-400 uppercase tracking-widest text-shadow-lg">
						Organized By
					</h3>

					<div className="flex flex-col justify-center items-center ">
						<a href="#" className="transition-transform hover:scale-105">
							<Image
								src={`/endpoliorun/rcsanjuanico.png`}
								alt="end polio now logo"
								className=" h-auto max-h-60 w-120 "
								loading="lazy"
								transformation={[{ width: 500, quality: 70 }]}
							/>
						</a>
					</div>
					<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
						{organizers.map((org, index) => (
							<a
								key={index}
								href={org.link}
								target="_blank"
								rel="noopener noreferrer"
								// INCREASED SIZE & RESPONSIVENESS HERE
								className="w-40 h-20 sm:w-48 sm:h-24 lg:w-56 lg:h-28 flex flex-col items-center justify-center p-2 transition-transform hover:scale-105 group"
							>
								<Image
									src={`/endpoliorun/${org.logoPath}`}
									alt={org.name}
									className="w-full h-auto max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
									loading="lazy"
									transformation={[{ width: 400, quality: 70 }]} // Increased transformation width
								/>
								{/* Name text is currently commented out */}
								{/* <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors text-center">
                                    {org.name}
                                </span> */}
							</a>
						))}
					</div>
				</div>

				{/* Bottom Section: Sponsors - Uncomment if you want sponsors back */}
				{/* <div className="mb-12">
                    <h3 className="text-center text-xl md:text-2xl font-bold mb-8 text-gray-400 uppercase tracking-widest">
                        Our Valued Partners & Sponsors
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
                        {sponsors.map((sponsor, index) => (
                            <a
                                key={index}
                                href={sponsor.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-28 h-14 md:w-36 md:h-18  items-center justify-center p-1 transition-transform hover:scale-105"
                            >
                                <Image
                                    src={`/endpoliorun/${sponsor.path}`}
                                    alt={sponsor.name}
                                    className="w-full h-auto max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    loading="lazy"
                                    transformation={[{ width: 250, quality: 70 }]}
                                />
                            </a>
                        ))}
                    </div>
                </div> */}

				{/* Copyright */}
				<div className="text-center pt-8 border-t border-gray-50 text-sm text-white mt-8">
					&copy; {new Date().getFullYear()} Rotary Club of San Juanico Tacloban
					reserved.
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
