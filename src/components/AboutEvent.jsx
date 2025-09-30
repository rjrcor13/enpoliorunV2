import { motion } from 'framer-motion';
import { Globe, Heart, Target } from 'lucide-react';
import React from 'react';

const AboutEvent = () => {
	return (
		<section id="about" className="py-20 bg-transparent ">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
						About the Event
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Join us in the global fight to eradicate polio once and for all
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<img
							alt="END POLIO campaign runners"
							className="w-full rounded-2xl shadow-2xl"
							src="https://images.unsplash.com/photo-1596460658047-1826d5921c56"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div className="flex items-start space-x-4">
							<div className="bg-purple-100 p-3 rounded-full">
								<Target className="w-6 h-6 text-purple-600" />
							</div>
							<div>
								<h3 className="text-xl font-bold mb-2">END POLIO Campaign</h3>
								<p className="text-gray-600">
									The END POLIO campaign is a global initiative to eradicate
									polio worldwide. Through vaccination efforts and community
									awareness, we're closer than ever to achieving this goal.
								</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="bg-red-100 p-3 rounded-full">
								<Heart className="w-6 h-6 text-red-600" />
							</div>
							<div>
								<h3 className="text-xl font-bold mb-2">
									San Juanico Rotary Club's Mission
								</h3>
								<p className="text-gray-600">
									Our club is dedicated to serving the community and supporting
									global health initiatives. This Fun Run represents our
									commitment to raising awareness and funds for the polio
									eradication effort.
								</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<div className="bg-orange-100 p-3 rounded-full">
								<Globe className="w-6 h-6 text-orange-600" />
							</div>
							<div>
								<h3 className="text-xl font-bold mb-2">Global Impact</h3>
								<p className="text-gray-600">
									Every step you take in this Fun Run contributes to a world
									free from polio. Together, we can make history by being part
									of the generation that ends polio forever.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutEvent;
