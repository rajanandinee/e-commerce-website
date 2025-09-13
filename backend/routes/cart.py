from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def view_cart():
    return {"message": "Cart route works!"}
