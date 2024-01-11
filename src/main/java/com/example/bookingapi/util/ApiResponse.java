package com.example.bookingapi.util;

public record ApiResponse(boolean success, String message, Object data, Object error) {

}