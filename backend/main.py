from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI(title="rapid-ai-landing API")

# Allow requests from the GitHub Pages deployment and local dev
origins = [
    "https://trelinder.github.io",
    "http://localhost:5173",
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)


class LeadIn(BaseModel):
    name: str
    email: EmailStr
    phone: str
    business_name: str


@app.post("/api/leads", status_code=201)
async def create_lead(lead: LeadIn):
    # Print lead details to the console for visibility
    print("── New lead received ──────────────────────────")
    print(f"  Name:          {lead.name}")
    print(f"  Email:         {lead.email}")
    print(f"  Phone:         {lead.phone}")
    print(f"  Business name: {lead.business_name}")
    print("───────────────────────────────────────────────")

    # TODO: Integrate with a Telegram notification agent to forward
    #       this lead in real time to the configured Telegram chat.

    return {"status": "received"}
