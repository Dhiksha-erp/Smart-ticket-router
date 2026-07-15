# Smart Ticket Router

AI-powered Smart Ticket Router for Oracle ERP Support.
This project was built as a part of the Calfus Mission assignment.

## Project Overview

Smart Ticket Router is an AI-based web application that automatically analyzes Oracle ERP support tickets, predicts their category and priority, and routes them to the appropriate team. It also supports bulk CSV ticket analysis and provides an analytics dashboard for administrators.

## Features

- AI-powered ticket analysis

- Automatic category prediction

- Priority detection

- Smart ticket routing

- Bulk CSV upload

- Ticket history

- Analytics dashboard

- Modern React UI

- FastAPI backend

- OpenAI API integration

## Tech Stack

Frontend

- React

- CSS

Backend

- FastAPI

- Python

AI

- OpenAI API

## Folder Structure
'''
smart-ticket-router/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/
│   ├── main.py
│   ├── ai_router.py
│   ├── database.py
│   ├── requirements.txt
│   └── ...
└── README.md
```
**### Clone the repository**

```bash

git clone https://github.com/Dhiksha-erp/smart-ticket-router.git

```

### Frontend

```bash

cd frontend
npm install
npm run dev

```

### Backend

```bash

cd backend
source venv/bin/activate
python3 -m pip install fastapi
python3 -m pip install uvicorn
python3 -m pip install -r requirements.txt
python3 -m uvicorn main:app --reload --port 8005

```
## Troubleshooting

If you get the error:

```
Address already in use
```

it means another process is already using port 8005.

Find the process:
```bash

lsof -i :8005

```

Kill the process (replace PID with the number shown):

```bash

kill -9 <PID>

```

Then start the backend again:

```bash

python3 -m uvicorn main:app --reload --port 8005

```
 

## Working Demo

Start both frontend and backend servers.

Open:
http://localhost:5173 in your browser.

Create or upload a support ticket.

Click **Analyze Ticket** to view the AI prediction and routing result.

## Screenshots

<img width="1512" height="982" alt="Screenshot 2026-07-15 at 10 06 18 PM" src="https://github.com/user-attachments/assets/f9ed6a55-6949-475e-903c-8e4272554d6c" />

<img width="1512" height="982" alt="Screenshot 2026-07-15 at 10 05 41 PM" src="https://github.com/user-attachments/assets/cc94012b-9595-4150-8028-a659599843fd" />

<img width="1512" height="982" alt="Screenshot 2026-07-15 at 10 05 33 PM" src="https://github.com/user-attachments/assets/0a86e62f-0c7e-4876-a613-cf6f87c45ff9" />




## Future Improvements

- Authentication

- Real-time notifications

- Email integration

- Advanced analytics

- Role-based access

## Author

**Dhiksha M**
 
