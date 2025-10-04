FROM python:3.12-slim

WORKDIR /app

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY backend/ .

# Expose both app port and debug port
EXPOSE 8000 5678

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]