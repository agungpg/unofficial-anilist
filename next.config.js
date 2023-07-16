/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  trailingSlash: true,
  async generateStaticParams() {
    // Fetch the dynamic IDs from your data source
    const ids = ['1', '2', '3'];

    // Generate an array of objects representing the static parameters
    const staticParams = ids.map((id) => ({
      params: { id },
    }));

    return staticParams;
  },
}

module.exports = nextConfig
