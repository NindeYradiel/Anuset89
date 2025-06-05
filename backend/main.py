from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import FileResponse
import json
import os
from utils import validate_config_data

app = FastAPI()

@app.post("/generate_config")
async def generate_config(request: Request):
    try:
        data = await request.json()
        validate_config_data(data)
        with open("ia_config.json", "w") as f:
            json.dump(data, f)
        return FileResponse("ia_config.json", filename="ia_config.json")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error al generar configuración: {str(e)}")