package org.example;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.model.ValueRange;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.List;

public class RecipeGoogleSheetsAPI {

    public static List<Recipe> getRecipes() throws IOException, GeneralSecurityException {
        final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
        final String spreadsheetId = "19GS84f9oHJlmNnnhIR0dmjfV2XIa47DI1Js3-flW45o";
        final String range = "RecipeData!A2:G";

        Sheets service = new Sheets.Builder(
                HTTP_TRANSPORT,
                GoogleSheetsConfig.JSON_FACTORY,
                GoogleSheetsConfig.getCredentials(HTTP_TRANSPORT)
        )
                .setApplicationName(GoogleSheetsConfig.APPLICATION_NAME)
                .build();

        ValueRange response = service.spreadsheets().values()
                .get(spreadsheetId, range)
                .execute();

        List<List<Object>> values = response.getValues();
        List<Recipe> recipes = new ArrayList<>();

        for (List<Object> row : values) {
            String name = row.get(0).toString();
            String ingredients = row.get(1).toString();
            String equip = row.get(2).toString();
            String steps = row.get(3).toString();
            String time = row.get(4).toString();
            String type = row.get(5).toString();
            String image = row.get(6).toString();

            recipes.add(new Recipe(name, ingredients, equip, steps, time, type, image));
        }

        return recipes;
    }
}
