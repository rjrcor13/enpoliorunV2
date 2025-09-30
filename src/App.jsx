import AboutEvent from '@/components/AboutEvent2';
import EventDetails from '@/components/EventDetails';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import Footer from './components/Footer';
import RouteMap from './components/RouteMap';

function App() {
	return (
		<>
			<main>
				<title>END POLIO RUN 2026</title>
				<meta name="description" content="Run to End Polio" />
			</main>

			<div className="min-h-screen flex_ items-center justify-center gradient-bg relative overflow-hidden bg-cover bg-center ">
				{/* <div className="absolute inset-0 hero-pattern z-10"></div> */}
				{/* <div className="absolute inset-0 gradient-black-bg_ bg-black  opacity-20"></div> */}
				<Navigation />
				<HeroSection />
				<AboutEvent />
				<EventDetails />
				{/* <RouteMap /> */}
				<Footer />
			</div>
		</>
	);
}

export default App;
