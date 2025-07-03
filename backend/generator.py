import json
# Prompt generator logic
def generar_prompt(datos):
    nombre = datos.get("name", "Desconocido")
    objetivo = datos.get("goal", "No especificado")
    intencion = datos.get("intention", "Ninguna")

    prompt_txt = (
        f"🧙 Usuario: {nombre}\n"
        f"🎯 Objetivo: {objetivo}\n"
        f"✨ Intención: {intencion}\n"
        f"🧠 Genera un prompt basado en este ritual."
    )

    prompt_json = {
        "usuario": nombre,
        "objetivo": objetivo,
        "intencion": intencion,
        "formato": "prompt"
    }

    return prompt_txt, prompt_json

# Integración con el backend (puedes usarlo en main.py)
def save_prompt(datos, filename="ia_prompt.json"):
    prompt_txt, prompt_json = generar_prompt(datos)
    with open(filename, "w") as f:
        json.dump(prompt_json, f)
    return prompt_txt, filename
