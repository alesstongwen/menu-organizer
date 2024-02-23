import { readFile } from "node:fs/promises";
import { EOL } from "os";
import { IWritable } from "./IWritable";

export class CsvMenuParser {
  csvName: string;

  constructor(csvName: string) {
    this.csvName = csvName;
  }
  async parse(): Promise<
    Record<string, { name: string; quantity: string; price: number }[]>
  > {
    const data = await readFile(this.csvName, "utf8");
    const menu: Record<
      string,
      { name: string; quantity: string; price: number }[]
    > = {};
    const lines = data.trim().split(EOL);

    for (const line of lines) {
      const [type, name, quantity, price] = line.split(",");
      if (!menu[type]) menu[type] = [];
      menu[type].push({ name, quantity, price: parseFloat(price.slice(1)) });
    }
    return menu;
  }
  async writeMenu(writer: IWritable): Promise<void> {
    const menu = await this.parse();
    await writer.write(menu);
  }
}
