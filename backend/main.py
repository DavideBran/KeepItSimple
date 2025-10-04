import logging
import debugpy
from fastapi import FastAPI

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Start debugpy server
debugpy.listen(("0.0.0.0", 5678))
logger.info("Debugpy server started on port 5678")

app = FastAPI()

@app.get("/")
def read_root():
    logger.info("Root endpoint accessed")
    return {"message": "Keep It Simple API is running 🚀"}

@app.get("/health")
def health_check():
    logger.debug("Health check performed")
    return {"status": "healthy"}