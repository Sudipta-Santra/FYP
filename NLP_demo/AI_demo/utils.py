from pypdf import PdfReader
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def extract_pdf_text(pdf_path):

    reader = PdfReader(pdf_path)

    text = ""

    for page in reader.pages:
        page_text = page.extract_text()
        if page_text:
            text += page_text

    return text


def ask_gemini(context, question):

    context = context[:8000]

    prompt = f"""
You are a helpful medical assistant.

If the question relates to the document, use the document.
Otherwise answer using general medical knowledge.

Document:
{context}

Question:
{question}
"""

    response = model.generate_content(prompt)

    return response.text