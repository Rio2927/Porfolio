from dotenv import load_dotenv
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

def send_email(pf_visitor,mail_receiver,subject,mesg):
    url = os.getenv("resend_url")
    headers = {
        "Authorization": os.getenv("resend_api_key"),
        "Content-Type": "application/json"
    }
    data = {
        "from": os.getenv("sender_email"),
        "to": os.getenv("personal_email"),
        "subject": subject,
        "html": mesg
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print("Email sent successfully:", response.json())
    else:
        print("Error sending email:", response.text)


@app.route('/')
def home():
    return "Welcome to the Flask Backend with Resend!"

@app.route("/api/contact", methods=["POST"])
def contact():

    payload = request.get_json()
    print("Payload => ",payload)

    print("=== Payload Received ===")
    print("From    :", payload.get("from"))
    print("To      :", payload.get("to"))
    print("Subject :", payload.get("subject"))
    print("HTML    :", payload.get("html"))
    print("========================")

    source = payload.get("from");
    receiver = payload.get("to");
    sub = payload.get("subject");
    html = payload.get("html");

    send_email(source,receiver,sub,html)
    return jsonify({"message": "Message sent!"}), 200


if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')