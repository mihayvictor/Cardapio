package com.example.cardapio.food;

public record FoodResponseDTO(String id, String title, String image, Double price ) {

    public FoodResponseDTO(Food food){
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}
