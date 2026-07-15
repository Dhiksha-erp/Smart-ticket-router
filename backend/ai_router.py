def analyze_ticket(ticket):

    text = ticket.lower()

    result = {

        "category": "IT Support",

        "priority": "Low",

        "assigned_team": "IT Support Team",

        "reason": "General ERP support request.",

        "sentiment": "Neutral"

    }

    if "invoice" in text or "supplier" in text:

        result = {

            "category": "Finance",

            "priority": "High",

            "assigned_team": "Accounts Payable Team",

            "reason": "Supplier invoice creation issue.",

            "sentiment": "Negative"

        }

    elif "payment" in text:

        result = {

            "category": "Finance",

            "priority": "High",

            "assigned_team": "Payments Team",

            "reason": "Payment processing failure.",

            "sentiment": "Negative"

        }

    elif "purchase order" in text or "approval" in text:

        result = {

            "category": "Procurement",

            "priority": "Medium",

            "assigned_team": "Procurement Team",

            "reason": "Purchase order approval workflow issue.",

            "sentiment": "Neutral"

        }

    elif "login" in text or "password" in text:

        result = {

            "category": "IT Support",

            "priority": "High",

            "assigned_team": "IT Helpdesk",

            "reason": "Authentication or login issue.",

            "sentiment": "Negative"

        }

    elif "employee" in text or "hr" in text:

        result = {

            "category": "HR",

            "priority": "Medium",

            "assigned_team": "HR Support",

            "reason": "Employee self-service issue.",

            "sentiment": "Neutral"

        }

    elif "report" in text or "dashboard" in text:

        result = {

            "category": "Analytics",

            "priority": "Low",

            "assigned_team": "BI Team",

            "reason": "Reporting or dashboard issue.",

            "sentiment": "Neutral"

        }

    return result
 