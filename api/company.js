export default async function handler(req, res) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({
      error: "Query is missing",
    });
  }

  try {
    
    const apiResponse = await fetch(
      `https://api.openregister.de/v1/autocomplete/company?query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENREGISTER_API_KEY}`,
        },
      }
    );

    const data = await apiResponse.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}