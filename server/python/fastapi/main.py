import random

from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel


class Toss(BaseModel):
    bet: bool


def play(bet):
    return True if bool(random.randint(0, 1)) == bet else False

app = FastAPI()


@app.post("/coin")
async def create_item(toss: Toss):
    return { "win": play(toss.bet) }
