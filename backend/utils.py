def validate_config_data(data):
    required_fields = ["name", "temperature"]
    for field in required_fields:
        if field not in data or not data[field]:
            raise ValueError(f"Campo requerido '{field}' no proporcionado o vacío.")
    if not (0.1 <= float(data["temperature"]) <= 1.0):
        raise ValueError("La temperatura debe estar entre 0.1 y 1.0.")
