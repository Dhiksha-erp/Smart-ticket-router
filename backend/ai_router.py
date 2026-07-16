import os

import json
from dotenv import load_dotenv

from openai import OpenAI

load_dotenv()

client = OpenAI(

    api_key=os.getenv("OPENAI_API_KEY")

)


def analyze_ticket(ticket):

    prompt = f"""

You are an Oracle Fusion ERP Smart Ticket Router.

Analyze the support ticket and return ONLY valid JSON.

Categories:

- Finance

- Procurement

- HR

- IT Support

- Analytics

- Customer Support

Return ONLY this JSON format:

{{

  "category": "",

  "priority": "",

  "assigned_team": "",

  "reason": "",

  "sentiment": ""

}}

Priority must be one of:

- High

- Medium

- Low

Assigned Teams:

Finance ->

- Accounts Payable Team

- Accounts Receivable Team

- General Ledger Team

- Payments Team

Procurement ->

- Procurement Team

HR ->

- HR Support Team

IT Support ->

- IT Helpdesk

Analytics ->

- BI Team

Customer Support ->

- Customer Support Team

Understand the user's intent naturally.

Examples:

"I want leave tomorrow"

-> HR

"Supplier invoice failed"

-> Finance

"My payment is pending"

-> Finance

"PO approval stuck"

-> Procurement

"Unable to login Oracle Fusion"

-> IT Support

"Dashboard report not loading"

-> Analytics

Now classify this ticket:

{ticket}

"""
    try:

        response = client.chat.completions.create(

            model="gpt-4.1-mini",

            messages=[

                {

                    "role": "system",

                    "content": (

                        "You are an Oracle Fusion ERP ticket routing assistant. "

                        "Always return only valid JSON."

                    ),

                },

                {

                    "role": "user",

                    "content": prompt,

                },

            ],

            temperature=0,

        )

        result = response.choices[0].message.content.strip()

        if result.startswith("```json"):

            result = (

                result.replace("```json", "")

                .replace("```", "")

                .strip()

            )

        elif result.startswith("```"):

            result = (

                result.replace("```", "")

                .strip()

            )

        json.loads(result)

        return result
    except Exception as e:
       fallback = {
           "category": "Customer Support",
           "priority": "Medium",
           "assigned_team": "Customer Support Team",
           "reason": f"AI unavailable: {str(e)}",
           "sentiment": "Neutral"
       }
       return json.dumps(fallback)