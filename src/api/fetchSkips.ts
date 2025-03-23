import { Skip } from "../types/Skip";
import { mockedSkips } from "./mockedSkips";

const API_URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export const fetchSkips = async (): Promise<Skip[]> => {
  try {
    const response = await fetch(API_URL, {
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok)
      throw new Error(`Failed to fetch skips: ${response.statusText}`);
    return response.json();
  } catch (error) {
    // Because this project is just for testing, we're using mocked data instead of throwing an error
    // throw new Error(`Failed to fetch skips: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.error(
      `Failed to fetch skips: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
    return mockedSkips;
  }
};
