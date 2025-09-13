from fastapi import FastAPI
from backend.routes import auth, products, cart, orders

app = FastAPI(
    title="E-commerce API",
    description="Backend for E-commerce Website",
    version="1.0.0"
)

# Register routes
app.include_router(auth.router, prefix="/auth", tags=["Auth"])
app.include_router(products.router, prefix="/products", tags=["Products"])
app.include_router(cart.router, prefix="/cart", tags=["Cart"])
app.include_router(orders.router, prefix="/orders", tags=["Orders"])

@app.get("/")
def home():
    return {"message": "Welcome to E-commerce API 🚀"}
