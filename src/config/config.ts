interface Config{
	baseUrl: string;
	appType: "demo";
	company: "sloovi"
}


export default {
	baseUrl: process.env.NODE_ENV=="development" ? "": "api/", 
	demoToken: ``,
	demo_company_id: ``  
}