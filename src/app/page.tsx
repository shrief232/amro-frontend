import Layout from "../components/layout/layout"
import Brands1 from "../components/sections/Brands1"
import Contact1 from "../components/sections/Contact1"
import Home1 from "../components/sections/Home1"
import Home2 from "../components/sections/Home2"
import Skills1 from "../components/sections/Skills1"
import Static1 from "../components/sections/Static1"
import PortfolioSection from "../components/sections/protofolio-section"
import { Box } from "@mui/material"

export default function Home() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				{/* 1. About Section */}
				<Box id="about">
					<Home1 />
				</Box>

				<Home2 />

				{/* 2. Services Section */}
				<Box id="services">
					<Static1 />
				</Box>

				{/* 3. Portfolio Section */}
				<Box id="portfolio">
					<PortfolioSection />
				</Box>

				{/* 4. Resume/Skills Section */}
				<Box id="resume">
					<Skills1 />
				</Box>

				<Brands1 />

				{/* 5. Contact Section */}
				<Box id="contact">
					<Contact1 />
				</Box>
			</Layout>
		</>
	)
}