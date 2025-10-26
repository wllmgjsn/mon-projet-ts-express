import fs from "fs";
import path from "path";
import { isBook, isUser, isBookRental } from "../utils/guards";

class ExporterService {
  private static outputDir = path.join(__dirname, "..", "..", "output");

  // We make get generic so we can use it easily in our controller
  
  public static get<T>(data: T[]): string | undefined {
    if (data.length === 0) return "";

    // We check if the designated output folder exists
    // If not, we create it
    
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    // Here we assume that the array only contains elements of the same type.
    
    const first = data[0];
    let filePath: string;
    
    // We create headers for our CSV file, object fields name will be added in it
    
    let headers: string[];

    // We check the type of the first object of the given array
    // filePath is defined as the name of the ressource being extracted temporarily
    
    if (isBook(first)) {
      filePath = "books.csv";
      headers = ["id", "title", "author", "year", "genre"];
    } else if (isUser(first)) {
      filePath = "users.csv";
      headers = ["id", "name", "email"];
    } else if (isBookRental(first)) {
      filePath = "rentals.csv";
      headers = ["id", "userId", "bookId", "startDate", "endDate"];
    } else throw new Error("Something went wrong"); 

    // We create a string off the headers array and we add it to a new variable named res
    // Note that res is a string containing all the CSV data and will be sent in response
    // to the GET method and given as data in fs.writeFileSync below in order to generate
    // a CSV file

    let res = headers.join(";") + "\n";

    // For each element of the given array we create a CSV line that we directly add into res
    
    for (const d of data) {
      const row = headers.map((h) => {
        const value = (d as any)[h];
        return value !== undefined ? String(value).replace(/;/g, ",") : "";
      });
      res += row.join(";") + "\n";
    }

    // filePath is now a complete and valid path to our target file
    
    filePath = path.join(this.outputDir, filePath);

    // We finally try to write into the target file

    try {
      fs.writeFileSync(filePath, res, "utf-8");
      console.log("successful export");
      return res;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
}

export { ExporterService };
