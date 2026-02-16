import Layout from "../components/layout/layout"
import Brands1 from "../components/sections/Brands1"
import Contact1 from "../components/sections/Contact1"
import Home1 from "../components/sections/Home1"
import Home2 from "../components/sections/Home2"
import Skills1 from "../components/sections/Skills1"
import Static1 from "../components/sections/Static1"
import PortfolioSection from "../components/sections/protofolio-section"

export default function Home() {

	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Home1 />
				<Home2 />
				<Static1 />
				<PortfolioSection />
				<Skills1 />
				<Brands1 />
				<Contact1 />
			</Layout>
		</>
	)
}