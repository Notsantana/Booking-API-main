package com.example.bookingapi.Model;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class paymentInformation {

    private String cardnumber;
    private String expirationDate;
    private String billingaddress;

}
