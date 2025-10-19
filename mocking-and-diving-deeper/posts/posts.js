import { sendDataRequest } from "../util/http.js";
import { validateNotEmpty } from "../util/validation.js";

export function savePost(postData) {
  postData.created = new Date();
  return sendDataRequest(postData);
}

export function extractPostData(form) {
  if (!form) throw new Error("Form data is missing.");
  const title = form.get("title");
  const content = form.get("content");

  if (!title || !content) {
    throw new Error("Invalid form data.");
  }

  validateNotEmpty(title, "A title must be provided.");
  validateNotEmpty(content, "Content must not be empty!");

  return { title, content };
}
