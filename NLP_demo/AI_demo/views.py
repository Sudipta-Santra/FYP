from django.shortcuts import render
from .models import Document
from .utils import extract_pdf_text, ask_gemini


def chat(request):

    doc = Document.objects.first()
    pdf_text = ""

    if doc:
        pdf_text = extract_pdf_text(doc.pdf_file.path)

    if "chat_history" not in request.session:
        request.session["chat_history"] = []

    chat_history = request.session["chat_history"]

    if request.method == "POST":

        question = request.POST.get("question")

        answer = ask_gemini(pdf_text, question)

        chat_history.append({
            "question": question,
            "answer": answer
        })

        request.session["chat_history"] = chat_history

    return render(request, "chat.html", {"chat_history": chat_history})