import { HttpError } from "./errors.js";

/**
 * Sends a data request to the dummy-site.dev API.
 * @param {Object} data - The data to be sent.
 * @returns {Object} The response data.
 */
export async function sendDataRequest(data) {
  const response = await fetch("https://dummy-site.dev/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new HttpError(
      response.status,
      "Sending the request failed.",
      responseData,
    );
  }

  return responseData;
}
