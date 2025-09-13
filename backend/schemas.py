from pydantic import BaseModel, EmailStr
from typing import List

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class ProductBase(BaseModel):
    name: str
    description: str | None = None
    price: float
    stock: int

class ProductResponse(ProductBase):
    id: int
    class Config:
        orm_mode = True

class CartItem(BaseModel):
    product_id: int
    quantity: int

class OrderCreate(BaseModel):
    items: List[CartItem]
